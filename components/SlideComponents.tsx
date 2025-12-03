import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RefreshCw, ArrowRight, Video, PenTool, User, MessageSquare, Globe, Check, X, Eye, EyeOff, Mic, Ear, Brain, FlaskConical } from 'lucide-react';

// --- SHARED DATA ---

export const PASSIVE_TENSE_DATA = [
    { 
      label: "Present Simple", 
      examples: [
          {
            active: "Farmers grow tea.", 
            passive: "Tea <span class='text-purple-500 font-bold'>is grown</span>.",
            ru: "Чай выращивают.",
            uz: "Choy yetishtiriladi."
          },
          {
            active: "People make cars here.", 
            passive: "Cars <span class='text-purple-500 font-bold'>are made</span> here.",
            ru: "Здесь делают машины.",
            uz: "Bu yerda mashinalar ishlab chiqariladi."
          }
      ]
    },
    { 
      label: "Past Simple", 
      examples: [
          {
            active: "Bell invented the phone.", 
            passive: "The phone <span class='text-purple-500 font-bold'>was invented</span>.",
            ru: "Телефон был изобретен.",
            uz: "Telefon ixtiro qilingan."
          },
          {
            active: "They built this house.", 
            passive: "This house <span class='text-purple-500 font-bold'>was built</span>.",
            ru: "Этот дом был построен.",
            uz: "Bu uy qurilgan."
          }
      ]
    },
    { 
      label: "Present Continuous", 
      examples: [
          {
            active: "They are painting the house.", 
            passive: "The house <span class='text-purple-500 font-bold'>is being painted</span>.",
            ru: "Дом красят (сейчас).",
            uz: "Uy bo'yalmoqda."
          },
          {
            active: "She is cleaning the room.", 
            passive: "The room <span class='text-purple-500 font-bold'>is being cleaned</span>.",
            ru: "Комнату убирают (сейчас).",
            uz: "Xona tozalanmoqda."
          }
      ]
    },
    { 
      label: "Past Continuous", 
      examples: [
          {
            active: "She was cooking dinner.", 
            passive: "Dinner <span class='text-purple-500 font-bold'>was being cooked</span>.",
            ru: "Ужин готовился.",
            uz: "Kechki ovqat tayyorlanayotgan edi."
          },
          {
            active: "They were watching TV.", 
            passive: "TV <span class='text-purple-500 font-bold'>was being watched</span>.",
            ru: "Телевизор смотрели.",
            uz: "Televizor ko'rilayotgan edi."
          }
      ]
    },
    { 
      label: "Present Perfect", 
      examples: [
          {
            active: "Someone has stolen my car.", 
            passive: "My car <span class='text-purple-500 font-bold'>has been stolen</span>.",
            ru: "Мою машину украли.",
            uz: "Mashinam o'g'irlab ketildi."
          },
          {
            active: "They have finished the work.", 
            passive: "The work <span class='text-purple-500 font-bold'>has been finished</span>.",
            ru: "Работа закончена.",
            uz: "Ish tugatildi."
          }
      ]
    },
    { 
      label: "Future Simple", 
      examples: [
          {
            active: "They will build a school.", 
            passive: "A school <span class='text-purple-500 font-bold'>will be built</span>.",
            ru: "Школа будет построена.",
            uz: "Maktab quriladi."
          },
          {
            active: "I will do it tomorrow.", 
            passive: "It <span class='text-purple-500 font-bold'>will be done</span> tomorrow.",
            ru: "Это будет сделано завтра.",
            uz: "Bu ertaga qilinadi."
          }
      ]
    },
    { 
      label: "Modals (Can/Must)", 
      examples: [
          {
            active: "You can eat it.", 
            passive: "It <span class='text-purple-500 font-bold'>can be eaten</span>.",
            ru: "Это можно съесть.",
            uz: "Buni yeyish mumkin."
          },
          {
             active: "You must lock the door.", 
            passive: "The door <span class='text-purple-500 font-bold'>must be locked</span>.",
            ru: "Дверь должна быть заперта.",
            uz: "Eshik qulflanishi shart."
          }
      ]
    }
];

// --- COMPONENTS ---

