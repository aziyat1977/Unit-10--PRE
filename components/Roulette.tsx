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
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const spin = () => {
    if (isSpinning) return;
    setIsSpinning(true);
    
    let counter = 0;
    const maxSpins = 20;
    const speed = 70;

    intervalRef.current = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * questions.length);
      setCurrentQuestion(questions[randomIndex]);
      counter++;

      if (counter >= maxSpins) {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setIsSpinning(false);
        // Ensure one final random pick that sticks
        const finalIndex = Math.floor(Math.random() * questions.length);
        setCurrentQuestion(questions[finalIndex]);
      }
    }, speed);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className={`relative overflow-hidden rounded-3xl bg-neutral-800 border-4 border-dashed border-neutral-700 p-12 text-center shadow-2xl transition-colors duration-500`}>
        <motion.div
          key={currentQuestion}
          initial={{ scale: 0.9, opacity: 0.5 }}
          animate={{ scale: 1, opacity: 1 }}
          className="min-h-[160px] flex items-center justify-center"
        >
          <h3 className={`text-4xl md:text-5xl font-bold ${isSpinning ? 'text-neutral-400 blur-[2px]' : 'text-white'}`}>
            {currentQuestion}
          </h3>
        </motion.div>

        <div className="mt-12 flex justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={spin}
            disabled={isSpinning}
            className={`flex items-center gap-3 px-10 py-5 rounded-full text-white font-bold text-2xl shadow-lg ${isSpinning ? 'bg-neutral-600 cursor-not-allowed' : colorClass}`}
          >
             {isSpinning ? <RefreshCw className="animate-spin w-8 h-8" /> : <Sparkles className="w-8 h-8" />}
             {isSpinning ? "Spinning..." : "SPIN"}
          </motion.button>
        </div>
        
        {/* Decor */}
        <div className="absolute top-4 right-4 opacity-20 text-6xl">🎲</div>
        <div className="absolute bottom-4 left-4 opacity-20 text-6xl">❓</div>
      </div>
    </div>
  );
};