import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RefreshCw, ArrowRight, Video, PenTool, User, MessageSquare, Globe, Check, X, Eye, EyeOff, Mic, Ear, Brain } from 'lucide-react';

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
                  ru: "Маленькие торты лучше больших.",
                  uz: "Kichik tortlar kattalaridan yaxshiroq."
              }
          ]
      }
  ];

  return (
    <div className="w-full max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-6">
            <h3 className="text-3xl font-bold text-teal-600 dark:text-teal-400">Reference Words Guide</h3>
            <div className="flex gap-2">
                <button 
                onClick={() => setShowRU(!showRU)} 
                className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-bold border transition-colors shadow-sm ${showRU ? 'bg-blue-100 text-blue-700 border-blue-300' : 'bg-white dark:bg-neutral-800 text-gray-500 border-gray-300 dark:border-neutral-600'}`}
                >
                    <Globe size={16}/> RU
                </button>
                <button 
                onClick={() => setShowUZ(!showUZ)} 
                className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-bold border transition-colors shadow-sm ${showUZ ? 'bg-green-100 text-green-700 border-green-300' : 'bg-white dark:bg-neutral-800 text-gray-500 border-gray-300 dark:border-neutral-600'}`}
                >
                    <Globe size={16}/> UZ
                </button>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.map((cat, i) => (
                <motion.div 
                    key={i}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: i * 0.2 }}
                    className="bg-white dark:bg-neutral-800 rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-neutral-700 flex flex-col"
                >
                    <div className="bg-teal-50 dark:bg-teal-900/30 p-4 border-b border-teal-100 dark:border-teal-800">
                        <div className="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400 mb-1">{cat.category}</div>
                        <div className="text-xl font-black text-gray-800 dark:text-white">{cat.words.join(", ")}</div>
                    </div>
                    
                    <div className="p-4 flex-1 flex flex-col gap-4">
                        {cat.items.map((item, idx) => (
                            <div key={idx} className="bg-gray-50 dark:bg-neutral-900/50 p-3 rounded-lg border border-gray-100 dark:border-neutral-800">
                                <p className="text-lg text-gray-800 dark:text-gray-200 mb-2 leading-snug" dangerouslySetInnerHTML={{__html: item.ex}}></p>
                                <AnimatePresence>
                                    {(showRU || showUZ) && (
                                        <motion.div 
                                            initial={{ opacity: 0, height: 0 }} 
                                            animate={{ opacity: 1, height: 'auto' }} 
                                            exit={{ opacity: 0, height: 0 }}
                                            className="space-y-1 pt-2 border-t border-gray-200 dark:border-neutral-700 mt-2"
                                        >
                                            {showRU && <div className="text-sm text-blue-600 font-medium">🇷🇺 {item.ru}</div>}
                                            {showUZ && <div className="text-sm text-green-600 font-medium">🇺🇿 {item.uz}</div>}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </motion.div>
            ))}
        </div>
    </div>
  );
};

