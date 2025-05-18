// types.ts
export type Question = {
  id: number;
  question: string;
  options: string[];
  answer: string; // the correct answer
  difficulty: string;
  explanation: string;
};

export type Quiz = {
  id: number;
  title: string;
  description: string;
  img: string;
  tags: string[];
  difficulty: string;
  questions: Question[];
};