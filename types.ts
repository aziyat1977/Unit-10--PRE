import React from 'react';

export interface SlideDef {
  id: string;
  title: string;
  type: 'cover' | 'content' | 'interactive' | 'game';
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

// Kahoot Mode Types
export interface KahootAnswer {
  text: string;
  isCorrect: boolean;
  color: 'red' | 'blue' | 'yellow' | 'green';
  shape: 'triangle' | 'diamond' | 'circle' | 'square';
}

export interface KahootQuestion {
  id: number;
  text: string;
  image?: string; // Optional image URL
  answers: KahootAnswer[];
  isDoublePoints: boolean;
  timeLimit: number;
}

export interface KahootGame {
  id: string;
  title: string;
  description: string;
  questions: KahootQuestion[];
}

export interface GameLibrary {
  [lessonId: number]: KahootGame[];
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