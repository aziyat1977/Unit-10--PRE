import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Menu, X, Monitor, BookOpen, Sun, Moon, GraduationCap, Brain, Users, Gamepad2, Book } from 'lucide-react';
import { LESSONS, QUESTIONS, PERSONALITY_TIPS, KAHOOT_GAME } from './constants';
import { Roulette } from './components/Roulette';
import { TongueMap, PassiveActiveToggle, PolitenessScale, WasteChart, TaskCard, FlowChart, GrammarBox, RoleplayCard, PassiveTenseTable, PassiveExerciseList, PassiveMFP, ReferenceWordsGuide, PASSIVE_TENSE_DATA, PassiveExampleView } from './components/SlideComponents';
import { VocabMaster } from './components/VocabMaster';
import { PersonalityHUD } from './components/PersonalityOverlay';
import { PersonalityType } from './types';
import { Kahoot } from './components/Kahoot';

// --- Types ---
type SlideComponent = React.FC<{ isActive: boolean }>;

interface SlideData {
  component: SlideComponent;
  title: string;
  tag: string;
  teacherNotes?: string[];
}

type Theme = 'dark' | 'light';
type UserMode = 'student' | 'teacher';

// --- Slide Content Factory ---
const getSlidesForLesson = (lessonId: number): SlideData[] => {
  const currentLesson = LESSONS.find(l => l.id === lessonId) || LESSONS[0];

  // SPECIAL CASE: Lesson 5 is the Vocab Master Tool
  if (lessonId === 5) {
    return [{
      tag: "Tool",
      title: "Vocab Master",
      teacherNotes: ["Use this for revision", "Drill pronunciation", "Random fire questions"],
      component: () => <VocabMaster />
    }];
  }

  const slides: SlideData[] = [];
  
  // 1. Cover Slide
  slides.push({
    tag: "Intro",
    title: "Cover",
    teacherNotes: ["Check attendance", "Warm up: Ask how everyone is feeling", "Set lesson objective (60 mins)"],
    component: () => (
      <div className={`h-full flex flex-col items-center justify-center text-center bg-gradient-to-br ${currentLesson.gradient} p-8 text-white`}>
        <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5 }}>
          <span className="text-8xl md:text-[12rem] mb-8 block drop-shadow-lg filter">{currentLesson.icon}</span>
          <h1 className="text-5xl md:text-9xl font-black mb-6 drop-shadow-xl">{currentLesson.title.split(' ')[0]}</h1>
          <h2 className="text-2xl md:text-6xl font-light mb-10">{currentLesson.title.substring(5)}</h2>
          <div className="bg-white/20 backdrop-blur-md px-8 py-3 rounded-full inline-block font-bold text-xl border border-white/30 shadow-lg">
            60 Minutes • Intermediate
          </div>
        </motion.div>
      </div>
    )
  });

  // Lesson Specific Slides
  if (lessonId === 1) { // 10.1 Taste
    slides.push({
      tag: "Map",
      title: "The Tongue Map",
      teacherNotes: ["Myth buster: The tongue map is actually a myth!", "But it helps categorize tastes.", "Ask students where they feel these tastes."],
      component: () => (
         <div className="h-full flex flex-col items-center justify-center p-8 bg-white dark:bg-neutral-900 transition-colors">
            <h2 className="text-4xl font-bold mb-12 text-gray-800 dark:text-white">Taste Receptors</h2>
            <TongueMap />
         </div>
      )
    });
    slides.push({
      tag: "Discuss",
      title: "Roulette",
      teacherNotes: ["Spin the wheel.", "Ask follow-up questions."],
      component: () => (
        <div className="h-full flex flex-col items-center justify-center p-8 bg-gray-50 dark:bg-neutral-900 transition-colors">
            <h2 className="text-4xl font-bold mb-12 text-gray-800 dark:text-white">Discussion Time</h2>
            <Roulette questions={QUESTIONS[1]} colorClass="bg-orange-500 hover:bg-orange-600" />
        </div>
      )
    });
  } else if (lessonId === 2) { // 10.2 Canned Dreams (Passive)
     slides.push({
      tag: "Concept",
      title: "Active vs Passive",
      teacherNotes: ["Toggle between Active and Passive.", "Highlight the object moving to subject position.", "Focus on 'Who did it?' vs 'What happened?'"],
      component: () => (
         <div className="h-full flex flex-col items-center justify-center p-8 bg-gray-100 dark:bg-neutral-900 transition-colors">
            <h2 className="text-4xl font-bold mb-12 text-gray-800 dark:text-white">Focus Shift</h2>
            <PassiveActiveToggle />
         </div>
      )
    });
    slides.push({
      tag: "Theory",
      title: "MFP: Meaning, Form, Pronunciation",
      teacherNotes: ["Break down the grammar.", "Drill the pronunciation of 'was' /wəz/.", "Explain V3 importance."],
      component: () => (
         <div className="h-full flex flex-col items-center justify-center p-8 bg-indigo-50 dark:bg-neutral-900 transition-colors overflow-y-auto">
             <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white mt-20 md:mt-0">The Grammar Logic</h2>
            <PassiveMFP />
         </div>
      )
    });
    // Add specific example slides
    PASSIVE_TENSE_DATA.forEach(tense => {
         slides.push({
             tag: "Ex: " + tense.label,
             title: tense.label,
             teacherNotes: ["Choral drill the active sentence.", "Choral drill the passive sentence.", "Check translation."],
             component: () => <PassiveExampleView tense={tense.label} example={tense.examples[0]} />
         });
    });

    slides.push({
      tag: "Reference",
      title: "Tense Table",
      teacherNotes: ["Overview of all tenses.", "Don't spend too long, just reference."],
      component: () => (
         <div className="h-full flex flex-col items-center justify-center p-8 bg-white dark:bg-neutral-900 transition-colors overflow-y-auto">
            <div className="my-auto">
                <PassiveTenseTable />
            </div>
         </div>
      )
    });
    slides.push({
      tag: "Practice",
      title: "Controlled Practice",
      teacherNotes: ["Students complete the sentences.", "Reveal answers one by one."],
      component: () => (
         <div className="h-full flex flex-col items-center justify-center p-8 bg-gray-50 dark:bg-neutral-900 transition-colors overflow-y-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white mt-20 md:mt-0">Rewrite in Passive Voice</h2>
            <PassiveExerciseList />
         </div>
      )
    });
     slides.push({
      tag: "Discuss",
      title: "Roulette",
      teacherNotes: ["Discussion time."],
      component: () => (
        <div className="h-full flex flex-col items-center justify-center p-8 bg-gray-50 dark:bg-neutral-900 transition-colors">
            <h2 className="text-4xl font-bold mb-12 text-gray-800 dark:text-white">Discussion Time</h2>
            <Roulette questions={QUESTIONS[2]} colorClass="bg-purple-500 hover:bg-purple-600" />
        </div>
      )
    });
  } else if (lessonId === 3) { // 10.3 Food Waste
    slides.push({
      tag: "Stats",
      title: "The Reality",
      teacherNotes: ["Shock them with the statistic.", "Ask: Why do we waste so much?"],
      component: () => (
         <div className="h-full flex flex-col items-center justify-center p-8 bg-white dark:bg-neutral-900 transition-colors">
            <h2 className="text-4xl font-bold mb-12 text-gray-800 dark:text-white">Global Food Production</h2>
            <WasteChart />
         </div>
      )
    });
    slides.push({
      tag: "Process",
      title: "Food Journey",
      teacherNotes: ["Where does waste happen?", "Transport? Supermarkets? Home?"],
      component: () => (
         <div className="h-full flex flex-col items-center justify-center p-8 bg-gray-50 dark:bg-neutral-900 transition-colors">
            <h2 className="text-4xl font-bold mb-12 text-gray-800 dark:text-white">The Journey</h2>
            <FlowChart />
         </div>
      )
    });
    slides.push({
      tag: "Task",
      title: "Save the Food",
      teacherNotes: ["Group work.", "Create a plan.", "Present ideas."],
      component: () => (
         <div className="h-full flex flex-col items-center justify-center p-8 bg-white dark:bg-neutral-900 transition-colors">
             <TaskCard 
                title="How to Reduce Waste" 
                color="#14b8a6"
                icon={<BookOpen size={32}/>}
                steps={[
                    "Plan your meals for the week.",
                    "Check the fridge before shopping.",
                    "Understand 'Best Before' vs 'Use By'.",
                    "Freeze leftovers immediately.",
                    "Compost organic waste."
                ]}
             />
         </div>
      )
    });
    slides.push({
      tag: "Discuss",
      title: "Roulette",
      teacherNotes: ["Discussion time."],
      component: () => (
        <div className="h-full flex flex-col items-center justify-center p-8 bg-gray-50 dark:bg-neutral-900 transition-colors">
            <h2 className="text-4xl font-bold mb-12 text-gray-800 dark:text-white">Discussion Time</h2>
            <Roulette questions={QUESTIONS[3]} colorClass="bg-teal-500 hover:bg-teal-600" />
        </div>
      )
    });
  } else if (lessonId === 4) { // 10.4 Restaurant
     slides.push({
      tag: "Soft Skills",
      title: "Politeness Scale",
      teacherNotes: ["Direct vs Indirect.", "Intonation matters."],
      component: () => (
         <div className="h-full flex flex-col items-center justify-center p-8 bg-white dark:bg-neutral-900 transition-colors">
            <h2 className="text-4xl font-bold mb-12 text-gray-800 dark:text-white">Complaining Politely</h2>
            <PolitenessScale />
         </div>
      )
    });
    slides.push({
      tag: "Reference",
      title: "Reference Words",
      teacherNotes: ["This/That/These/Those.", "One/Ones."],
      component: () => (
         <div className="h-full flex flex-col items-center justify-center p-8 bg-gray-50 dark:bg-neutral-900 transition-colors overflow-y-auto">
             <div className="mt-20 md:mt-0">
                <ReferenceWordsGuide />
             </div>
         </div>
      )
    });
    slides.push({
      tag: "Roleplay",
      title: "The Complaint",
      teacherNotes: ["Pairs.", "One student is customer, one is waiter.", "Problem: Cold Soup."],
      component: () => (
         <div className="h-full flex flex-col items-center justify-center p-8 bg-white dark:bg-neutral-900 transition-colors">
             <h2 className="text-4xl font-bold mb-12 text-gray-800 dark:text-white">Roleplay Challenge</h2>
             <div className="flex flex-col md:flex-row gap-8 w-full max-w-5xl">
                <RoleplayCard 
                    role="Customer" 
                    color="border-red-500" 
                    icon={<Users className="text-red-500"/>}
                    traits={["Your soup is cold.", "You are hungry.", "You want a new soup.", "Be polite but firm."]}
                />
                <RoleplayCard 
                    role="Waiter" 
                    color="border-blue-500" 
                    icon={<Users className="text-blue-500"/>}
                    traits={["The restaurant is busy.", "Apologize sincerely.", "Offer a free dessert.", "Resolve the issue."]}
                />
             </div>
         </div>
      )
    });
     slides.push({
      tag: "Discuss",
      title: "Roulette",
      teacherNotes: ["Discussion time."],
      component: () => (
        <div className="h-full flex flex-col items-center justify-center p-8 bg-gray-50 dark:bg-neutral-900 transition-colors">
            <h2 className="text-4xl font-bold mb-12 text-gray-800 dark:text-white">Discussion Time</h2>
            <Roulette questions={QUESTIONS[4]} colorClass="bg-red-500 hover:bg-red-600" />
        </div>
      )
    });
  }

  return slides;
};