export const SupertasterQuiz = () => {
    const [answers, setAnswers] = useState<Record<number, boolean>>({});
    const [showResult, setShowResult] = useState(false);

    const questions = [
        "Is black coffee too bitter for you?",
        "Do you hate dark chocolate?",
        "Are you very sensitive to spicy chili?",
        "Do you dislike grapefruit juice?",
        "Do you find raw broccoli too strong?",
        "Do you often find food 'too salty'?"
    ];

    const toggleAnswer = (idx: number) => {
        setAnswers(prev => ({ ...prev, [idx]: !prev[idx] }));
        setShowResult(false);
    };

    const getResult = () => {
        const score = Object.values(answers).filter(Boolean).length;
        if (score >= 4) return { type: "Supertaster", color: "text-red-500", desc: "You have more taste buds than average! Flavors are very intense for you." };
        if (score >= 2) return { type: "Medium Taster", color: "text-blue-500", desc: "You are like most people. You enjoy a balance of flavors." };
        return { type: "Non-taster", color: "text-gray-500", desc: "You might prefer spicy and salty food because other flavors seem weak." };
    };

    return (
        <div className="w-full max-w-4xl mx-auto bg-white dark:bg-neutral-800 p-8 rounded-3xl shadow-2xl border border-gray-100 dark:border-neutral-700">
            <div className="text-center mb-8">
                <div className="inline-block p-4 bg-purple-100 dark:bg-purple-900/30 rounded-full text-purple-600 dark:text-purple-300 mb-4">
                    <FlaskConical size={32} />
                </div>
                <h2 className="text-3xl font-black text-gray-900 dark:text-white">Are you a Supertaster?</h2>
                <p className="text-gray-500 dark:text-gray-400">Check the boxes that are true for you.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {questions.map((q, i) => (
                    <motion.button
                        key={i}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => toggleAnswer(i)}
                        className={`p-4 rounded-xl text-left flex items-center gap-4 transition-all border-2 ${answers[i] ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/20' : 'border-transparent bg-gray-50 dark:bg-neutral-900 hover:bg-gray-100'}`}
                    >
                        <div className={`w-6 h-6 rounded border-2 flex items-center justify-center transition-colors ${answers[i] ? 'bg-purple-500 border-purple-500 text-white' : 'border-gray-300 dark:border-gray-600'}`}>
                            {answers[i] && <Check size={14} strokeWidth={4} />}
                        </div>
                        <span className={`font-medium ${answers[i] ? 'text-purple-900 dark:text-purple-100' : 'text-gray-700 dark:text-gray-300'}`}>{q}</span>
                    </motion.button>
                ))}
            </div>

            <div className="text-center">
                {!showResult ? (
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setShowResult(true)}
                        className="px-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-black font-bold rounded-full text-lg shadow-lg"
                    >
                        Reveal My Type
                    </motion.button>
                ) : (
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-gray-50 dark:bg-neutral-900 p-6 rounded-2xl border border-gray-200 dark:border-neutral-700"
                    >
                        <div className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-2">Result</div>
                        <div className={`text-4xl font-black mb-2 ${getResult().color}`}>{getResult().type}</div>
                        <p className="text-gray-600 dark:text-gray-300">{getResult().desc}</p>
                        <button onClick={() => { setShowResult(false); setAnswers({}); }} className="mt-4 text-sm text-gray-400 underline hover:text-gray-900 dark:hover:text-white">Reset</button>
                    </motion.div>
                )}
            </div>
        </div>
    );
};

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

// --- NEW COMPONENT: Passive MFP (Meaning, Form, Pronunciation) ---

