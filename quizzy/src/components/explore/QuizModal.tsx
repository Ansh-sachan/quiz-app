import { motion } from "framer-motion";
import { useEffect } from "react";
import { Settings } from "./Settings";

interface QuizModalProps {
  quiz: {
    id: number;
    title: string;
    description: string;
    difficulty: string;
    tags: string[];
  };
  onClose: () => void;
  onStart: (id: number) => void;
}

export default function QuizModal({ quiz, onClose, onStart }: QuizModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <motion.div
        drag
        dragConstraints={{ top: -100, bottom: 100, left: -100, right: 100 }}
        onClick={e => e.stopPropagation()}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-2xl mx-4 relative"
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-4 text-gray-500 hover:text-gray-700 text-xl"
        >
          &times;
        </button>
        <h2 className="text-3xl font-bold text-blue-600 mb-4">{quiz.title}</h2>
        <p className="text-gray-700 mb-3">{quiz.description}</p>
        <div className="text-sm text-gray-500 mb-4">Difficulty: {quiz.difficulty}</div>
        <div className="flex flex-wrap gap-2 mb-6">
          {quiz.tags.map(tag => (
            <span key={tag} className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <button
          onClick={() => onStart(quiz.id)}
          className="bg-blue-600 hover:bg-blue-700 text-white w-full py-2 rounded text-lg font-semibold"
        >
          Start Quiz
        </button>
      <Settings />
      </motion.div>
    </motion.div>
  );
}