// --- Main App ---

export default function App() {
  const [activeLessonId, setActiveLessonId] = useState(1);
  const [slideIndex, setSlideIndex] = useState(0);
  const [theme, setTheme] = useState<Theme>('dark');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [mode, setMode] = useState<UserMode>('teacher');
  const [personality, setPersonality] = useState<PersonalityType>('introvert');
  const [gameActive, setGameActive] = useState(false);

  // Theme Handling
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  // Slides Memoization
  const slides = useMemo(() => getSlidesForLesson(activeLessonId), [activeLessonId]);
  
  // Bounds check
  useEffect(() => {
    if (slideIndex >= slides.length) setSlideIndex(0);
  }, [slides, slideIndex]);

  const CurrentSlide = slides[slideIndex]?.component || (() => <div>Slide Not Found</div>);

  // Keyboard Navigation
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (gameActive) return; // Disable slide nav during game
    if (e.key === 'ArrowRight') {
        setSlideIndex(prev => Math.min(prev + 1, slides.length - 1));
    } else if (e.key === 'ArrowLeft') {
        setSlideIndex(prev => Math.max(prev - 1, 0));
    }
  }, [slides.length, gameActive]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const togglePersonality = () => {
    const types: PersonalityType[] = ['introvert', 'ambivert', 'extrovert'];
    const next = types[(types.indexOf(personality) + 1) % types.length];
    setPersonality(next);
  };

  return (
    <div className={`h-screen w-screen overflow-hidden bg-white dark:bg-[#0f0f11] text-gray-900 dark:text-white transition-colors duration-500 flex font-sans`}>
      
      {/* --- Sidebar Navigation --- */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              onClick={() => setSidebarOpen(false)}
            />
            <motion.div 
              initial={{ x: -300 }} animate={{ x: 0 }} exit={{ x: -300 }}
              className="fixed left-0 top-0 h-full w-72 bg-gray-100 dark:bg-[#18181b] shadow-2xl z-50 p-6 flex flex-col border-r border-gray-200 dark:border-white/5"
            >
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-2xl font-black tracking-tight">CELTA<span className="text-purple-500">Vibe</span></h2>
                    <button onClick={() => setSidebarOpen(false)} className="p-2 hover:bg-gray-200 dark:hover:bg-white/10 rounded-full">
                        <X size={20} />
                    </button>
                </div>

                <div className="space-y-2 flex-1 overflow-y-auto">
                    {LESSONS.map(lesson => (
                        <button
                            key={lesson.id}
                            onClick={() => {
                                setActiveLessonId(lesson.id);
                                setSlideIndex(0);
                                setSidebarOpen(false);
                            }}
                            className={`w-full text-left p-4 rounded-xl transition-all flex items-center gap-3 ${activeLessonId === lesson.id ? 'bg-white dark:bg-white/10 shadow-lg font-bold' : 'hover:bg-gray-200 dark:hover:bg-white/5 opacity-70 hover:opacity-100'}`}
                        >
                            <span className="text-2xl">{lesson.icon}</span>
                            <div className="leading-tight">
                                <div className="text-xs uppercase tracking-wider opacity-50">Unit {lesson.id < 5 ? `10.${lesson.id}` : 'Tool'}</div>
                                <div>{lesson.title.split(' ').slice(1).join(' ')}</div>
                            </div>
                        </button>
                    ))}
                </div>

                <div className="pt-6 border-t border-gray-300 dark:border-white/10 space-y-4">
                    <button 
                        onClick={() => setGameActive(true)}
                        className="w-full py-3 bg-purple-600 hover:bg-purple-500 text-white rounded-xl font-bold shadow-lg flex items-center justify-center gap-2"
                    >
                        <Gamepad2 size={20}/> Play Kahoot!
                    </button>
                </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* --- Main Content --- */}
      <div className="flex-1 flex flex-col h-full relative">
          
          {/* Top Bar */}
          <header className="h-16 px-4 md:px-6 flex items-center justify-between z-20 absolute top-0 w-full pointer-events-none">
              <div className="pointer-events-auto flex items-center gap-4">
                   <button onClick={() => setSidebarOpen(true)} className="p-2 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 shadow-sm border border-white/10 text-gray-800 dark:text-white">
                       <Menu size={20} />
                   </button>
                   <div className="hidden md:block px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full border border-white/10 text-xs font-bold uppercase tracking-widest text-gray-800 dark:text-white/80">
                        {LESSONS.find(l => l.id === activeLessonId)?.title}
                   </div>
              </div>

              <div className="pointer-events-auto flex items-center gap-3">
                   {/* Personality Toggle */}
                   <button 
                      onClick={togglePersonality}
                      className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 border border-white/10 transition-colors"
                      title={`Current Mode: ${personality}`}
                   >
                        {personality === 'introvert' && <Book size={16} className="text-indigo-400"/>}
                        {personality === 'extrovert' && <Users size={16} className="text-orange-400"/>}
                        {personality === 'ambivert' && <Brain size={16} className="text-teal-400"/>}
                   </button>

                   {/* Mode Toggle */}
                   <button 
                      onClick={() => setMode(m => m === 'teacher' ? 'student' : 'teacher')}
                      className={`p-2 rounded-full backdrop-blur-md border border-white/10 shadow-sm transition-colors ${mode === 'teacher' ? 'bg-purple-500 text-white' : 'bg-white/10 text-gray-800 dark:text-white hover:bg-white/20'}`}
                      title={mode === 'teacher' ? 'Teacher Mode' : 'Student Mode'}
                   >
                       {mode === 'teacher' ? <GraduationCap size={20} /> : <Monitor size={20} />}
                   </button>

                   {/* Theme Toggle */}
                   <button 
                      onClick={() => setTheme(t => t === 'light' ? 'dark' : 'light')}
                      className="p-2 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 shadow-sm border border-white/10 text-gray-800 dark:text-white transition-colors"
                   >
                       {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                   </button>
              </div>
          </header>

          {/* Slide Renderer */}
          <main className="flex-1 overflow-hidden relative">
              <AnimatePresence mode="wait">
                  <motion.div
                    key={`${activeLessonId}-${slideIndex}`}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.02 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="w-full h-full"
                  >
                      <CurrentSlide isActive={true} />
                  </motion.div>
              </AnimatePresence>

              {/* Navigation Arrows (Hover) */}
              <div className="absolute inset-y-0 left-0 w-24 flex items-center justify-start pl-4 opacity-0 hover:opacity-100 transition-opacity z-10">
                   <button 
                    onClick={() => setSlideIndex(prev => Math.max(prev - 1, 0))}
                    disabled={slideIndex === 0}
                    className="p-3 bg-black/50 hover:bg-black/70 text-white rounded-full backdrop-blur disabled:opacity-0 transition-all transform hover:scale-110"
                   >
                       <ChevronLeft size={32} />
                   </button>
              </div>
              <div className="absolute inset-y-0 right-0 w-24 flex items-center justify-end pr-4 opacity-0 hover:opacity-100 transition-opacity z-10">
                   <button 
                    onClick={() => setSlideIndex(prev => Math.min(prev + 1, slides.length - 1))}
                    disabled={slideIndex === slides.length - 1}
                    className="p-3 bg-black/50 hover:bg-black/70 text-white rounded-full backdrop-blur disabled:opacity-0 transition-all transform hover:scale-110"
                   >
                       <ChevronRight size={32} />
                   </button>
              </div>

              {/* Slide Progress Dots */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
                  {slides.map((_, idx) => (
                      <button 
                        key={idx}
                        onClick={() => setSlideIndex(idx)}
                        className={`w-2 h-2 rounded-full transition-all ${idx === slideIndex ? 'bg-purple-500 w-6' : 'bg-gray-400/50 hover:bg-gray-400'}`}
                      />
                  ))}
              </div>
          </main>

          {/* Teacher Notes Drawer */}
          <AnimatePresence>
            {mode === 'teacher' && slides[slideIndex]?.teacherNotes && (
                 <motion.div 
                    initial={{ y: 100 }} animate={{ y: 0 }} exit={{ y: 100 }}
                    className="absolute bottom-0 left-0 w-full bg-yellow-100 dark:bg-yellow-900/90 border-t-4 border-yellow-400 p-4 z-20 shadow-negative"
                 >
                     <div className="max-w-4xl mx-auto flex items-start gap-4">
                         <div className="p-2 bg-yellow-400 text-yellow-900 rounded-lg shrink-0">
                             <GraduationCap size={24} />
                         </div>
                         <div>
                             <h4 className="font-bold text-yellow-800 dark:text-yellow-200 text-sm uppercase tracking-wide mb-1">Teacher Notes</h4>
                             <ul className="list-disc list-inside text-yellow-900 dark:text-yellow-100 font-medium">
                                 {slides[slideIndex].teacherNotes?.map((note, i) => (
                                     <li key={i}>{note}</li>
                                 ))}
                             </ul>
                             <div className="mt-2 text-xs font-mono text-yellow-700 dark:text-yellow-300">
                                 Tip: {PERSONALITY_TIPS[personality]}
                             </div>
                         </div>
                     </div>
                 </motion.div>
            )}
          </AnimatePresence>
      </div>

      {/* Personality Overlays */}
      <PersonalityHUD personality={personality} />

      {/* Kahoot Overlay */}
      <AnimatePresence>
          {gameActive && (
              <motion.div 
                initial={{ y: '100%' }} animate={{ y: 0 }} exit={{ y: '100%' }} transition={{ type: 'spring', damping: 25 }}
                className="fixed inset-0 z-[60]"
              >
                  <Kahoot game={KAHOOT_GAME} onExit={() => setGameActive(false)} />
              </motion.div>
          )}
      </AnimatePresence>

    </div>
  );
}