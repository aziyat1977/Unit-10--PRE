import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { RefreshCw, ArrowRight, Video, PenTool, User, MessageSquare } from 'lucide-react';

export const TongueMap = () => {
  return (
    <div className="relative w-64 h-80 mx-auto">
      <svg viewBox="0 0 200 300" className="w-full h-full drop-shadow-xl">
        <path d="M40,20 C40,20 20,100 20,180 C20,260 80,300 100,300 C120,300 180,260 180,180 C180,100 160,20 160,20 Q100,40 40,20" fill="#fda4af" stroke="#be123c" strokeWidth="3" />
        
        {/* Zones */}
        <motion.circle cx="100" cy="270" r="15" fill="#f87171" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.5 }} />
        <text x="100" y="275" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">Sweet</text>

        <motion.circle cx="35" cy="180" r="15" fill="#facc15" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.7 }} />
        <text x="35" y="185" textAnchor="middle" fill="black" fontSize="10" fontWeight="bold">Sour</text>
        <motion.circle cx="165" cy="180" r="15" fill="#facc15" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.7 }} />
        <text x="165" y="185" textAnchor="middle" fill="black" fontSize="10" fontWeight="bold">Sour</text>

        <motion.circle cx="35" cy="100" r="15" fill="#60a5fa" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.9 }} />
        <text x="35" y="105" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">Salty</text>
        <motion.circle cx="165" cy="100" r="15" fill="#60a5fa" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.9 }} />
        <text x="165" y="105" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">Salty</text>

        <motion.circle cx="100" cy="50" r="20" fill="#a3e635" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.1 }} />
        <text x="100" y="55" textAnchor="middle" fill="black" fontSize="10" fontWeight="bold">Bitter</text>
      </svg>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-600 dark:text-neutral-500 font-bold opacity-50">Umami (All)</div>
    </div>
  );
};

export const PassiveActiveToggle = () => {
  const [isActive, setIsActive] = useState(true);

  return (
    <div className="bg-white dark:bg-neutral-800 p-8 rounded-2xl border border-gray-200 dark:border-neutral-700 w-full max-w-4xl mx-auto shadow-2xl transition-colors">
      <div className="flex justify-center mb-8">
        <button 
          onClick={() => setIsActive(!isActive)}
          className="bg-purple-600 hover:bg-purple-500 text-white px-6 py-3 rounded-full font-bold flex items-center gap-2 transition-all shadow-md"
        >
          <RefreshCw className={`w-5 h-5 ${!isActive ? 'rotate-180' : ''} transition-transform`} />
          Switch Focus
        </button>
      </div>

      <div className="relative h-40">
        <motion.div 
          animate={{ opacity: isActive ? 1 : 0.2, y: isActive ? 0 : 20, scale: isActive ? 1 : 0.9 }}
          className="absolute w-full flex items-center justify-between p-6 bg-gray-100 dark:bg-neutral-900 rounded-xl border-l-4 border-blue-500 shadow-sm"
        >
          <div className="flex-1 text-2xl text-gray-800 dark:text-gray-100">
            <span className="text-blue-500 dark:text-blue-400 font-bold block text-sm uppercase mb-1">Subject (Doer)</span>
            Farmers
          </div>
          <div className="px-4 text-gray-500">grow</div>
          <div className="flex-1 text-2xl text-right text-gray-800 dark:text-gray-100">
            <span className="text-red-500 dark:text-red-400 font-bold block text-sm uppercase mb-1">Object (Receiver)</span>
            Tomatoes
          </div>
        </motion.div>

        <motion.div 
          animate={{ opacity: !isActive ? 1 : 0, y: !isActive ? 0 : -20, scale: !isActive ? 1 : 0.9, pointerEvents: isActive ? 'none' : 'auto' }}
          className="absolute w-full flex items-center justify-between p-6 bg-white dark:bg-neutral-100 text-black rounded-xl border-l-4 border-purple-500 shadow-xl z-10"
        >
          <div className="flex-1 text-2xl">
            <span className="text-red-600 font-bold block text-sm uppercase mb-1">New Subject</span>
            Tomatoes
          </div>
          <div className="px-4 font-bold text-purple-700 underline decoration-wavy">are grown</div>
          <div className="flex-1 text-2xl text-right text-gray-500">
            <span className="text-gray-400 font-bold block text-sm uppercase mb-1">Agent (Optional)</span>
            (by farmers)
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export const PolitenessScale = () => {
  const [value, setValue] = useState(50);

  const getEmoji = (val: number) => {
    if (val < 30) return "😡"; // Angry
    if (val < 70) return "😐"; // Neutral
    return "😊"; // Polite
  };

  const getMessage = (val: number) => {
    if (val < 30) return "\"This soup is cold!\"";
    if (val < 70) return "\"Excuse me, there is a problem.\"";
    return "\"I'm afraid there seems to be a mistake.\"";
  };

  const getColor = (val: number) => {
    if (val < 30) return "bg-red-500";
    if (val < 70) return "bg-yellow-500";
    return "bg-green-500";
  };

  return (
    <div className="w-full max-w-3xl mx-auto bg-gray-100 dark:bg-neutral-800 p-8 rounded-2xl transition-colors">
      <div className="flex justify-between items-end mb-8 h-32">
        <motion.div 
          className="text-6xl"
          animate={{ scale: value > 80 ? 1.2 : 1, rotate: (value - 50) / 2 }}
        >
          {getEmoji(value)}
        </motion.div>
        <motion.div 
          key={getMessage(value)}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`text-2xl font-bold p-4 rounded-xl text-black ${getColor(value).replace('bg-', 'bg-opacity-90 bg-')} shadow-lg`}
        >
          {getMessage(value)}
        </motion.div>
      </div>
      
      <input 
        type="range" 
        min="0" 
        max="100" 
        value={value} 
        onChange={(e) => setValue(parseInt(e.target.value))}
        className="w-full h-4 bg-gray-300 dark:bg-neutral-700 rounded-lg appearance-none cursor-pointer accent-gray-900 dark:accent-white"
      />
      <div className="flex justify-between mt-2 text-sm text-gray-500 dark:text-gray-400 font-mono uppercase">
        <span>Too Direct</span>
        <span>Polite</span>
      </div>
    </div>
  );
};

export const WasteChart = () => {
    return (
        <div className="relative w-72 h-72 mx-auto">
            <svg viewBox="0 0 100 100" className="transform -rotate-90 w-full h-full">
                <circle cx="50" cy="50" r="40" fill="transparent" className="stroke-gray-300 dark:stroke-slate-700" strokeWidth="20" />
                <motion.circle 
                    cx="50" cy="50" r="40" 
                    fill="transparent" 
                    stroke="#ef4444" 
                    strokeWidth="20" 
                    strokeDasharray="251.2" 
                    strokeDashoffset="251.2"
                    initial={{ strokeDashoffset: 251.2 }}
                    animate={{ strokeDashoffset: 251.2 * 0.67 }} // 33% visible
                    transition={{ duration: 2, ease: "easeOut" }}
                />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
                <motion.span 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    transition={{ delay: 1 }}
                    className="text-6xl font-bold text-gray-800 dark:text-white"
                >
                    33%
                </motion.span>
                <span className="text-red-500 font-bold uppercase tracking-widest">Wasted</span>
            </div>
        </div>
    )
}

// New Components based on Lesson Plan

export const TaskCard = ({ title, icon, steps, color }: { title: string, icon: React.ReactNode, steps: string[], color: string }) => (
  <div className="bg-white dark:bg-neutral-800 p-8 rounded-2xl border-l-8 shadow-2xl max-w-2xl mx-auto transition-colors" style={{ borderColor: color }}>
    <div className="flex items-center gap-4 mb-6">
      <div className="p-4 rounded-full bg-gray-100 dark:bg-neutral-700 text-gray-900 dark:text-white">
        {icon}
      </div>
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{title}</h2>
    </div>
    <ul className="space-y-4">
      {steps.map((step, i) => (
        <motion.li 
          key={i}
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: i * 0.2 }}
          className="flex items-start gap-3 text-lg text-gray-700 dark:text-gray-300"
        >
          <span className="font-bold mt-1" style={{ color }}>{i + 1}.</span>
          {step}
        </motion.li>
      ))}
    </ul>
  </div>
);

