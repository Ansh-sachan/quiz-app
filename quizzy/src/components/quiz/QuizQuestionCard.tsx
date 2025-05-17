import { motion } from "framer-motion";
import { useSpeech } from "../../hooks/useSpeech";
import { Volume2 } from "lucide-react";
import { useQuizStore } from "../../store/quizStore";

interface QuizQuestionCardProps {
  id: number;
  question: string;
  options: string[];
  onSelect: (option: string) => void;
  selectedOption: string | null;
}

export default function QuizQuestionCard({
  id,
  question,
  options,
  onSelect,
  selectedOption,
}: QuizQuestionCardProps) {
  const { speak } = useSpeech();
  const { currentQuestionIndex: index } = useQuizStore();

  const handleSpeak = () => {
    const fullText = `Question ${
      index + 1
    }: ${question}. Options are: ${options.join(", ")}`;
    speak(fullText);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className='bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-500 mb-6'
    >
      <div className='flex items-center justify-between mb-4'>
        <p className='text-lg font-semibold text-gray-800'>
          Q{index + 1}. {question}
        </p>
        <button
          onClick={handleSpeak}
          className='text-blue-500 hover:text-blue-700'
          title='Read aloud'
        >
          <Volume2 size={20} />
        </button>
      </div>

      <ul className='space-y-2'>
        {options.map((option, i) => {
          const isSelected = selectedOption === option;
          return (
            <li
              key={i}
              onClick={() => onSelect(option)}
              className={`cursor-pointer px-4 py-2 rounded-md transition border ${
                isSelected
                  ? "bg-blue-100 text-blue-700 border-blue-400 font-medium"
                  : "bg-gray-100 hover:bg-blue-50 border-transparent"
              }`}
            >
              {option}
            </li>
          );
        })}
      </ul>
    </motion.div>
  );
}
