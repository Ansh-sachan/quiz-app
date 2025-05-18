import { motion } from "framer-motion";
import { useEffect } from "react";
import { X } from "lucide-react"; // Lucide close icon
import { Settings } from "./Settings";
import { useQuizStore } from "../../store/quizStore";

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
  const { setDifficulty, difficulty } = useQuizStore();

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
      className='fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 backdrop-blur-sm'
      onClick={onClose}
    >
      <motion.div
        drag
        dragConstraints={{ top: -150, bottom: 150, left: -150, right: 150 }}
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.6, opacity: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
        className='bg-white p-8 rounded-2xl shadow-2xl w-full max-w-3xl mx-4 relative'
      >
        {/* Close Button */}
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          onClick={onClose}
          aria-label='Close Modal'
          className='absolute top-4 right-4 text-blue-500 hover:text-blue-700'
        >
          <X size={28} strokeWidth={2.5} />
        </motion.button>

        <div className='flex flex-col md:flex-row gap-8'>
          {/* Quiz Info */}
          <div className='flex-1'>
            <motion.h2
              className='text-4xl font-extrabold text-blue-500 mb-4'
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              {quiz.title}
            </motion.h2>
            <p className='text-gray-700 mb-4 leading-relaxed'>
              {quiz.description}
            </p>
            <div className='flex flex-wrap gap-2 mb-6'>
              {quiz.tags.map((tag) => (
                <motion.span
                  key={tag}
                  className='bg-blue-100 text-blue-600 text-sm px-3 py-1 rounded-full font-medium'
                  whileHover={{ scale: 1.1 }}
                >
                  #{tag}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Difficulty Selection */}
          <div className='flex-1 space-y-4'>
            <h3 className='text-lg font-semibold text-blue-500'>
              Select Difficulty
            </h3>
            <motion.select
              value={difficulty}
              onChange={(e) =>
                setDifficulty(e.target.value as "easy" | "medium" | "hard")
              }
              className='w-full p-3 rounded-lg border border-blue-300 focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm bg-white text-gray-800'
              whileFocus={{ scale: 1.02 }}
            >
              <option value='easy'>🟢 Easy</option>
              <option value='medium'>🟠 Medium</option>
              <option value='hard'>🔴 Hard</option>
            </motion.select>
          </div>
        </div>

        {/* Start Button */}
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => onStart(quiz.id)}
          className='mt-8 w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-xl text-lg font-semibold shadow-md transition duration-300'
        >
          🚀 Start Quiz
        </motion.button>

        {/* Optional Settings */}
        <div className='mt-4'>
          <Settings />
        </div>
      </motion.div>
    </motion.div>
  );
}
