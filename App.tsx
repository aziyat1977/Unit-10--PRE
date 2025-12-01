import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Menu, X, Monitor, BookOpen, Sun, Moon, GraduationCap, Brain, Users, Gamepad2 } from 'lucide-react';
import { LESSONS, QUESTIONS, GAMES, PERSONALITY_TIPS } from './constants';
import { Roulette } from './components/Roulette';
import { TongueMap, PassiveActiveToggle, PolitenessScale, WasteChart, TaskCard, FlowChart, GrammarBox, RoleplayCard } from './components/SlideComponents';
import { Kahoot } from './components/Kahoot';
import { VocabMaster } from './components/VocabMaster';
import { PersonalityHUD } from './components/PersonalityOverlay';
import { PersonalityType } from './types';

// --- Type Definitions for this file ---
type SlideComponent = React.FC<{ isActive: boolean }>;

interface SlideData {
  component: SlideComponent;
  title: string;
  tag: string;
  teacherNotes?: string[];
}

type Theme = 'dark' | 'light';
type UserMode = 'student' | 'teacher';
type AppMode = 'presentation' | 'game';

const App: React.FC = () => {
  const [currentLessonId, setCurrentLessonId] = useState(1);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // New Modes State
  const [theme, setTheme] = useState<Theme>('dark');
  const [userMode, setUserMode] = useState<UserMode>('student');
  const [appMode, setAppMode] = useState<AppMode>('presentation');
  const [personality, setPersonality] = useState<PersonalityType>('ambivert');
  
  // Game State
  const [activeGameId, setActiveGameId] = useState<string | null>(null);

  const currentLesson = LESSONS.find(l => l.id === currentLessonId) || LESSONS[0];

  // --- SLIDE CONTENT DEFINITIONS ---
  const getSlidesForLesson = (lessonId: number): SlideData[] => {
    // SPECIAL CASE: Lesson 5 is the Vocab Master Tool
    if (lessonId === 5) {
      return [{
        tag: "Tool",
        title: "Vocab Master",
        teacherNotes: ["Use this for revision", "Drill pronunciation", "Random fire questions"],
        component: () => <VocabMaster />
      }];
    }

    const commonSlides: SlideData[] = [];
    
    // 1. Cover Slide
    commonSlides.push({
      tag: "Intro",
      title: "Cover",
      teacherNotes: ["Check attendance", "Warm up: Ask how everyone is feeling", "Set lesson objective (60 mins)"],
      component: () => (
        <div className={`h-full flex flex-col items-center justify-center text-center bg-gradient-to-br ${currentLesson.gradient}`}>
          <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5 }}>
            <span className="text-9xl mb-4 block drop-shadow-lg filter">{currentLesson.icon}</span>
            <h1 className="text-6xl md:text-8xl font-black text-white mb-6 drop-shadow-xl">{currentLesson.title.split(' ')[0]}</h1>
            <h2 className="text-3xl md:text-5xl font-light text-white mb-8">{currentLesson.title.substring(5)}</h2>
            <div className="bg-white/20 backdrop-blur-md px-6 py-2 rounded-full inline-block text-white font-bold border border-white/30 shadow-lg">
              60 Minutes • Intermediate
            </div>
          </motion.div>
        </div>
      )
    });

    if (lessonId === 1) { // TASTE
      commonSlides.push(
        {
          tag: "Pre-Task",
          title: "Imagine the Sensation",
          teacherNotes: ["Elicit adjectives: Sour, Spicy, Bitter", "Drill pronunciation of 'Savory' /seɪvəri/", "Ask students to mime the feeling"],
          component: () => (
            <div className="h-full flex flex-col items-center justify-center bg-gray-50 dark:bg-neutral-900 transition-colors duration-500">
               <h2 className="text-4xl font-bold mb-12 text-gray-800 dark:text-white">Imagine the taste...</h2>
               <div className="flex gap-8 md:gap-16">
                  {[{emoji: "🍋", label: "Lemon", color: "text-yellow-500 dark:text-yellow-400"}, {emoji: "🌶️", label: "Chili", color: "text-red-600 dark:text-red-500"}, {emoji: "🍫", label: "99% Cocoa", color: "text-gray-700 dark:text-neutral-500"}].map((item, idx) => (
                    <motion.div 
                      key={item.label}
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: idx * 0.2 }}
                      className="text-center group"
                    >
                      <div className="text-7xl mb-4 transform group-hover:scale-110 transition-transform cursor-pointer drop-shadow-md">{item.emoji}</div>
                      <p className={`text-2xl font-bold ${item.color}`}>{item.label}</p>
                    </motion.div>
                  ))}
               </div>
               <p className="mt-12 text-xl text-gray-500 dark:text-neutral-400">Show me the face you make!</p>
            </div>
          )
        },
        {
          tag: "Vocab",
          title: "Tongue Map",
          teacherNotes: ["Use the diagram to categorize vocab", "Check understanding of 'Bland' vs 'Savory'", "Umami is the 'savory' 5th taste"],
          component: () => (
            <div className="h-full flex flex-col md:flex-row items-center justify-center gap-12 bg-gray-50 dark:bg-neutral-900 p-8 transition-colors duration-500">
              <div className="w-full md:w-1/2">
                <TongueMap />
              </div>
              <div className="w-full md:w-1/2 space-y-4">
                <h3 className="text-3xl font-bold text-orange-500 mb-6">Categorize These Words</h3>
                <div className="grid grid-cols-2 gap-4">
                  {['Baked (Method)', 'Savory (Taste)', 'Crunchy (Texture)', 'Bland (Taste)', 'Stew (Method)', 'Spicy (Taste)'].map((word, i) => (
                    <motion.div 
                      key={word}
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: i * 0.1 }}
                      className="bg-white dark:bg-neutral-800 p-3 rounded-lg border border-gray-200 dark:border-neutral-700 hover:border-orange-500 dark:hover:border-orange-500 text-gray-800 dark:text-gray-200 shadow-sm transition-colors"
                    >
                      {word.split(' ')[0]} <span className="text-xs text-gray-500 ml-2">{word.split(' ')[1]}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          )
        },
        {
          tag: "Task Cycle",
          title: "The Food Vlogger",
          teacherNotes: ["Set the scene: TikTok/Reels", "Monitor pairs during planning", "Focus on descriptive adjectives, not just 'good/bad'"],
          component: () => (
            <div className="h-full flex items-center justify-center bg-gray-50 dark:bg-neutral-900 p-8 transition-colors duration-500">
              <TaskCard 
                title="The Food Vlogger"
                icon={<Brain size={32} />}
                color="#f97316"
                steps={[
                  "You are a famous TikTok food influencer.",
                  "You are eating a 'Mystery Dish' (Choose one secretly).",
                  "Record a 1-minute audio clip describing it.",
                  "Describe texture, taste, and cooking method.",
                  "DO NOT name the dish! The class must guess."
                ]}
              />
            </div>
          )
        },
        {
          tag: "Reading",
          title: "Supertasters",
          teacherNotes: ["Reading for Gist: Do they like coffee?", "Reading for Detail: Why avoid veggies?", "Highlight grammar in context (-ing)"],
          component: () => (
             <div className="h-full flex items-center justify-center bg-gray-50 dark:bg-neutral-900 p-8 transition-colors duration-500">
               <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="space-y-6">
                    <h2 className="text-4xl font-bold text-orange-500">Supertasters</h2>
                    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                      For some people, broccoli is unbearably bitter and coffee is impossible to drink. These people are "supertasters". 
                      <br/><br/>
                      <strong>Being a supertaster</strong> is not always good news. They often avoid <strong>eating</strong> vegetables, which can be unhealthy. However, they are often good at <strong>recognizing</strong> bad ingredients in food.
                    </p>
                  </div>
                  <div className="bg-white dark:bg-neutral-800 p-6 rounded-xl border border-orange-500/30 shadow-lg">
                     <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Concept Check</h3>
                     <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                       <li className="flex items-center gap-2"><div className="w-2 h-2 bg-orange-500 rounded-full"></div> Do supertasters like coffee? (No)</li>
                       <li className="flex items-center gap-2"><div className="w-2 h-2 bg-orange-500 rounded-full"></div> Why? (Too bitter)</li>
                       <li className="flex items-center gap-2"><div className="w-2 h-2 bg-orange-500 rounded-full"></div> Look at the <strong>bold</strong> words. What form are they?</li>
                     </ul>
                  </div>
               </div>
             </div>
          )
        },
        {
          tag: "Grammar",
          title: "The -ing Form",
          teacherNotes: ["MFP: Meaning (Noun/Subject), Form (Verb+ing), Pronunciation /ŋ/", "Drill 'eating' not 'eatin-k'"],
          component: () => (
            <div className="h-full flex flex-col items-center justify-center bg-gray-50 dark:bg-neutral-900 p-8 transition-colors duration-500">
              <GrammarBox 
                title="The -ing Form (Gerunds)"
                colorClass="text-orange-500"
                rules={[
                  { label: "As a Subject", example: "<span class='text-orange-600 dark:text-orange-400'>Eating</span> spicy food is fun." },
                  { label: "Object after Verb", example: "I enjoy <span class='text-orange-600 dark:text-orange-400'>cooking</span>." },
                  { label: "After Preposition", example: "I am good at <span class='text-orange-600 dark:text-orange-400'>baking</span>." }
                ]}
              />
            </div>
          )
        },
        {
          tag: "Speaking",
          title: "Question Roulette",
          teacherNotes: ["Free practice stage", "Monitor for -ing form errors", "Encourage follow-up questions"],
          component: () => (
             <div className="h-full flex flex-col items-center justify-center bg-gray-50 dark:bg-neutral-900 p-4 transition-colors duration-500">
               <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Let's Talk Taste</h2>
               <Roulette questions={QUESTIONS[1]} colorClass="bg-orange-600 hover:bg-orange-500" />
             </div>
          )
        }
      );
    } else if (lessonId === 2) { // CANS
       commonSlides.push(
        {
          tag: "Pre-Task",
          title: "The Pantry Raid",
          teacherNotes: ["Elicit container names", "Drill pronunciation of 'Sachet' vs 'Packet'", "Game: Quick fire naming"],
          component: () => (
            <div className="h-full flex flex-col items-center justify-center bg-gray-50 dark:bg-neutral-900 transition-colors duration-500">
               <h2 className="text-3xl mb-8 font-light text-gray-800 dark:text-white">What container is it?</h2>
               <div className="grid grid-cols-3 md:grid-cols-5 gap-6">
                 {[
                   {img: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=200", label: "Jar", bg: "bg-yellow-900/10 dark:bg-yellow-900/20"},
                   {img: "https://images.unsplash.com/photo-1585250499645-e23364f891eb?auto=format&fit=crop&q=80&w=200", label: "Can", bg: "bg-gray-700/10 dark:bg-gray-700/20"},
                   {img: "https://images.unsplash.com/photo-1627483262268-9c96d8a31892?auto=format&fit=crop&q=80&w=200", label: "Packet", bg: "bg-pink-900/10 dark:bg-pink-900/20"},
                   {img: "https://images.unsplash.com/photo-1596706037684-245c635df0b0?auto=format&fit=crop&q=80&w=200", label: "Carton", bg: "bg-blue-900/10 dark:bg-blue-900/20"},
                   {img: "https://images.unsplash.com/photo-1601618213601-5232773b063d?auto=format&fit=crop&q=80&w=200", label: "Tube", bg: "bg-green-900/10 dark:bg-green-900/20"}
                 ].map((item, idx) => (
                    <motion.div 
                      key={item.label}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: idx * 0.15, type: "spring" }}
                      className={`p-4 rounded-xl border border-gray-200 dark:border-white/10 ${item.bg} flex flex-col items-center shadow-md`}
                    >
                      <div className="w-20 h-32 rounded-lg bg-cover bg-center mb-4 shadow-lg" style={{ backgroundImage: `url(${item.img})`}}></div>
                      <span className="font-bold text-lg text-gray-800 dark:text-gray-100">{item.label}</span>
                    </motion.div>
                 ))}
               </div>
            </div>
          )
        },
        {
           tag: "Task Cycle",
           title: "Engineering Task",
           teacherNotes: ["Groups of 3", "Students draw a flow chart", "Monitor for Passive Voice attempts (even if incorrect)"],
           component: () => (
             <div className="h-full flex flex-col items-center justify-center bg-gray-50 dark:bg-neutral-900 p-8 transition-colors duration-500">
               <div className="max-w-4xl text-center">
                 <h2 className="text-4xl font-bold mb-6 text-purple-600 dark:text-purple-400">The Innovation Pitch</h2>
                 <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">You have invented a crazy new product (e.g. Spaghetti-in-a-Tube). <br/>Explain the production line to the investors.</p>
                 <FlowChart />
               </div>
             </div>
           )
        },
        {
           tag: "Grammar",
           title: "Passive Voice",
           teacherNotes: ["Focus on the OBJECT receiving the action", "Structure: BE + V3", "Drill contractions: 'It's made of...'"],
           component: () => (
             <div className="h-full flex flex-col items-center justify-center bg-gray-50 dark:bg-neutral-900 p-8 transition-colors duration-500">
                <h2 className="text-4xl font-bold mb-4 text-purple-600 dark:text-purple-400">The Passive Voice</h2>
                <p className="text-xl text-gray-600 dark:text-gray-400 mb-12">Shift the focus from the <span className="text-blue-500 dark:text-blue-400">person</span> to the <span className="text-red-500 dark:text-red-400">object</span>.</p>
                <PassiveActiveToggle />
                <div className="mt-12 font-mono bg-gray-200 dark:bg-black/50 p-4 rounded text-purple-800 dark:text-purple-200 border border-purple-200 dark:border-purple-900">
                  Subject + BE + Past Participle (V3)
                </div>
             </div>
           )
        },
        {
          tag: "Speaking",
          title: "Invention Roulette",
          teacherNotes: ["Students discuss processes", "Correction spot: 'It make in China' -> 'It IS MADE in China'"],
          component: () => (
             <div className="h-full flex flex-col items-center justify-center bg-gray-50 dark:bg-neutral-900 p-4 transition-colors duration-500">
               <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Production & Process</h2>
               <Roulette questions={QUESTIONS[2]} colorClass="bg-purple-600 hover:bg-purple-500" />
             </div>
          )
        }
       );
    } else if (lessonId === 3) { // WASTE
      commonSlides.push(
        {
          tag: "Pre-Task",
          title: "Shocking Stats",
          teacherNotes: ["Elicit reactions: Shock? Disbelief?", "Discuss causes: Supermarkets? Consumers?", "Vocab: Landfill, Edible"],
          component: () => (
             <div className="h-full flex flex-col items-center justify-center bg-gray-50 dark:bg-neutral-900 transition-colors duration-500">
                <WasteChart />
                <p className="mt-12 text-2xl max-w-2xl text-center text-gray-700 dark:text-gray-300 font-light">
                  One-third of all food produced is never eaten. <br/><span className="text-teal-600 dark:text-teal-400 font-bold mt-2 block">Why is this happening?</span>
                </p>
             </div>
          )
        },
        {
          tag: "Task Cycle",
          title: "The Campaign",
          teacherNotes: ["Group work", "Output: A poster + Slogan", "Focus: Persuasive language"],
          component: () => (
            <div className="h-full flex items-center justify-center bg-gray-50 dark:bg-neutral-900 p-8 transition-colors duration-500">
              <TaskCard 
                title="Stop The Waste"
                icon={<BookOpen size={32} />}
                color="#14b8a6"
                steps={[
                  "The Principal wants to ban food waste.",
                  "Design a poster for the cafeteria.",
                  "Create a 3-sentence slogan using Reference Words.",
                  "Convince students to change their habits.",
                  "Example: 'Food is fuel. Don't waste it.'"
                ]}
              />
            </div>
          )
        },
        {
          tag: "Reading",
          title: "Reading Task",
          teacherNotes: ["Check answers together", "Concept Check Reference Words in text: 'Supermarkets do THIS' -> What is THIS?"],
          component: () => (
             <div className="h-full flex items-center justify-center bg-gray-50 dark:bg-neutral-900 p-8 transition-colors duration-500">
               <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="relative">
                    <img src="https://images.unsplash.com/photo-1532509854226-a2d9d8e66f8e?auto=format&fit=crop&q=80&w=600" alt="Food Waste" className="rounded-lg shadow-2xl opacity-90" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 rounded-lg"></div>
                    <div className="absolute bottom-6 left-6 text-white">
                       <h3 className="text-2xl font-bold">The Ugly Truth</h3>
                       <p>Page 84</p>
                    </div>
                  </div>
                  <div className="space-y-6">
                     <h3 className="text-3xl font-bold text-teal-600 dark:text-teal-500">Comprehension Check</h3>
                     <ul className="space-y-4 text-gray-800 dark:text-gray-200">
                       {[
                         "1. How much food does the average family waste?",
                         "2. What is the difference between 'Best Before' and 'Use By'?",
                         "3. Name three ways to reduce waste mentioned in the text."
                       ].map((q, i) => (
                         <motion.li 
                           key={i}
                           initial={{ x: 50, opacity: 0 }}
                           animate={{ x: 0, opacity: 1 }}
                           transition={{ delay: 0.5 + (i * 0.2) }}
                           className="bg-white dark:bg-neutral-800 p-4 rounded-lg border-l-4 border-teal-500 shadow-sm"
                         >
                           {q}
                         </motion.li>
                       ))}
                     </ul>
                  </div>
               </div>
             </div>
          )
        },
        {
          tag: "Grammar",
          title: "Reference Words",
          teacherNotes: ["Cohesion & Coherence", "Avoid repetition", "Practice: 'I bought a cake. It was good.'"],
          component: () => (
            <div className="h-full flex flex-col items-center justify-center bg-gray-50 dark:bg-neutral-900 p-8 transition-colors duration-500">
               <GrammarBox 
                title="Reference Words (The Glue)"
                colorClass="text-teal-600 dark:text-teal-500"
                rules={[
                  { label: "Singular Objects", example: "I like the red apple. I don't like <span class='bg-teal-200 dark:bg-teal-900 dark:text-teal-300 px-1 rounded'>that one</span>." },
                  { label: "Plural Objects", example: "The green apples are sour. <span class='bg-teal-200 dark:bg-teal-900 dark:text-teal-300 px-1 rounded'>These</span> are sweet." },
                  { label: "Abstract Ideas", example: "People waste food. <span class='bg-teal-200 dark:bg-teal-900 dark:text-teal-300 px-1 rounded'>This</span> is terrible." }
                ]}
              />
            </div>
          )
        },
        {
          tag: "Speaking",
          title: "Eco-Roulette",
          teacherNotes: ["Discuss habits", "Correction: Watch for 'It depends of...' -> 'It depends ON'"],
          component: () => (
             <div className="h-full flex flex-col items-center justify-center bg-gray-50 dark:bg-neutral-900 p-4 transition-colors duration-500">
               <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Environment & Habits</h2>
               <Roulette questions={QUESTIONS[3]} colorClass="bg-teal-600 hover:bg-teal-500" />
             </div>
          )
        }
      );
    } else if (lessonId === 4) { // RESTAURANTS
      commonSlides.push(
        {
          tag: "Pre-Task",
          title: "The Nightmare Meal",
          teacherNotes: ["Brainstorm complaints: Cold, hair, rude, slow", "Ask: 'What would you do?'"],
          component: () => (
            <div className="h-full flex flex-col items-center justify-center bg-gray-50 dark:bg-neutral-900 transition-colors duration-500">
               <div className="relative w-full max-w-4xl h-96 overflow-hidden rounded-2xl shadow-2xl">
                 <img src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=1200" alt="Bad Restaurant" className="w-full h-full object-cover grayscale" />
                 <div className="absolute inset-0 bg-red-900/30 flex items-center justify-center">
                    <h2 className="text-6xl font-black text-white border-4 border-white p-4 transform -rotate-12 uppercase tracking-widest">Disaster!</h2>
                 </div>
               </div>
               <div className="flex flex-wrap gap-4 mt-8 justify-center">
                 {["Too Salty", "Rude Waiter", "Found a Hair", "Overcharged", "Cold Soup"].map((tag, i) => (
                    <span key={i} className="px-4 py-2 bg-white dark:bg-neutral-800 rounded-full text-red-500 dark:text-red-400 font-bold border border-red-200 dark:border-red-900/50 shadow-sm">{tag}</span>
                 ))}
               </div>
            </div>
          )
        },
        {
          tag: "Task Cycle",
          title: "Roleplay",
          teacherNotes: ["Student A: Complain but polite", "Student B: Apologize and solve", "Perform for class"],
          component: () => (
            <div className="h-full flex flex-col items-center justify-center bg-gray-50 dark:bg-neutral-900 p-8 transition-colors duration-500">
              <h2 className="text-4xl font-bold mb-12 text-gray-900 dark:text-white">The Complaint Roleplay</h2>
              <div className="flex flex-col md:flex-row gap-8 w-full max-w-5xl justify-center">
                 <RoleplayCard 
                    role="Student A: The Customer"
                    color="border-red-500"
                    icon={<Users className="text-red-500" />}
                    traits={["You are very difficult.", "You found a hair in your soup.", "Complain, but try to remain polite!"]}
                 />
                 <RoleplayCard 
                    role="Student B: The Waiter"
                    color="border-blue-500"
                    icon={<Users className="text-blue-500" />}
                    traits={["You are nervous.", "Apologize sincerely.", "Solve the problem (Free drink?)."]}
                 />
              </div>
            </div>
          )
        },
        {
          tag: "Functional Language",
          title: "The Politeness Scale",
          teacherNotes: ["Drill intonation: Soften the voice", "Direct: 'This is cold'", "Polite: 'I'm afraid there's a problem'"],
          component: () => (
            <div className="h-full flex flex-col items-center justify-center bg-gray-50 dark:bg-neutral-900 p-8 transition-colors duration-500">
               <h2 className="text-4xl font-bold mb-4 text-red-600 dark:text-red-500">Complaining Politely</h2>
               <p className="text-gray-600 dark:text-gray-400 mb-12">Don't be rude. Use "softeners".</p>
               <PolitenessScale />
            </div>
          )
        },
        {
          tag: "Writing",
          title: "Apostrophes",
          teacherNotes: ["Contractions vs Possession", "Common mistake: It's vs Its", "Review editing practice"],
          component: () => (
            <div className="h-full flex flex-col items-center justify-center bg-gray-50 dark:bg-neutral-900 p-8 transition-colors duration-500">
               <GrammarBox 
                title="Apostrophes ( ' )"
                colorClass="text-red-600 dark:text-red-500"
                rules={[
                  { label: "Contraction", example: "It is → <span class='text-red-600 dark:text-red-400 font-bold'>It's</span>" },
                  { label: "Possession (Singular)", example: "The waiter<span class='text-red-600 dark:text-red-400 font-bold'>'s</span> pad." },
                  { label: "Possession (Plural)", example: "My parents<span class='text-red-600 dark:text-red-400 font-bold'>'</span> house." }
                ]}
              />
              <div className="mt-8 bg-white dark:bg-neutral-800 p-4 rounded-lg text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-neutral-700 shadow-sm">
                Spot the mistake: "The food wa's cold."
              </div>
            </div>
          )
        },
        {
          tag: "Speaking",
          title: "Complaint Roulette",
          teacherNotes: ["Roleplay varied scenarios", "Vote on 'Most Polite Waiter'"],
          component: () => (
             <div className="h-full flex flex-col items-center justify-center bg-gray-50 dark:bg-neutral-900 p-4 transition-colors duration-500">
               <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Roleplay Scenarios</h2>
               <Roulette questions={QUESTIONS[4]} colorClass="bg-red-600 hover:bg-red-500" />
             </div>
          )
        }
      );
    }

    return commonSlides;
  };

  const slides = getSlidesForLesson(currentLessonId);
  const CurrentSlideComponent = slides[currentSlideIndex].component;
  const progressPercent = ((currentSlideIndex + 1) / slides.length) * 100;

  // Handlers
  const nextSlide = () => {
    if (currentSlideIndex < slides.length - 1) setCurrentSlideIndex(p => p + 1);
  };

  const prevSlide = () => {
    if (currentSlideIndex > 0) setCurrentSlideIndex(p => p - 1);
  };

  const changeLesson = (id: number) => {
    setCurrentLessonId(id);
    setCurrentSlideIndex(0);
    setIsMenuOpen(false);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (appMode === 'presentation') {
        if (e.key === 'ArrowRight') nextSlide();
        if (e.key === 'ArrowLeft') prevSlide();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlideIndex, slides.length, appMode]);

  // --- GAME RENDERER ---
  if (activeGameId) {
    const activeGame = GAMES[currentLessonId] ? GAMES[currentLessonId].find(g => g.id === activeGameId) : null;
    if (activeGame) {
      return (
        <div className={`w-screen h-screen font-sans ${theme}`}>
          <Kahoot game={activeGame} onExit={() => setActiveGameId(null)} />
        </div>
      );
    }
  }

  // --- MAIN RENDERER ---

  return (
    <div className={`w-screen h-screen overflow-hidden font-sans ${theme}`}>
      <div className="relative w-full h-full bg-white dark:bg-neutral-950 text-gray-900 dark:text-neutral-100 transition-colors duration-500">
        
        {/* Background Ambience */}
        <div className={`absolute inset-0 bg-gradient-to-br ${currentLesson.gradient} opacity-5 transition-opacity duration-1000 pointer-events-none`}></div>

        {/* Presentation vs Game Mode View */}
        {appMode === 'game' ? (
           <div className="w-full h-full p-8 overflow-y-auto bg-gray-50 dark:bg-neutral-900 relative z-30">
             <div className="max-w-6xl mx-auto">
               <div className="flex justify-between items-center mb-12">
                 <h1 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                    Game Center
                 </h1>
                 <button onClick={() => setAppMode('presentation')} className="px-6 py-2 bg-gray-200 dark:bg-neutral-700 rounded-full font-bold">
                    Back to Lesson
                 </button>
               </div>
               
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                 {GAMES[currentLessonId] && GAMES[currentLessonId].length > 0 ? GAMES[currentLessonId].map((game) => (
                    <motion.div 
                      key={game.id}
                      whileHover={{ y: -5, scale: 1.02 }}
                      className="bg-white dark:bg-neutral-800 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-neutral-700 cursor-pointer group"
                      onClick={() => setActiveGameId(game.id)}
                    >
                       <div className="h-40 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl mb-6 flex items-center justify-center relative overflow-hidden">
                          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-30"></div>
                          <Gamepad2 size={64} className="text-white drop-shadow-lg" />
                          <div className="absolute bottom-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded font-bold">
                            21 Qs
                          </div>
                       </div>
                       <h3 className="text-2xl font-bold mb-2 group-hover:text-purple-500 transition-colors">{game.title}</h3>
                       <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">{game.description}</p>
                       <div className="flex gap-2">
                          <span className="bg-yellow-100 text-yellow-800 text-xs font-bold px-2 py-1 rounded">3x Double Points</span>
                       </div>
                    </motion.div>
                 )) : (
                    <div className="col-span-3 text-center p-12 opacity-50">
                        No games available for this module.
                    </div>
                 )}
               </div>
             </div>
           </div>
        ) : (
          /* SLIDE VIEW */
          <div className="relative w-full h-full flex flex-col">
             
            {/* PERSONALITY OVERLAY */}
            <PersonalityHUD personality={personality} />

             {/* Progress Bar */}
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gray-200 dark:bg-neutral-800 z-50">
              <motion.div 
                className={`h-full bg-gradient-to-r ${currentLesson.gradient}`}
                initial={{ width: 0 }}
                animate={{ width: `${progressPercent}%` }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
            </div>

            {/* Header */}
            <header className="absolute top-2 left-0 w-full p-6 flex justify-between items-center z-20">
              <div className="flex items-center gap-4">
                <button onClick={() => setIsMenuOpen(true)} className="p-2 hover:bg-black/10 dark:hover:bg-white/10 rounded-full transition-colors">
                  <Menu />
                </button>
                <div className="flex flex-col">
                    <span className={`text-xs font-bold uppercase tracking-widest ${currentLesson.color}`}>{slides[currentSlideIndex].tag}</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400 opacity-80">Slide {currentSlideIndex + 1} / {slides.length}</span>
                </div>
              </div>
              <div className="hidden md:flex items-center gap-4 text-sm font-mono opacity-50">
                {userMode === 'teacher' && <span className="bg-red-500 text-white px-2 py-0.5 rounded text-xs font-bold">TEACHER MODE</span>}
                <span>CELTA UNIT 10</span>
              </div>
            </header>

            {/* Main Content Area */}
            <main className="flex-1 w-full h-full relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${currentLessonId}-${currentSlideIndex}`}
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 1.05, y: -20 }}
                  transition={{ duration: 0.4, ease: "anticipate" }}
                  className="absolute inset-0 w-full h-full"
                >
                    <CurrentSlideComponent isActive={true} />
                </motion.div>
              </AnimatePresence>
            </main>

            {/* Teacher Mode Panel */}
            <AnimatePresence>
              {userMode === 'teacher' && slides[currentSlideIndex].teacherNotes && (
                <motion.div 
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 100, opacity: 0 }}
                  className="absolute bottom-24 left-1/2 transform -translate-x-1/2 w-full max-w-3xl z-30 px-4"
                >
                  <div className="bg-yellow-50 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-700 backdrop-blur-md rounded-xl p-4 shadow-xl">
                      <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2 text-yellow-700 dark:text-yellow-400 font-bold uppercase text-xs tracking-wider">
                            <GraduationCap size={16} /> Teacher Notes
                          </div>
                          <span className="text-xs font-mono opacity-70 text-yellow-800 dark:text-yellow-200">{PERSONALITY_TIPS[personality]}</span>
                      </div>
                      
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-yellow-900 dark:text-yellow-100">
                        {slides[currentSlideIndex].teacherNotes?.map((note, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="mt-1.5 w-1 h-1 bg-yellow-500 rounded-full"></span>
                            {note}
                          </li>
                        ))}
                      </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Controls */}
            {/* Hide main navigation controls if on Lesson 5 (Vocab Master handles its own navigation/interaction) */}
            {currentLessonId !== 5 && (
              <div className="absolute bottom-8 right-8 flex gap-4 z-20">
                <button 
                  onClick={prevSlide}
                  disabled={currentSlideIndex === 0}
                  className="p-4 rounded-full bg-black/5 dark:bg-white/5 backdrop-blur-md border border-black/10 dark:border-white/10 hover:bg-black/10 dark:hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed transition-all text-gray-900 dark:text-white"
                >
                  <ChevronLeft />
                </button>
                <button 
                  onClick={nextSlide}
                  disabled={currentSlideIndex === slides.length - 1}
                  className={`p-4 rounded-full text-white shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:grayscale bg-gradient-to-r ${currentLesson.gradient}`}
                >
                  <ChevronRight />
                </button>
              </div>
            )}
          </div>
        )}

        {/* Navigation Drawer & Settings */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                onClick={() => setIsMenuOpen(false)}
                className="absolute inset-0 bg-black/60 backdrop-blur-sm z-40"
              />
              <motion.div 
                initial={{ x: '-100%' }} animate={{ x: 0 }} exit={{ x: '-100%' }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="absolute top-0 left-0 h-full w-80 bg-white dark:bg-neutral-900 border-r border-gray-200 dark:border-neutral-800 z-50 flex flex-col shadow-2xl overflow-y-auto"
              >
                <div className="p-6">
                  <div className="flex justify-between items-center mb-8">
                    <h2 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">Settings</h2>
                    <button onClick={() => setIsMenuOpen(false)}><X className="text-gray-500 hover:text-gray-900 dark:hover:text-white" /></button>
                  </div>

                  {/* Mode Toggles */}
                  <div className="space-y-6 mb-8">
                    
                    {/* App Mode (Lesson vs Game) */}
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-xl border border-purple-100 dark:border-purple-800">
                       <label className="text-xs font-bold text-purple-600 dark:text-purple-400 uppercase tracking-widest mb-3 block">Activity Mode</label>
                       <div className="flex gap-2">
                          <button 
                            onClick={() => { setAppMode('presentation'); setIsMenuOpen(false); }}
                            className={`flex-1 py-2 rounded-lg flex items-center justify-center gap-2 text-sm font-medium transition-all ${appMode === 'presentation' ? 'bg-white dark:bg-neutral-800 text-purple-600 dark:text-purple-300 shadow-sm' : 'text-gray-500 hover:bg-white/50'}`}
                          >
                             <Monitor size={16} /> Lesson
                          </button>
                          <button 
                            onClick={() => { setAppMode('game'); setIsMenuOpen(false); }}
                            className={`flex-1 py-2 rounded-lg flex items-center justify-center gap-2 text-sm font-medium transition-all ${appMode === 'game' ? 'bg-purple-600 text-white shadow-sm' : 'text-gray-500 hover:bg-white/50'}`}
                          >
                             <Gamepad2 size={16} /> Kahoot
                          </button>
                       </div>
                    </div>

                    {/* Theme */}
                    <div className="bg-gray-100 dark:bg-neutral-800 p-4 rounded-xl">
                       <label className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3 block">Appearance</label>
                       <div className="flex gap-2">
                          <button 
                            onClick={() => setTheme('light')}
                            className={`flex-1 py-2 rounded-lg flex items-center justify-center gap-2 text-sm font-medium transition-all ${theme === 'light' ? 'bg-white text-black shadow-sm' : 'text-gray-500 hover:bg-gray-200 dark:hover:bg-neutral-700'}`}
                          >
                             <Sun size={16} /> Light
                          </button>
                          <button 
                            onClick={() => setTheme('dark')}
                            className={`flex-1 py-2 rounded-lg flex items-center justify-center gap-2 text-sm font-medium transition-all ${theme === 'dark' ? 'bg-neutral-700 text-white shadow-sm' : 'text-gray-500 hover:bg-gray-200 dark:hover:bg-neutral-700'}`}
                          >
                             <Moon size={16} /> Dark
                          </button>
                       </div>
                    </div>

                    {/* User Mode */}
                    <div className="bg-gray-100 dark:bg-neutral-800 p-4 rounded-xl">
                       <label className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3 block">User Role</label>
                       <div className="flex gap-2">
                          <button 
                            onClick={() => setUserMode('student')}
                            className={`flex-1 py-2 rounded-lg flex items-center justify-center gap-2 text-sm font-medium transition-all ${userMode === 'student' ? 'bg-white dark:bg-neutral-600 text-black dark:text-white shadow-sm' : 'text-gray-500 hover:bg-gray-200 dark:hover:bg-neutral-700'}`}
                          >
                             <Users size={16} /> Student
                          </button>
                          <button 
                            onClick={() => setUserMode('teacher')}
                            className={`flex-1 py-2 rounded-lg flex items-center justify-center gap-2 text-sm font-medium transition-all ${userMode === 'teacher' ? 'bg-red-500 text-white shadow-sm' : 'text-gray-500 hover:bg-gray-200 dark:hover:bg-neutral-700'}`}
                          >
                             <GraduationCap size={16} /> Teacher
                          </button>
                       </div>
                    </div>

                    {/* Personality */}
                    <div className="bg-gray-100 dark:bg-neutral-800 p-4 rounded-xl">
                       <label className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3 block">Class Vibe</label>
                       <div className="grid grid-cols-3 gap-1">
                          {(['introvert', 'ambivert', 'extrovert'] as PersonalityType[]).map(p => (
                            <button 
                              key={p}
                              onClick={() => setPersonality(p)}
                              className={`py-2 rounded-lg text-xs font-bold capitalize transition-all ${personality === p ? 'bg-teal-500 text-white shadow-sm' : 'text-gray-500 hover:bg-gray-200 dark:hover:bg-neutral-700'}`}
                            >
                               {p}
                            </button>
                          ))}
                       </div>
                    </div>

                  </div>

                  <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Lessons</h3>
                  <div className="space-y-2">
                    {LESSONS.map((lesson) => (
                      <button
                        key={lesson.id}
                        onClick={() => changeLesson(lesson.id)}
                        className={`w-full text-left p-3 rounded-xl flex items-center gap-4 transition-all ${currentLessonId === lesson.id ? 'bg-gray-100 dark:bg-white/10 border border-gray-200 dark:border-white/20' : 'hover:bg-gray-50 dark:hover:bg-white/5 border border-transparent'}`}
                      >
                          <span className="text-xl">{lesson.icon}</span>
                          <div>
                            <div className={`text-sm font-bold ${lesson.color}`}>{lesson.title.split(' ')[0]}</div>
                            <div className="text-xs opacity-70 text-gray-600 dark:text-gray-300">{lesson.title.substring(5)}</div>
                          </div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mt-auto p-6 border-t border-gray-200 dark:border-white/10 text-xs text-gray-400 dark:text-neutral-500 space-y-3">
                    <div className="flex gap-2 items-center"><Monitor size={14} /> Fullscreen Recommended</div>
                    <div className="flex gap-2 items-center"><BookOpen size={14} /> Teacher Notes: {userMode === 'teacher' ? 'ON' : 'OFF'}</div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
};

export default App;