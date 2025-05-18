import { create } from "zustand";

type QuizState = {
  currentQuestionIndex: number;
  score: number;
  answers: string[]; // Assuming answer is represented by index of selected option
  difficulty: "easy" | "medium" | "hard";
  setAnswer: (questionIndex: number, answerIndex: number) => void;
  nextQuestion: () => void;
  prevQuestion: () => void;
  goToQuestion: (index: number) => void;
  increaseScore: () => void
  resetQuiz: () => void;
  setDifficulty: (difficulty: "easy" | "medium" | "hard") => void
};

export const useQuizStore = create<QuizState>((set) => ({
  currentQuestionIndex: 0,
  score: 0,
  answers: [],
  difficulty: "easy",
  setAnswer: (questionIndex, answer) =>
    set((state) => {
      const updatedAnswers = [...state.answers];
      updatedAnswers[questionIndex] = answer;
      return { answers: updatedAnswers };
    }),
  nextQuestion: () =>
    set((state) => ({
      currentQuestionIndex: state.currentQuestionIndex + 1,
    })),
  prevQuestion: () =>
    set((state) => ({
      currentQuestionIndex: Math.max(0, state.currentQuestionIndex - 1),
    })),
  goToQuestion: (index) => set({ currentQuestionIndex: index }),
  resetQuiz: () => set({ currentQuestionIndex: 0, score: 0, answers: [] }),
  increaseScore : () => set((state) => ({ score: state.score + 1 })),
  setDifficulty: (difficulty) => set({ difficulty }),
}));