export const PassiveTenseTable = () => {
  const [showRU, setShowRU] = useState(false);
  const [showUZ, setShowUZ] = useState(false);

  const tenses = [
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

  return (
    <div className="w-full max-w-6xl mx-auto bg-white dark:bg-neutral-800 rounded-3xl shadow-xl overflow-hidden border border-gray-200 dark:border-neutral-700">
      <div className="bg-purple-100 dark:bg-purple-900/30 p-4 flex justify-between items-center border-b border-purple-200 dark:border-purple-800">
        <h3 className="text-xl font-bold text-purple-700 dark:text-purple-300">Tense Guide</h3>
        <div className="flex gap-2">
            <button 
              onClick={() => setShowRU(!showRU)} 
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-bold border transition-colors ${showRU ? 'bg-blue-100 text-blue-700 border-blue-300' : 'bg-white dark:bg-neutral-700 text-gray-500 border-gray-300 dark:border-neutral-600'}`}
            >
                <Globe size={14}/> RU
            </button>
            <button 
              onClick={() => setShowUZ(!showUZ)} 
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-bold border transition-colors ${showUZ ? 'bg-green-100 text-green-700 border-green-300' : 'bg-white dark:bg-neutral-700 text-gray-500 border-gray-300 dark:border-neutral-600'}`}
            >
                <Globe size={14}/> UZ
            </button>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-50 dark:bg-neutral-900 text-gray-500 uppercase text-xs">
            <tr>
              <th className="px-6 py-4">Tense</th>
              <th className="px-6 py-4 text-gray-400">Active Voice (Person Focused)</th>
              <th className="px-6 py-4 text-purple-600 dark:text-purple-400">Passive Voice (Object Focused)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 dark:divide-neutral-700 text-sm md:text-base">
            {tenses.map((t, i) => (
              <React.Fragment key={i}>
                <tr className="bg-gray-50/50 dark:bg-neutral-900/30">
                    <td rowSpan={t.examples.length} className="px-6 py-4 font-bold text-gray-400 dark:text-gray-500 border-r border-gray-100 dark:border-neutral-700 align-top">
                        {t.label}
                    </td>
                    <td className="px-6 py-4 text-gray-600 dark:text-gray-400">{t.examples[0].active}</td>
                    <td className="px-6 py-4">
                        <div dangerouslySetInnerHTML={{ __html: t.examples[0].passive }} className="text-gray-900 dark:text-gray-100" />
                        <AnimatePresence>
                            {(showRU || showUZ) && (
                            <motion.div 
                                initial={{ opacity: 0, height: 0 }} 
                                animate={{ opacity: 1, height: 'auto' }} 
                                exit={{ opacity: 0, height: 0 }}
                                className="mt-1 space-y-1 overflow-hidden"
                            >
                                {showRU && <div className="text-xs text-blue-500 font-bold">RU: {t.examples[0].ru}</div>}
                                {showUZ && <div className="text-xs text-green-600 font-bold">UZ: {t.examples[0].uz}</div>}
                            </motion.div>
                            )}
                        </AnimatePresence>
                    </td>
                </tr>
                {t.examples.slice(1).map((ex, exI) => (
                    <tr key={`${i}-${exI}`} className="hover:bg-gray-50 dark:hover:bg-neutral-700/50 transition-colors">
                        <td className="px-6 py-4 text-gray-600 dark:text-gray-400">{ex.active}</td>
                        <td className="px-6 py-4">
                            <div dangerouslySetInnerHTML={{ __html: ex.passive }} className="text-gray-900 dark:text-gray-100" />
                            <AnimatePresence>
                                {(showRU || showUZ) && (
                                <motion.div 
                                    initial={{ opacity: 0, height: 0 }} 
                                    animate={{ opacity: 1, height: 'auto' }} 
                                    exit={{ opacity: 0, height: 0 }}
                                    className="mt-1 space-y-1 overflow-hidden"
                                >
                                    {showRU && <div className="text-xs text-blue-500 font-bold">RU: {ex.ru}</div>}
                                    {showUZ && <div className="text-xs text-green-600 font-bold">UZ: {ex.uz}</div>}
                                </motion.div>
                                )}
                            </AnimatePresence>
                        </td>
                    </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export const PassiveExerciseList = () => {
    const exercises = [
        { q: "People drink coffee every day.", a: "Coffee is drunk every day." },
        { q: "My father built this house.", a: "This house was built by my father." },
        { q: "They are cleaning the park.", a: "The park is being cleaned." },
        { q: "Someone has taken my book.", a: "My book has been taken." },
        { q: "We will invite you.", a: "You will be invited." },
        { q: "You must follow the rules.", a: "The rules must be followed." },
        { q: "They were fixing the car.", a: "The car was being fixed." },
        { q: "Shakespeare wrote Romeo and Juliet.", a: "Romeo and Juliet was written by Shakespeare." },
        { q: "Do they produce cars here?", a: "Are cars produced here?" },
        { q: "Did the dog eat the cake?", a: "Was the cake eaten by the dog?" }
    ];

    const [revealed, setRevealed] = useState<number[]>([]);

    const toggleReveal = (idx: number) => {
        if (revealed.includes(idx)) {
            setRevealed(revealed.filter(i => i !== idx));
        } else {
            setRevealed([...revealed, idx]);
        }
    };

    return (
        <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 pb-12">
            {exercises.map((ex, i) => (
                <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-neutral-700 flex flex-col justify-between"
                >
                    <div>
                        <div className="flex justify-between items-start mb-4">
                            <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 text-xs font-bold px-2 py-1 rounded">
                                {i + 1}
                            </span>
                            <button 
                                onClick={() => toggleReveal(i)}
                                className="text-gray-400 hover:text-purple-500 transition-colors p-2 -mr-2"
                            >
                                {revealed.includes(i) ? <EyeOff size={20} /> : <Eye size={20} />}
                            </button>
                        </div>
                        <div className="text-gray-700 dark:text-gray-300 mb-4 text-lg font-medium">
                            {ex.q}
                        </div>
                    </div>
                    
                    <div className="relative min-h-[2rem]">
                        <AnimatePresence mode="wait">
                            {revealed.includes(i) ? (
                                <motion.div 
                                    key="ans"
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    className="text-purple-600 dark:text-purple-300 font-bold text-lg"
                                >
                                    {ex.a}
                                </motion.div>
                            ) : (
                                <motion.div 
                                    key="hidden"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="h-8 bg-gray-100 dark:bg-neutral-700/50 rounded w-full animate-pulse"
                                >
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};