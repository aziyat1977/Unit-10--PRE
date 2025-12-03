import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { KahootGame, KahootQuestion, KahootAnswer } from '../types';
import { Play, Trophy, Clock, XCircle, CheckCircle, Users, Music } from 'lucide-react';

interface KahootProps {
  game: KahootGame;
  onExit: () => void;
}

type GamePhase = 'lobby' | 'question' | 'feedback' | 'scoreboard' | 'podium';

export const Kahoot: React.FC<KahootProps> = ({ game, onExit }) => {
  const [phase, setPhase] = useState<GamePhase>('lobby');
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [players, setPlayers] = useState<string[]>([]);
  
  // Ref for cleanup of the feedback timeout
  const feedbackTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  
  const currentQ = game.questions[currentQIndex];

  // Lobby Simulation
  useEffect(() => {
    if (phase === 'lobby') {
      const interval = setInterval(() => {
        setPlayers(prev => {
          if (prev.length < 5) {
            const names = ["CoolCat", "Foodie99", "ChefMaster", "VibeCoder", "Student01"];
            return [...prev, names[prev.length]];
          }
          return prev;
        });
      }, 1500);
      return () => clearInterval(interval);
    }
  }, [phase]);

  // Timer Logic
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (phase === 'question') {
        if (timeLeft > 0) {
            timer = setTimeout(() => setTimeLeft(prev => prev - 1), 1000);
        } else if (timeLeft === 0 && selectedAnswer === null) {
            handleAnswer(-1); // Time out, only if not already answered
        }
    }
    return () => clearTimeout(timer);
  }, [phase, timeLeft, selectedAnswer]);

  // Cleanup feedback timeout on unmount
  useEffect(() => {
    return () => {
      if (feedbackTimeoutRef.current) {
        clearTimeout(feedbackTimeoutRef.current);
      }
    };
  }, []);

  const startGame = () => {
    setPhase('question');
    setTimeLeft(game.questions[0].timeLimit);
  };

  const handleAnswer = (idx: number) => {
    // Prevent multiple answers
    if (selectedAnswer !== null) return;
    
    setSelectedAnswer(idx);
    const isCorrect = idx !== -1 && currentQ.answers[idx].isCorrect;
    
    if (isCorrect) {
      // Score calculation: Base 1000 * (TimeLeft / TotalTime)
      const timeBonus = Math.round(1000 * (timeLeft / currentQ.timeLimit));
      const multiplier = currentQ.isDoublePoints ? 2 : 1;
      setScore(prev => prev + (timeBonus * multiplier) + (streak * 100));
      setStreak(prev => prev + 1);
    } else {
      setStreak(0);
    }
    
    feedbackTimeoutRef.current = setTimeout(() => setPhase('feedback'), 1000);
  };

  const nextQuestion = () => {
    if (currentQIndex < game.questions.length - 1) {
      setCurrentQIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setPhase('question');
      setTimeLeft(game.questions[currentQIndex + 1].timeLimit);
    } else {
      setPhase('podium');
    }
  };

  // --- RENDERERS ---

  if (phase === 'lobby') {
    return (
      <div className="w-full h-full bg-[#46178f] text-white flex flex-col items-center justify-center relative overflow-hidden font-sans">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        
        <motion.div 
          initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
          className="bg-white text-black px-16 py-8 rounded-2xl shadow-2xl mb-16 text-center"
        >
          <div className="text-2xl font-bold text-gray-500 uppercase">Game PIN:</div>
          <div className="text-8xl font-black tracking-widest">395 210</div>
        </motion.div>

        <div className="flex gap-6 mb-16 flex-wrap justify-center max-w-5xl">
          {players.map((p, i) => (
            <motion.div 
              key={p} 
              initial={{ scale: 0 }} animate={{ scale: 1 }}
              className="bg-black/30 px-8 py-4 rounded-full text-2xl font-bold animate-bounce"
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              {p}
            </motion.div>
          ))}
          <div className="px-8 py-4 text-white/50 animate-pulse text-2xl">Waiting for players...</div>
        </div>

        <div className="flex flex-col items-center gap-6 z-10">
          <h1 className="text-6xl font-bold mb-6">{game.title}</h1>
          <button onClick={startGame} className="bg-white text-black px-16 py-6 rounded-2xl font-bold text-4xl hover:scale-105 transition-transform shadow-xl">
             Start Game
          </button>
          <button onClick={onExit} className="text-white/60 hover:text-white underline text-xl">Exit</button>
        </div>
      </div>
    );
  }

  if (phase === 'podium') {
    return (
      <div className="w-full h-full bg-[#46178f] flex flex-col items-center justify-center text-white">
        <h1 className="text-8xl font-black mb-16">Podium</h1>
        <div className="flex items-end gap-6 mb-16">
           <motion.div initial={{ height: 0 }} animate={{ height: 300 }} className="w-48 bg-blue-500 rounded-t-2xl flex items-end justify-center pb-6 text-4xl font-bold shadow-lg">2</motion.div>
           <motion.div initial={{ height: 0 }} animate={{ height: 450 }} className="w-48 bg-yellow-400 rounded-t-2xl flex items-end justify-center pb-6 text-6xl font-bold shadow-xl relative z-10">
              1
              <div className="absolute -top-24 text-8xl">👑</div>
           </motion.div>
           <motion.div initial={{ height: 0 }} animate={{ height: 200 }} className="w-48 bg-green-500 rounded-t-2xl flex items-end justify-center pb-6 text-4xl font-bold shadow-lg">3</motion.div>
        </div>
        <div className="bg-white/10 px-12 py-6 rounded-2xl text-center">
           <div className="text-xl uppercase opacity-70">Your Score</div>
           <div className="text-6xl font-bold">{score}</div>
        </div>
        <button onClick={onExit} className="mt-16 bg-gray-900 px-12 py-4 rounded-xl font-bold text-2xl hover:bg-gray-800">Back to Menu</button>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-gray-100 dark:bg-neutral-900 flex flex-col relative overflow-hidden">
      
      {/* Top Bar */}
      <div className="bg-white dark:bg-neutral-800 p-6 flex justify-between items-center shadow-md z-10">
        <div className="flex items-center gap-6">
          <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-2xl">{currentQIndex + 1}/{game.questions.length}</div>
          {currentQ.isDoublePoints && <div className="bg-pink-500 text-white px-4 py-2 rounded-full text-lg font-bold animate-pulse">x2 POINTS</div>}
        </div>
        <div className="text-5xl font-black text-gray-800 dark:text-white">{score}</div>
      </div>

      {/* Main Area */}
      <div className="flex-1 flex flex-col relative">
        {/* Timer Bar */}
        <motion.div 
           className="h-3 bg-purple-500" 
           initial={{ width: '100%' }} 
           animate={{ width: phase === 'question' ? '0%' : '0%' }} 
           transition={{ duration: currentQ.timeLimit, ease: 'linear' }}
        />

        {/* Content */}
        <div className="flex-1 flex flex-col items-center justify-center p-8 bg-purple-100/50 dark:bg-black/20">
           {phase === 'feedback' ? (
             <motion.div initial={{ scale: 0.5 }} animate={{ scale: 1 }} className="text-center">
                {selectedAnswer !== -1 && selectedAnswer !== null && currentQ.answers[selectedAnswer].isCorrect ? (
                  <div className="text-green-500 flex flex-col items-center">
                    <CheckCircle size={150} />
                    <h2 className="text-6xl font-bold mt-8">Correct!</h2>
                    <p className="text-3xl mt-4">Streak: {streak} 🔥</p>
                  </div>
                ) : (
                  <div className="text-red-500 flex flex-col items-center">
                    <XCircle size={150} />
                    <h2 className="text-6xl font-bold mt-8">Incorrect</h2>
                    <p className="text-gray-500 mt-4 text-2xl">Better luck next time!</p>
                  </div>
                )}
                <button onClick={nextQuestion} className="mt-12 bg-blue-600 text-white px-12 py-4 rounded-xl font-bold text-2xl shadow-lg hover:bg-blue-500 transition-colors">
                  Next Question
                </button>
             </motion.div>
           ) : (
             <motion.div 
               key={currentQ.id}
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               className="bg-white dark:bg-neutral-800 p-12 rounded-3xl shadow-2xl max-w-5xl text-center w-full"
             >
               <h2 className="text-5xl font-bold text-gray-800 dark:text-white mb-12">{currentQ.text}</h2>
               {currentQ.image && <img src={currentQ.image} alt="Question" className="h-80 md:h-96 mx-auto mb-12 rounded-xl object-cover shadow-md" />}
               
               <div className="w-32 h-32 rounded-full border-8 border-purple-500 flex items-center justify-center text-5xl font-bold text-purple-600 dark:text-purple-400 mx-auto">
                 {timeLeft}
               </div>
             </motion.div>
           )}
        </div>

        {/* Answers Grid */}
        <div className="h-[40vh] grid grid-cols-2 gap-4 p-4">
            {currentQ.answers.map((ans, idx) => {
              const bgColors = { red: 'bg-red-500', blue: 'bg-blue-500', yellow: 'bg-yellow-500', green: 'bg-green-500' };
              const shapes = { triangle: '▲', diamond: '◆', circle: '●', square: '■' };
              
              // If feedback phase, dim incorrect answers
              const isDimmed = phase === 'feedback' && !ans.isCorrect;

              return (
                <button
                  key={idx}
                  disabled={phase !== 'question'}
                  onClick={() => handleAnswer(idx)}
                  className={`${bgColors[ans.color]} ${isDimmed ? 'opacity-20' : 'opacity-100'} transition-opacity rounded-2xl flex items-center p-8 text-white shadow-lg hover:brightness-110 active:scale-95`}
                >
                   <div className="text-6xl mr-6 opacity-50">{shapes[ans.shape]}</div>
                   <div className="text-3xl md:text-4xl font-bold text-left">{ans.text}</div>
                </button>
              );
            })}
        </div>

      </div>
    </div>
  );
};