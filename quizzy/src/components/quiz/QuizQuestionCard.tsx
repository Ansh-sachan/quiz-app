import { motion } from "framer-motion";

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
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-500 mb-6"
    >
      <p className="text-lg font-semibold text-gray-800 mb-4">
        Q{id}. {question}
      </p>
      <ul className="space-y-2">
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
