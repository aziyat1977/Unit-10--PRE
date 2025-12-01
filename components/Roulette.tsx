import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, RefreshCw } from 'lucide-react';

interface RouletteProps {
  questions: string[];
  colorClass: string;
}

export const Roulette: React.FC<RouletteProps> = ({ questions, colorClass }) => {
  const [currentQuestion, setCurrentQuestion] = useState("Ready to Spin?");
  const [isSpinning, setIsSpinning] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const spin = () => {
    if (isSpinning) return;
    setIsSpinning(true);
    
    let counter = 0;
    const maxSpins = 20;
    const speed = 70;

    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * questions.length);
      setCurrentQuestion(questions[randomIndex]);
      counter++;

      if (counter >= maxSpins) {
        clearInterval(interval);
        setIsSpinning(false);
        // Ensure one final random pick that sticks
        const finalIndex = Math.floor(Math.random() * questions.length);
        setCurrentQuestion(questions[finalIndex]);
      }
    }, speed);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className={`relative overflow-hidden rounded-2xl bg-neutral-800 border-4 border-dashed border-neutral-700 p-8 text-center shadow-2xl transition-colors duration-500`}>
        <motion.div
          key={currentQuestion}
          initial={{ scale: 0.9, opacity: 0.5 }}
          animate={{ scale: 1, opacity: 1 }}
          className="min-h-[120px] flex items-center justify-center"
        >
          <h3 className={`text-2xl md:text-3xl font-bold ${isSpinning ? 'text-neutral-400 blur-[1px]' : 'text-white'}`}>
            {currentQuestion}
          </h3>
        </motion.div>

        <div className="mt-8 flex justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={spin}
            disabled={isSpinning}
            className={`flex items-center gap-2 px-8 py-4 rounded-full text-white font-bold text-lg shadow-lg ${isSpinning ? 'bg-neutral-600 cursor-not-allowed' : colorClass}`}
          >
             {isSpinning ? <RefreshCw className="animate-spin" /> : <Sparkles />}
             {isSpinning ? "Spinning..." : "SPIN"}
          </motion.button>
        </div>
        
        {/* Decor */}
        <div className="absolute top-2 right-2 opacity-20 text-4xl">🎲</div>
        <div className="absolute bottom-2 left-2 opacity-20 text-4xl">❓</div>
      </div>
    </div>
  );
};