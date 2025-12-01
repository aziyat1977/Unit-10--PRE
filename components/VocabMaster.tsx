import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, ChevronRight, ChevronLeft, RefreshCw, Eye, EyeOff } from 'lucide-react';
import { VOCAB_DATA, VOCAB_QUESTIONS } from '../constants';
import { VocabEntry } from '../types';

export const VocabMaster = () => {
    const [mode, setMode] = useState<'list' | 'practice'>('list');
    const [showRU, setShowRU] = useState(false);
    const [showUZ, setShowUZ] = useState(false);
    const [filter, setFilter] = useState('');
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [isAnswerVisible, setIsAnswerVisible] = useState(false);

    const speak = (text: string) => {
        window.speechSynthesis.cancel();
        // Remove markdown stars for speech
        const cleanText = text.replace(/\*\*/g, '');
        const utterance = new SpeechSynthesisUtterance(cleanText);
        utterance.lang = 'en-GB';
        window.speechSynthesis.speak(utterance);
    };

    const filteredData = VOCAB_DATA.filter(item => 
        item.word.toLowerCase().includes(filter.toLowerCase())
    );

    const resetAndNavigate = (newIndex: number) => {
        setIsAnswerVisible(false);
        setCurrentQuestionIndex(newIndex);
    };

    const nextQ = () => resetAndNavigate((currentQuestionIndex + 1) % VOCAB_QUESTIONS.length);
    const prevQ = () => resetAndNavigate((currentQuestionIndex - 1 + VOCAB_QUESTIONS.length) % VOCAB_QUESTIONS.length);
    const randomQ = () => resetAndNavigate(Math.floor(Math.random() * VOCAB_QUESTIONS.length));

    // Helper to render markdown-like bold text
    const RichText = ({ text, className }: { text: string, className?: string }) => {
        const parts = text.split(/(\*\*.*?\*\*)/g);
        return (
            <p className={className}>
                {parts.map((part, i) => {
                    if (part.startsWith('**') && part.endsWith('**')) {
                        return <strong key={i} className="text-indigo-600 dark:text-indigo-400 font-black">{part.slice(2, -2)}</strong>;
                    }
                    return <span key={i}>{part}</span>;
                })}
            </p>
        );
    };

    return (
        <div className="h-full flex flex-col bg-gray-50 dark:bg-neutral-900 transition-colors">
            
            {/* Header / Tabs */}
            <div className="p-6 bg-white dark:bg-neutral-800 shadow-md z-10">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 max-w-6xl mx-auto">
                    <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-blue-600">
                        Vocab Master
                    </h2>
                    
                    <div className="flex bg-gray-100 dark:bg-neutral-700 p-1 rounded-lg">
                        <button 
                            onClick={() => setMode('list')}
                            className={`px-6 py-2 rounded-md font-bold text-sm transition-all ${mode === 'list' ? 'bg-white dark:bg-neutral-600 text-indigo-600 dark:text-white shadow' : 'text-gray-500 hover:text-gray-900 dark:hover:text-white'}`}
                        >
                            Wordlist
                        </button>
                        <button 
                            onClick={() => setMode('practice')}
                            className={`px-6 py-2 rounded-md font-bold text-sm transition-all ${mode === 'practice' ? 'bg-white dark:bg-neutral-600 text-indigo-600 dark:text-white shadow' : 'text-gray-500 hover:text-gray-900 dark:hover:text-white'}`}
                        >
                            Speaking Questions (100)
                        </button>
                    </div>
                </div>
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-hidden relative">
                
                {mode === 'list' && (
                    <div className="h-full overflow-y-auto p-4 md:p-8">
                        <div className="max-w-6xl mx-auto">
                            
                            {/* Controls */}
                            <div className="mb-8 flex flex-wrap gap-4 items-center justify-between sticky top-0 bg-gray-50 dark:bg-neutral-900 p-4 z-10 border-b border-gray-200 dark:border-neutral-700 shadow-sm">
                                <input 
                                    type="text" 
                                    placeholder="Search word..." 
                                    value={filter}
                                    onChange={(e) => setFilter(e.target.value)}
                                    className="px-4 py-2 rounded-lg border border-gray-300 dark:border-neutral-600 bg-white dark:bg-neutral-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none w-full md:w-64"
                                />
                                <div className="flex gap-4">
                                    <button onClick={() => setShowRU(!showRU)} className={`flex items-center gap-2 px-4 py-2 rounded-lg font-bold border transition-colors ${showRU ? 'bg-blue-100 text-blue-700 border-blue-300' : 'bg-white dark:bg-neutral-800 text-gray-500 border-gray-300'}`}>
                                        {showRU ? <Eye size={16}/> : <EyeOff size={16}/>} RU
                                    </button>
                                    <button onClick={() => setShowUZ(!showUZ)} className={`flex items-center gap-2 px-4 py-2 rounded-lg font-bold border transition-colors ${showUZ ? 'bg-green-100 text-green-700 border-green-300' : 'bg-white dark:bg-neutral-800 text-gray-500 border-gray-300'}`}>
                                        {showUZ ? <Eye size={16}/> : <EyeOff size={16}/>} UZ
                                    </button>
                                </div>
                            </div>

                            {/* Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-20">
                                {filteredData.map((item, idx) => (
                                    <motion.div 
                                        key={item.word}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: idx * 0.05 }}
                                        className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg border border-gray-100 dark:border-neutral-700 overflow-hidden hover:shadow-xl transition-shadow group"
                                    >
                                        <div className="p-5">
                                            <div className="flex justify-between items-start mb-2">
                                                <div>
                                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white capitalize">{item.word}</h3>
                                                    <div className="text-sm text-gray-500 dark:text-gray-400 font-mono flex items-center gap-2">
                                                        <span className="italic">{item.type}.</span>
                                                        <span className="opacity-70">{item.phonetic}</span>
                                                    </div>
                                                </div>
                                                <button 
                                                    onClick={() => speak(item.word)}
                                                    className="p-2 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 dark:hover:bg-indigo-900 transition-colors"
                                                >
                                                    <Volume2 size={20} />
                                                </button>
                                            </div>
                                            
                                            <div className="space-y-3 mt-4">
                                                <div className={`p-2 rounded bg-blue-50 dark:bg-blue-900/20 text-blue-800 dark:text-blue-200 text-sm transition-all duration-300 ${showRU ? 'opacity-100' : 'opacity-0 h-0 p-0 overflow-hidden'}`}>
                                                    <span className="font-bold mr-2">RU:</span> {item.ru}
                                                </div>
                                                <div className={`p-2 rounded bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-200 text-sm transition-all duration-300 ${showUZ ? 'opacity-100' : 'opacity-0 h-0 p-0 overflow-hidden'}`}>
                                                    <span className="font-bold mr-2">UZ:</span> {item.uz}
                                                </div>
                                                <div className="text-sm text-gray-600 dark:text-gray-300 italic border-t border-gray-100 dark:border-neutral-700 pt-2 mt-2">
                                                    "{item.example}"
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {mode === 'practice' && (
                    <div className="h-full flex items-center justify-center p-8 overflow-y-auto">
                        <div className="max-w-4xl w-full">
                            <motion.div 
                                key={currentQuestionIndex}
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                className="bg-white dark:bg-neutral-800 rounded-3xl shadow-2xl p-8 md:p-12 text-center border-t-8 border-indigo-500 relative"
                            >
                                <div className="absolute top-4 right-6 text-6xl opacity-10 font-black text-gray-400">
                                    {currentQuestionIndex + 1}
                                </div>
                                
                                <button 
                                    onClick={() => speak(VOCAB_QUESTIONS[currentQuestionIndex].q)}
                                    className="mx-auto w-16 h-16 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 flex items-center justify-center hover:scale-110 transition-transform mb-8 shadow-md"
                                    title="Listen to Question"
                                >
                                    <Volume2 size={32} />
                                </button>

                                <div className="mb-12">
                                    <h3 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white leading-tight mb-8">
                                        <RichText text={VOCAB_QUESTIONS[currentQuestionIndex].q} />
                                    </h3>
                                    
                                    <div className="relative min-h-[100px]">
                                        <AnimatePresence mode="wait">
                                            {isAnswerVisible ? (
                                                <motion.div
                                                    key="answer"
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: -10 }}
                                                    className="bg-indigo-50 dark:bg-neutral-900/50 p-6 rounded-xl border border-indigo-100 dark:border-neutral-700 text-left"
                                                >
                                                    <div className="flex justify-between items-start mb-2">
                                                        <span className="text-xs font-bold uppercase tracking-widest text-indigo-500 mb-2 block">Suggested Answer</span>
                                                        <button 
                                                            onClick={() => speak(VOCAB_QUESTIONS[currentQuestionIndex].a)} 
                                                            className="p-1 hover:bg-black/10 rounded-full"
                                                            title="Listen to Answer"
                                                        >
                                                            <Volume2 size={16} />
                                                        </button>
                                                    </div>
                                                    <RichText text={VOCAB_QUESTIONS[currentQuestionIndex].a} className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed" />
                                                </motion.div>
                                            ) : (
                                                <motion.button
                                                    key="reveal-btn"
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    exit={{ opacity: 0 }}
                                                    onClick={() => setIsAnswerVisible(true)}
                                                    className="px-6 py-2 bg-gray-100 dark:bg-neutral-700 hover:bg-gray-200 dark:hover:bg-neutral-600 rounded-full text-sm font-bold text-gray-600 dark:text-gray-300 transition-colors"
                                                >
                                                    Show Answer
                                                </motion.button>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </div>
                                
                                <div className="flex justify-center gap-6 mt-8">
                                    <button 
                                        onClick={prevQ}
                                        className="p-4 rounded-full bg-gray-100 dark:bg-neutral-700 hover:bg-gray-200 dark:hover:bg-neutral-600 text-gray-800 dark:text-white transition-colors"
                                    >
                                        <ChevronLeft size={32} />
                                    </button>
                                    <button 
                                        onClick={randomQ}
                                        className="px-8 py-4 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xl flex items-center gap-3 shadow-lg transition-transform hover:scale-105"
                                    >
                                        <RefreshCw size={24} /> Random
                                    </button>
                                    <button 
                                        onClick={nextQ}
                                        className="p-4 rounded-full bg-gray-100 dark:bg-neutral-700 hover:bg-gray-200 dark:hover:bg-neutral-600 text-gray-800 dark:text-white transition-colors"
                                    >
                                        <ChevronRight size={32} />
                                    </button>
                                </div>
                            </motion.div>
                            <div className="text-center mt-8 text-gray-500 dark:text-gray-400 font-mono pb-8">
                                Speaking Question {currentQuestionIndex + 1} of {VOCAB_QUESTIONS.length}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};