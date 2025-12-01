import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Book, 
  Eye, 
  EyeOff, 
  Mic, 
  ThumbsUp, 
  Heart, 
  Flame, 
  Zap, 
  Shuffle, 
  Timer, 
  Users,
  Brain,
  Check,
  Focus,
  PlayCircle,
  StopCircle
} from 'lucide-react';
import { PersonalityType } from '../types';

// --- INTROVERT FEATURES ---

const Scratchpad = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [note, setNote] = useState("");

  return (
    <>
      <motion.button 
        whileHover={{ scale: 1.1 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-24 left-6 z-40 bg-indigo-600 text-white p-3 rounded-full shadow-lg"
        title="Private Scratchpad"
      >
        <Book size={24} />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            className="fixed bottom-36 left-6 z-40 w-72 bg-white dark:bg-neutral-800 rounded-xl shadow-2xl border border-indigo-200 dark:border-indigo-900 overflow-hidden"
          >
            <div className="bg-indigo-600 p-3 flex justify-between items-center text-white">
              <span className="font-bold text-sm">My Private Thoughts</span>
              <button onClick={() => setIsOpen(false)} className="hover:bg-indigo-700 rounded p-1"><EyeOff size={14}/></button>
            </div>
            <textarea 
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Draft your answer here before speaking..."
              className="w-full h-48 p-4 bg-transparent resize-none focus:outline-none text-gray-800 dark:text-gray-200 text-sm"
            />
            <div className="p-2 bg-gray-50 dark:bg-neutral-900 text-xs text-center text-gray-400">
              Only visible to you.
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const ReadySignal = () => {
    const [isReady, setIsReady] = useState(false);

    return (
        <motion.button
            onClick={() => setIsReady(!isReady)}
            className={`fixed bottom-24 left-20 z-40 px-4 py-3 rounded-full shadow-lg flex items-center gap-2 font-bold transition-all ${isReady ? 'bg-green-500 text-white' : 'bg-white dark:bg-neutral-800 text-gray-500'}`}
        >
            {isReady ? <Check size={20} /> : <Mic size={20} />}
            {isReady ? "I'm Ready" : "Thinking..."}
        </motion.button>
    )
}

const FocusMask = () => {
    const [isActive, setIsActive] = useState(false);

    return (
        <>
            <motion.button
                onClick={() => setIsActive(!isActive)}
                className={`fixed bottom-24 left-48 z-40 p-3 rounded-full shadow-lg transition-all ${isActive ? 'bg-indigo-500 text-white' : 'bg-white dark:bg-neutral-800 text-indigo-500'}`}
                title="Focus Mode"
            >
                <Focus size={24} />
            </motion.button>

            <AnimatePresence>
                {isActive && (
                    <>
                        {/* Top Mask covering Header */}
                        <motion.div 
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                            className="fixed top-0 left-0 w-full h-24 bg-black/90 z-30 backdrop-blur-sm pointer-events-none"
                        />
                        {/* Bottom Mask covering Controls */}
                        <motion.div 
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                            className="fixed bottom-0 left-0 w-full h-24 bg-black/90 z-30 backdrop-blur-sm pointer-events-none"
                        />
                        {/* Helper Text */}
                        <motion.div
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                            className="fixed top-8 left-1/2 transform -translate-x-1/2 z-40 text-white/50 text-sm font-mono tracking-widest"
                        >
                            FOCUS MODE ACTIVE
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

// --- EXTROVERT FEATURES ---

const ReactionBar = () => {
  const [particles, setParticles] = useState<{id: number, icon: any, x: number}[]>([]);

  const trigger = (icon: any) => {
    const id = Date.now();
    setParticles(prev => [...prev, { id, icon, x: Math.random() * 40 - 20 }]);
    setTimeout(() => {
      setParticles(prev => prev.filter(p => p.id !== id));
    }, 2000);
  };

  return (
    <div className="fixed bottom-24 left-1/2 transform -translate-x-1/2 z-40 flex gap-4">
      <div className="bg-white/90 dark:bg-neutral-800/90 backdrop-blur px-6 py-3 rounded-full shadow-xl border border-orange-500/30 flex gap-4">
        {[
            { icon: <ThumbsUp />, color: "text-blue-500" },
            { icon: <Heart />, color: "text-red-500" },
            { icon: <Flame />, color: "text-orange-500" },
            { icon: <Zap />, color: "text-yellow-500" }
        ].map((btn, i) => (
            <button 
                key={i} 
                onClick={() => trigger(btn.icon)}
                className={`${btn.color} hover:scale-125 transition-transform active:scale-90`}
            >
                {btn.icon}
            </button>
        ))}
      </div>
      
      {/* Particle System */}
      <AnimatePresence>
          {particles.map(p => (
              <motion.div
                key={p.id}
                initial={{ y: 0, opacity: 1, scale: 0.5, x: 0 }}
                animate={{ y: -200, opacity: 0, scale: 1.5, x: p.x }}
                exit={{ opacity: 0 }}
                className="absolute bottom-16 left-1/2 text-2xl pointer-events-none"
              >
                  {p.icon}
              </motion.div>
          ))}
      </AnimatePresence>
    </div>
  );
};

const DebateGenerator = () => {
    const [topic, setTopic] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    const prompts = [
        "Argue the opposite!", "Why is this wrong?", "What if this was illegal?", 
        "Compare this to 100 years ago.", "Is this true for everyone?"
    ];

    const hitMe = () => {
        setTopic(prompts[Math.floor(Math.random() * prompts.length)]);
        setIsOpen(true);
    };

    return (
        <div className="fixed bottom-24 right-6 z-40 flex flex-col items-end">
            <AnimatePresence>
                {isOpen && (
                    <motion.div 
                        initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }}
                        className="mb-4 bg-orange-600 text-white p-4 rounded-xl shadow-lg max-w-xs text-right"
                    >
                        <div className="text-xs font-bold opacity-75 uppercase mb-1">Devil's Advocate</div>
                        <div className="font-bold">{topic}</div>
                        <button onClick={() => setIsOpen(false)} className="text-xs mt-2 underline opacity-50">Dismiss</button>
                    </motion.div>
                )}
            </AnimatePresence>
            <motion.button 
                whileHover={{ scale: 1.1, rotate: 180 }}
                whileTap={{ scale: 0.9 }}
                onClick={hitMe}
                className="bg-orange-500 text-white p-3 rounded-full shadow-lg"
                title="Debate Spark"
            >
                <Shuffle size={24} />
            </motion.button>
        </div>
    );
};

const SpotlightTimer = () => {
    const [isActive, setIsActive] = useState(false);
    const [time, setTime] = useState(60);

    useEffect(() => {
        let interval: any;
        if (isActive && time > 0) {
            interval = setInterval(() => setTime(t => t - 1), 1000);
        } else if (time === 0) {
            setIsActive(false);
        }
        return () => clearInterval(interval);
    }, [isActive, time]);

    return (
        <div className="fixed bottom-24 right-24 z-40">
             <motion.button
                onClick={() => {
                    if (!isActive && time === 60) setIsActive(true);
                    else if (isActive) setIsActive(false);
                    else { setTime(60); setIsActive(false); }
                }}
                className={`p-3 rounded-full shadow-lg transition-colors ${isActive ? 'bg-red-500 text-white animate-pulse' : 'bg-white dark:bg-neutral-800 text-red-500'}`}
                title="Spotlight Timer"
             >
                 {isActive ? <StopCircle size={24} /> : <PlayCircle size={24} />}
             </motion.button>
             {isActive && (
                 <motion.div 
                    initial={{ scale: 0 }} animate={{ scale: 1 }}
                    className="absolute bottom-14 right-0 bg-red-600 text-white font-black text-2xl w-16 h-16 rounded-full flex items-center justify-center shadow-xl border-4 border-white"
                 >
                     {time}
                 </motion.div>
             )}
        </div>
    );
};

// --- AMBIVERT FEATURES ---

const ThinkPairShare = () => {
    const [phase, setPhase] = useState<'idle' | 'think' | 'pair'>('idle');
    const [timeLeft, setTimeLeft] = useState(0);

    useEffect(() => {
        if (timeLeft > 0) {
            const timer = setTimeout(() => setTimeLeft(prev => prev - 1), 1000);
            return () => clearTimeout(timer);
        } else if (timeLeft === 0 && phase !== 'idle') {
            if (phase === 'think') {
                setPhase('pair');
                setTimeLeft(60); // 60s Pair
            } else {
                setPhase('idle');
            }
        }
    }, [timeLeft, phase]);

    const start = () => {
        setPhase('think');
        setTimeLeft(30); // 30s Think
    };

    if (phase === 'idle') {
        return (
            <motion.button 
                whileHover={{ scale: 1.05 }}
                onClick={start}
                className="fixed bottom-24 left-1/2 transform -translate-x-1/2 z-40 bg-teal-600 text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-3 font-bold"
            >
                <Timer size={20} /> Think-Pair-Share
            </motion.button>
        );
    }

    return (
        <div className="fixed bottom-24 left-1/2 transform -translate-x-1/2 z-40">
             <motion.div 
                initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
                className={`px-8 py-4 rounded-2xl shadow-2xl flex items-center gap-6 border-4 ${phase === 'think' ? 'bg-indigo-600 border-indigo-400' : 'bg-pink-600 border-pink-400'} text-white`}
             >
                 <div className="text-center">
                     <div className="text-xs font-bold uppercase tracking-widest opacity-80">
                         {phase === 'think' ? 'Solo Thinking' : 'Pair Discussion'}
                     </div>
                     <div className="text-4xl font-black font-mono">{timeLeft}s</div>
                 </div>
                 <div className="h-12 w-px bg-white/30"></div>
                 <div className="text-3xl">
                     {phase === 'think' ? <Brain /> : <Users />}
                 </div>
                 <button onClick={() => setPhase('idle')} className="absolute -top-2 -right-2 bg-white text-black rounded-full p-1 shadow"><EyeOff size={12}/></button>
             </motion.div>
        </div>
    );
};

const BalanceSlider = () => {
    const [value, setValue] = useState(50);

    return (
        <div className="fixed bottom-36 right-6 z-40 bg-white/90 dark:bg-neutral-800/90 backdrop-blur p-4 rounded-xl shadow-lg border border-teal-500/30 w-16 h-48 flex flex-col items-center justify-between">
            <Users size={16} className="text-teal-600" />
            <input 
                type="range" 
                min="0" max="100" 
                value={value}
                onChange={(e) => setValue(parseInt(e.target.value))}
                className="h-32 -rotate-90 origin-center accent-teal-500 cursor-pointer"
            />
            <Brain size={16} className="text-indigo-600" />
            
            {/* Tooltip */}
            <div className="absolute right-20 top-1/2 transform -translate-y-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 hover:opacity-100 transition-opacity">
                {value > 60 ? "Feeling Social" : value < 40 ? "Feeling Quiet" : "Balanced"}
            </div>
        </div>
    );
};

// --- MASTER OVERLAY ---

export const PersonalityHUD: React.FC<{ personality: PersonalityType }> = ({ personality }) => {
  return (
    <>
      {/* Persistent Badge */}
      <div className="fixed top-24 right-6 z-30 pointer-events-none">
        <motion.div 
            initial={{ x: 100 }} animate={{ x: 0 }}
            className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md border shadow-sm
                ${personality === 'introvert' ? 'bg-indigo-100/80 text-indigo-800 border-indigo-200' : ''}
                ${personality === 'extrovert' ? 'bg-orange-100/80 text-orange-800 border-orange-200' : ''}
                ${personality === 'ambivert' ? 'bg-teal-100/80 text-teal-800 border-teal-200' : ''}
            `}
        >
            {personality} Mode Active
        </motion.div>
      </div>

      {/* Mode Specific Tools */}
      {personality === 'introvert' && (
          <>
            <Scratchpad />
            <ReadySignal />
            <FocusMask />
          </>
      )}

      {personality === 'extrovert' && (
          <>
            <ReactionBar />
            <DebateGenerator />
            <SpotlightTimer />
          </>
      )}

      {personality === 'ambivert' && (
          <>
            <ThinkPairShare />
            <BalanceSlider />
          </>
      )}
    </>
  );
};
