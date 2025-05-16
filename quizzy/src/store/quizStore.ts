import { create } from "zustand";


type QuizState = {
  currentQuestionIndex: number;
  score: number;
  answers: number[];
  setAnswer: (index: number, answer: number) => void;
  nextQuestion: () => void;
};

export const useQuizStore = create<QuizState>((set) => ({
  currentQuestionIndex: 0,
  score: 0,
  answers: [],
  setAnswer: (index, answer) =>
    set((state) => {
      const updatedAnswers = [...state.answers];
      updatedAnswers[index] = answer;
      return { answers: updatedAnswers };
    }),
  nextQuestion: () =>
    set((state) => ({
      currentQuestionIndex: state.currentQuestionIndex + 1,
    })),
}));