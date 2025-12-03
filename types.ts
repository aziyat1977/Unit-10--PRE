import React from 'react';

export interface SlideDef {
  id: string;
  title: string;
  type: 'cover' | 'content' | 'interactive';
  component: React.FC<any>;
  lessonId: number;
}

export interface LessonConfig {
  id: number;
  title: string;
  color: string;
  gradient: string;
  icon: string;
}

export interface QuestionBank {
  [key: number]: string[];
}

// Personality Types
export type PersonalityType = 'introvert' | 'extrovert' | 'ambivert';

export interface PersonalityConfig {
  type: PersonalityType;
  label: string;
  description: string;
  color: string;
  icon: any; // Lucide icon component
  features: string[];
}

// Vocabulary Types
export interface VocabEntry {
  word: string;
  type: string; // n, v, adj, adv
  phonetic: string;
  ru: string;
  uz: string;
  example: string;
}

export interface VocabQuestion {
  q: string;
  a: string;
}

// Kahoot Types
export interface KahootAnswer {
  text: string;
  isCorrect: boolean;
  color: 'red' | 'blue' | 'yellow' | 'green';
  shape: 'triangle' | 'diamond' | 'circle' | 'square';
}

export interface KahootQuestion {
  id: number;
  text: string;
  timeLimit: number; // seconds
  image?: string;
  answers: KahootAnswer[];
  isDoublePoints?: boolean;
}

export interface KahootGame {
  title: string;
  questions: KahootQuestion[];
}