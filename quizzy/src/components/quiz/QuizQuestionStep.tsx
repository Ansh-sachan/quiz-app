import { motion } from "framer-motion";
import QuizQuestionCard from "./QuizQuestionCard";

interface QuizQuestionStepProps {
  id: number;
  question: {
    question: string;
    options: string[];
    correctAnswer: string;
  };
  selectedOption: string | null;
  onSelect: (option: string) => void;
  onNext: () => void;
  onSubmit: () => void;
  isLastQuestion: boolean;
  img: string;
}

export default function QuizQuestionStep({
  id,
  question,
  selectedOption,
  onSelect,
  onNext,
  onSubmit,
  isLastQuestion,
  img,
}: QuizQuestionStepProps) {
  return (
    <motion.div
      key={id}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.4 }}
      className='space-y-6'
    >
      <QuizQuestionCard
        id={id}
        question={question.question}
        options={question.options}
        selectedOption={selectedOption}
        onSelect={onSelect}
        img={img}
      />

      <div className='flex justify-end'>
        {!isLastQuestion ? (
          <button
            onClick={onNext}
            className='mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition'
          >
            Next
          </button>
        ) : (
          <button
            onClick={onSubmit}
            className='mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition'
          >
            Submit
          </button>
        )}
      </div>
    </motion.div>
  );
}