export const PassiveMFP = () => {
    return (
        <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Meaning */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white dark:bg-neutral-800 p-6 rounded-2xl shadow-xl border-t-8 border-blue-500"
            >
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full text-blue-600 dark:text-blue-300"><Brain size={24}/></div>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Meaning</h3>
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                    We use the Passive Voice when:
                </p>
                <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                        <Check className="text-green-500 shrink-0 mt-1" size={18} />
                        <span>The <strong>action</strong> is more important than the person.</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <Check className="text-green-500 shrink-0 mt-1" size={18} />
                        <span>We <strong>don't know</strong> who did it.</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <Check className="text-green-500 shrink-0 mt-1" size={18} />
                        <span>It is a formal process (factory, science).</span>
                    </li>
                </ul>
            </motion.div>

            {/* Form */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white dark:bg-neutral-800 p-6 rounded-2xl shadow-xl border-t-8 border-purple-500 relative overflow-hidden"
            >
                <div className="absolute -right-4 -top-4 w-24 h-24 bg-purple-500/10 rounded-full blur-xl"></div>
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-full text-purple-600 dark:text-purple-300"><PenTool size={24}/></div>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Form</h3>
                </div>
                
                <div className="text-center py-4 bg-gray-50 dark:bg-neutral-900 rounded-xl mb-4 border border-gray-200 dark:border-neutral-700">
                    <div className="text-sm text-gray-400 uppercase font-bold tracking-widest mb-2">The Golden Rule</div>
                    <div className="text-2xl md:text-3xl font-black text-purple-600 dark:text-purple-400">
                        BE + V3
                    </div>
                    <div className="text-xs text-gray-400 mt-1">(Past Participle)</div>
                </div>

                <div className="space-y-4">
                     <p className="text-gray-700 dark:text-gray-300 text-sm">
                         The verb <strong className="text-purple-600 dark:text-purple-400 text-lg">BE</strong> changes tense, but <strong className="text-gray-900 dark:text-white">V3</strong> never changes.
                     </p>
                     <div className="grid grid-cols-2 gap-2 text-sm">
                         <div className="p-2 bg-gray-100 dark:bg-neutral-700 rounded text-center">
                            <span className="block text-xs opacity-50">Present</span>
                            <span className="font-bold">is / are</span> made
                         </div>
                         <div className="p-2 bg-gray-100 dark:bg-neutral-700 rounded text-center">
                            <span className="block text-xs opacity-50">Past</span>
                            <span className="font-bold">was / were</span> made
                         </div>
                     </div>
                </div>
            </motion.div>

            {/* Pronunciation */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-white dark:bg-neutral-800 p-6 rounded-2xl shadow-xl border-t-8 border-orange-500"
            >
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-orange-100 dark:bg-orange-900 rounded-full text-orange-600 dark:text-orange-300"><Ear size={24}/></div>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Pronunciation</h3>
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                    Weak forms & Stress
                </p>
                <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 border-b border-gray-100 dark:border-neutral-700">
                        <span className="text-2xl font-serif">was</span>
                        <div className="text-right">
                             <div className="text-sm text-red-500 font-bold line-through">/wɒz/</div>
                             <div className="text-xl font-bold text-green-500">/wəz/</div>
                        </div>
                    </div>
                    <div className="bg-orange-50 dark:bg-neutral-900 p-3 rounded-lg italic text-gray-600 dark:text-gray-400">
                        "It <strong className="not-italic text-black dark:text-white">wəz</strong> made in China."
                    </div>
                    <p className="text-sm text-gray-500">
                        Stress the main verb (V3), not the auxiliary verb (be).
                    </p>
                </div>
            </motion.div>
        </div>
    )
}

// --- NEW COMPONENT: Reference Words Guide with Translations ---

export const ReferenceWordsGuide = () => {
  const [showRU, setShowRU] = useState(false);
  const [showUZ, setShowUZ] = useState(false);

  const data = [
      {
          category: "Singular Objects",
          words: ["It", "This", "That"],
          items: [
              {
                  ex: "I have a cake. <span class='bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 px-1 rounded font-bold'>It</span> is tasty.",
                  ru: "У меня есть торт. Он вкусный.",
                  uz: "Menda tort bor. U mazali."
              },
              {
                  ex: "I don't like <span class='bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 px-1 rounded font-bold'>that</span> movie.",
                  ru: "Мне не нравится тот фильм.",
                  uz: "Menga u kino yoqmaydi."
              }
          ]
      },
      {
          category: "Plural Objects",
          words: ["They", "These", "Those"],
          items: [
              {
                  ex: "Where are the apples? <span class='bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 px-1 rounded font-bold'>They</span> are on the table.",
                  ru: "Где яблоки? Они на столе.",
                  uz: "Olma qayerda? Ular stol ustida."
              },
              {
                  ex: "I love strawberries. <span class='bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 px-1 rounded font-bold'>These</span> are very sweet.",
                  ru: "Я люблю клубнику. Эти очень сладкие.",
                  uz: "Men qulupnayni yaxshi ko'raman. Bular juda shirin."
              }
          ]
      },
      {
          category: "Avoiding Repetition",
          words: ["One", "Ones"],
          items: [
              {
                  ex: "I don't want the green shirt. I want the red <span class='bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 px-1 rounded font-bold'>one</span>.",
                  ru: "Я не хочу зеленую рубашку. Я хочу красную.",
                  uz: "Men yashil ko'ylakni xohlamayman. Men qizilini xohlayman."
              },
              {
                  ex: "Small cakes are better than big <span class='bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 px-1 rounded font-bold'>ones</span>.",
                  ru: "Маленькие пирожные лучше больших.",
                  uz: "Kichik tortlar kattalaridan yaxshiroq."
              }
          ]
      }
  ];

  return (
    <div className="w-full max-w-5xl mx-auto space-y-8 pb-20">
        <div className="flex justify-end gap-4 mb-4 sticky top-0 bg-white/80 dark:bg-black/80 p-4 backdrop-blur z-10 rounded-xl">
             <button onClick={() => setShowRU(!showRU)} className={`flex items-center gap-2 px-4 py-2 rounded-lg font-bold border transition-colors ${showRU ? 'bg-blue-100 text-blue-700 border-blue-300' : 'bg-white dark:bg-neutral-800 text-gray-500 border-gray-300'}`}>
                {showRU ? <Eye size={16}/> : <EyeOff size={16}/>} RU
            </button>
            <button onClick={() => setShowUZ(!showUZ)} className={`flex items-center gap-2 px-4 py-2 rounded-lg font-bold border transition-colors ${showUZ ? 'bg-green-100 text-green-700 border-green-300' : 'bg-white dark:bg-neutral-800 text-gray-500 border-gray-300'}`}>
                {showUZ ? <Eye size={16}/> : <EyeOff size={16}/>} UZ
            </button>
        </div>

        {data.map((section, idx) => (
            <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                className="bg-white dark:bg-neutral-800 rounded-2xl shadow-lg border border-gray-100 dark:border-neutral-700 overflow-hidden"
            >
                <div className="bg-teal-50 dark:bg-teal-900/20 p-4 border-b border-teal-100 dark:border-teal-800/30">
                    <h3 className="text-xl font-bold text-teal-800 dark:text-teal-200">{section.category}</h3>
                    <div className="flex gap-2 mt-2">
                        {section.words.map(w => (
                            <span key={w} className="bg-white dark:bg-neutral-800 px-2 py-1 rounded text-xs font-mono border border-teal-200 dark:border-teal-800">{w}</span>
                        ))}
                    </div>
                </div>
                <div className="p-4 space-y-4">
                    {section.items.map((item, i) => (
                        <div key={i} className="p-3 bg-gray-50 dark:bg-neutral-900 rounded-xl">
                             <div className="text-lg md:text-xl text-gray-800 dark:text-gray-100 mb-2" dangerouslySetInnerHTML={{ __html: item.ex }} />
                             <AnimatePresence>
                                 {showRU && (
                                     <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="text-blue-600 dark:text-blue-400 text-sm overflow-hidden border-t border-gray-200 dark:border-neutral-700 mt-2 pt-1">
                                         {item.ru}
                                     </motion.div>
                                 )}
                                 {showUZ && (
                                     <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="text-green-600 dark:text-green-400 text-sm overflow-hidden border-t border-gray-200 dark:border-neutral-700 mt-1 pt-1">
                                         {item.uz}
                                     </motion.div>
                                 )}
                             </AnimatePresence>
                        </div>
                    ))}
                </div>
            </motion.div>
        ))}
    </div>
  );
};

export const PassiveExampleView = ({ tense, example }: { tense: string, example: any }) => {
    return (
        <div className="h-full flex flex-col items-center justify-center p-4">
            <h3 className="text-xl font-bold uppercase tracking-widest text-purple-500 mb-8">{tense}</h3>
            
            <div className="w-full max-w-4xl grid gap-8">
                {/* Active */}
                <motion.div 
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    className="bg-white dark:bg-neutral-800 p-8 rounded-2xl shadow-xl border-l-8 border-blue-500 relative"
                >
                    <div className="absolute top-4 right-4 text-xs font-bold bg-blue-100 text-blue-600 px-2 py-1 rounded uppercase">Active</div>
                    <div className="text-3xl md:text-5xl font-bold text-gray-800 dark:text-white" dangerouslySetInnerHTML={{ __html: example.active }}></div>
                </motion.div>

                <div className="flex justify-center">
                    <ArrowRight className="text-gray-400 rotate-90 md:rotate-0" size={48} />
                </div>

                {/* Passive */}
                 <motion.div 
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="bg-white dark:bg-neutral-800 p-8 rounded-2xl shadow-xl border-l-8 border-purple-500 relative"
                >
                    <div className="absolute top-4 right-4 text-xs font-bold bg-purple-100 text-purple-600 px-2 py-1 rounded uppercase">Passive</div>
                    <div className="text-3xl md:text-5xl font-bold text-gray-800 dark:text-white" dangerouslySetInnerHTML={{ __html: example.passive }}></div>
                </motion.div>

                 <div className="grid grid-cols-2 gap-4 mt-8">
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl text-blue-800 dark:text-blue-200 text-center">
                        <span className="block text-xs uppercase opacity-50 mb-1">Russian</span>
                        {example.ru}
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-xl text-green-800 dark:text-green-200 text-center">
                        <span className="block text-xs uppercase opacity-50 mb-1">Uzbek</span>
                        {example.uz}
                    </div>
                 </div>
            </div>
        </div>
    );
};

export const PassiveTenseTable = () => {
    return (
        <div className="w-full max-w-5xl mx-auto bg-white dark:bg-neutral-800 rounded-xl shadow-2xl overflow-hidden text-sm md:text-base">
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead className="bg-purple-600 text-white">
                        <tr>
                            <th className="p-4 text-left">Tense</th>
                            <th className="p-4 text-left">Active</th>
                            <th className="p-4 text-left">Passive (Be + V3)</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                        {PASSIVE_TENSE_DATA.map((row, i) => (
                            <tr key={i} className="hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors">
                                <td className="p-4 font-bold text-purple-600 dark:text-purple-400">{row.label}</td>
                                <td className="p-4 text-gray-700 dark:text-gray-300">{row.examples[0].active}</td>
                                <td className="p-4 font-medium text-gray-900 dark:text-white" dangerouslySetInnerHTML={{ __html: row.examples[0].passive }}></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export const PassiveExerciseList = () => {
    const exercises = [
        { q: "Someone stole my bike.", a: "My bike was stolen." },
        { q: "They clean the office every day.", a: "The office is cleaned every day." },
        { q: "They are building a new bridge.", a: "A new bridge is being built." },
        { q: "Someone has eaten the cake.", a: "The cake has been eaten." },
        { q: "We will finish the project soon.", a: "The project will be finished soon." }
    ];

    const [revealed, setRevealed] = useState<number[]>([]);

    const toggle = (i: number) => {
        if (revealed.includes(i)) {
            setRevealed(revealed.filter(idx => idx !== i));
        } else {
            setRevealed([...revealed, i]);
        }
    };

    return (
        <div className="w-full max-w-4xl mx-auto space-y-4">
            {exercises.map((ex, i) => (
                <div key={i} className="flex flex-col md:flex-row gap-4 items-stretch">
                    <div className="flex-1 bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-md border-l-4 border-blue-500 flex items-center">
                        <span className="font-bold mr-4 text-gray-400">{i + 1}.</span>
                        <span className="text-xl text-gray-800 dark:text-white">{ex.q}</span>
                    </div>
                    <button 
                        onClick={() => toggle(i)}
                        className="md:w-16 bg-purple-100 dark:bg-neutral-700 hover:bg-purple-200 dark:hover:bg-neutral-600 rounded-xl flex items-center justify-center transition-colors"
                    >
                        {revealed.includes(i) ? <EyeOff className="text-purple-600 dark:text-gray-300" /> : <Eye className="text-purple-600 dark:text-gray-300" />}
                    </button>
                    <div className={`flex-1 bg-purple-50 dark:bg-purple-900/30 p-6 rounded-xl border-l-4 border-purple-500 flex items-center transition-all duration-300 ${revealed.includes(i) ? 'opacity-100' : 'opacity-0'}`}>
                        <span className="text-xl font-bold text-purple-900 dark:text-purple-100">{ex.a}</span>
                    </div>
                </div>
            ))}
        </div>
    );
};