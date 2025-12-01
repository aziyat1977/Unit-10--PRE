import React, { useState, useEffect } from 'react';
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
  
  const currentQ = game.questions[currentQIndex];

  // Lobby Simulation
  useEffect(() => {
    if (phase === 'lobby') {
      const interval = setInterval(() => {
        if (players.length < 5) {
          const names = ["CoolCat", "Foodie99", "ChefMaster", "VibeCoder", "Student01"];
          setPlayers(prev => [...prev, names[prev.length]]);
        }
      }, 1500);
      return () => clearInterval(interval);
    }
  }, [phase, players]);

  // Timer Logic
  useEffect(() => {
    if (phase === 'question' && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(prev => prev - 1), 1000);
      return () => clearTimeout(timer);
    } else if (phase === 'question' && timeLeft === 0) {
      handleAnswer(-1); // Time out
    }
  }, [phase, timeLeft]);

  const startGame = () => {
    setPhase('question');
    setTimeLeft(game.questions[0].timeLimit);
  };

  const handleAnswer = (idx: number) => {
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
    
    setTimeout(() => setPhase('feedback'), 1000);
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
          className="bg-white text-black px-12 py-6 rounded-lg shadow-2xl mb-12 text-center"
        >
          <div className="text-xl font-bold text-gray-500 uppercase">Game PIN:</div>
          <div className="text-6xl font-black tracking-widest">395 210</div>
        </motion.div>

        <div className="flex gap-4 mb-12 flex-wrap justify-center max-w-4xl">
          {players.map((p, i) => (
            <motion.div 
              key={p} 
              initial={{ scale: 0 }} animate={{ scale: 1 }}
              className="bg-black/30 px-6 py-3 rounded-full text-xl font-bold animate-bounce"
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              {p}
            </motion.div>
          ))}
          <div className="px-6 py-3 text-white/50 animate-pulse">Waiting for players...</div>
        </div>

        <div className="flex flex-col items-center gap-4 z-10">
          <h1 className="text-4xl font-bold mb-4">{game.title}</h1>
          <button onClick={startGame} className="bg-white text-black px-12 py-4 rounded-lg font-bold text-2xl hover:scale-105 transition-transform shadow-xl">
             Start Game
          </button>
          <button onClick={onExit} className="text-white/60 hover:text-white underline">Exit</button>
        </div>
      </div>
    );
  }

  if (phase === 'podium') {
    return (
      <div className="w-full h-full bg-[#46178f] flex flex-col items-center justify-center text-white">
        <h1 className="text-6xl font-black mb-12">Podium</h1>
        <div className="flex items-end gap-4 mb-12">
           <motion.div initial={{ height: 0 }} animate={{ height: 200 }} className="w-32 bg-blue-500 rounded-t-lg flex items-end justify-center pb-4 text-2xl font-bold shadow-lg">2</motion.div>
           <motion.div initial={{ height: 0 }} animate={{ height: 300 }} className="w-32 bg-yellow-400 rounded-t-lg flex items-end justify-center pb-4 text-4xl font-bold shadow-xl relative z-10">
              1
              <div className="absolute -top-16 text-6xl">👑</div>
           </motion.div>
           <motion.div initial={{ height: 0 }} animate={{ height: 150 }} className="w-32 bg-green-500 rounded-t-lg flex items-end justify-center pb-4 text-2xl font-bold shadow-lg">3</motion.div>
        </div>
        <div className="bg-white/10 px-8 py-4 rounded-xl text-center">
           <div className="text-sm uppercase opacity-70">Your Score</div>
           <div className="text-4xl font-bold">{score}</div>
        </div>
        <button onClick={onExit} className="mt-12 bg-gray-900 px-8 py-3 rounded-lg font-bold hover:bg-gray-800">Back to Menu</button>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-gray-100 dark:bg-neutral-900 flex flex-col relative overflow-hidden">
      
      {/* Top Bar */}
      <div className="bg-white dark:bg-neutral-800 p-4 flex justify-between items-center shadow-md z-10">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">{currentQIndex + 1}/{game.questions.length}</div>
          {currentQ.isDoublePoints && <div className="bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse">x2 POINTS</div>}
        </div>
        <div className="text-3xl font-black text-gray-800 dark:text-white">{score}</div>
      </div>

      {/* Main Area */}
      <div className="flex-1 flex flex-col relative">
        {/* Timer Bar */}
        <motion.div 
           className="h-2 bg-purple-500" 
           initial={{ width: '100%' }} 
           animate={{ width: phase === 'question' ? '0%' : '0%' }} 
           transition={{ duration: currentQ.timeLimit, ease: 'linear' }}
        />

        {/* Content */}
        <div className="flex-1 flex flex-col items-center justify-center p-8 bg-purple-100/50 dark:bg-black/20">
           {phase === 'feedback' ? (
             <motion.div initial={{ scale: 0.5 }} animate={{ scale: 1 }} className="text-center">
                {selectedAnswer !== -1 && currentQ.answers[selectedAnswer!].isCorrect ? (
                  <div className="text-green-500 flex flex-col items-center">
                    <CheckCircle size={100} />
                    <h2 className="text-4xl font-bold mt-4">Correct!</h2>
                    <p className="text-xl mt-2">Streak: {streak} 🔥</p>
                  </div>
                ) : (
                  <div className="text-red-500 flex flex-col items-center">
                    <XCircle size={100} />
                    <h2 className="text-4xl font-bold mt-4">Incorrect</h2>
                    <p className="text-gray-500 mt-2">Better luck next time!</p>
                  </div>
                )}
                <button onClick={nextQuestion} className="mt-8 bg-blue-600 text-white px-8 py-3 rounded-lg font-bold shadow-lg hover:bg-blue-500 transition-colors">
                  Next Question
                </button>
             </motion.div>
           ) : (
             <motion.div 
               key={currentQ.id}
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               className="bg-white dark:bg-neutral-800 p-8 rounded-xl shadow-2xl max-w-3xl text-center"
             >
               <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-8">{currentQ.text}</h2>
               {currentQ.image && <img src={currentQ.image} alt="Question" className="h-48 mx-auto mb-8 rounded-lg object-cover" />}
               
               <div className="w-24 h-24 rounded-full border-4 border-purple-500 flex items-center justify-center text-3xl font-bold text-purple-600 dark:text-purple-400 mx-auto">
                 {timeLeft}
               </div>
             </motion.div>
           )}
        </div>

        {/* Answers Grid */}
        <div className="h-1/3 min-h-[200px] grid grid-cols-2 gap-2 p-2">
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
                  className={`${bgColors[ans.color]} ${isDimmed ? 'opacity-20' : 'opacity-100'} transition-opacity rounded-lg flex items-center p-6 text-white shadow-lg hover:brightness-110 active:scale-95`}
                >
                   <div className="text-4xl mr-4 opacity-50">{shapes[ans.shape]}</div>
                   <div className="text-xl md:text-2xl font-bold text-left">{ans.text}</div>
                </button>
              );
            })}
        </div>

      </div>
    </div>
  );
};