export const FlowChart = () => (
  <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
    {['Grow', 'Transport', 'Wash', 'Cook', 'Package'].map((step, i) => (
      <React.Fragment key={step}>
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: i * 0.2 }}
          className={`px-6 py-4 rounded-lg font-bold text-black shadow-lg ${
            i === 0 ? 'bg-green-300' :
            i === 1 ? 'bg-yellow-300' :
            i === 2 ? 'bg-blue-300' :
            i === 3 ? 'bg-red-300' : 'bg-purple-300'
          }`}
        >
          {step}
        </motion.div>
        {i < 4 && <ArrowRight className="text-gray-400 w-6 h-6" />}
      </React.Fragment>
    ))}
  </div>
);

export const GrammarBox = ({ title, rules, colorClass }: { title: string, rules: { label: string, example: string }[], colorClass: string }) => (
  <div className="grid gap-6 w-full max-w-4xl mx-auto">
    <h3 className={`text-2xl font-bold ${colorClass} mb-4`}>{title}</h3>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {rules.map((rule, i) => (
        <motion.div 
          key={i}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: i * 0.2 }}
          className="bg-white dark:bg-neutral-800 p-6 rounded-xl border-t-4 shadow-lg text-gray-900 dark:text-gray-100 transition-colors"
          style={{ borderColor: 'currentColor' }}
        >
          <div className="text-sm font-bold uppercase tracking-wider opacity-50 mb-2">{rule.label}</div>
          <div className="text-lg font-medium" dangerouslySetInnerHTML={{ __html: rule.example }}></div>
        </motion.div>
      ))}
    </div>
  </div>
);

export const RoleplayCard = ({ role, icon, color, traits }: { role: string, icon: any, color: string, traits: string[] }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className={`p-6 rounded-xl border-2 ${color} bg-white dark:bg-neutral-800 w-full md:w-1/2 shadow-lg transition-colors`}
  >
    <div className="flex items-center gap-3 mb-4">
      {icon}
      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{role}</h3>
    </div>
    <ul className="space-y-2">
      {traits.map((trait, i) => (
        <li key={i} className="flex items-center gap-2 opacity-80 text-gray-700 dark:text-gray-300">
          <div className="w-1.5 h-1.5 rounded-full bg-black dark:bg-white"></div>
          {trait}
        </li>
      ))}
    </ul>
  </motion.div>
);