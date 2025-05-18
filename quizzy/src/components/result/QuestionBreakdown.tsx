import { motion } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";
import { useState } from "react";

interface Question {
  id: number;
  question: string;
  correctAnswer: string;
  explanation?: string;
}

interface Props {
  questions: Question[];
  answers: string[];
}

export const QuestionBreakdown = ({ questions, answers }: Props) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.div
      initial='hidden'
      animate='visible'
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { staggerChildren: 0.08 },
        },
      }}
      className='space-y-6 max-w-4xl mx-auto px-4 md:px-6 lg:px-8'
    >
      {questions.map((q, i) => {
        const userAnswer = answers[i];
        const isCorrect = userAnswer === q.correctAnswer;
        const isOpen = openIndex === i;

        return (
          <motion.div
            key={q.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: i * 0.08 }}
            className={`rounded-xl border-2 shadow-lg transition-all cursor-pointer ${
              isCorrect && userAnswer
                ? "border-green-600 bg-green-100 hover:bg-green-200"
                : "border-red-600 bg-red-100 hover:bg-red-200"
            }`}
            onClick={() => toggleOpen(i)}
          >
            <div className='flex items-start justify-between p-5 sm:p-6 gap-4'>
              <div className='flex gap-3'>
                {isCorrect && userAnswer ? (
                  <CheckCircle2 className='text-green-700 mt-1' size={24} />
                ) : (
                  <XCircle className='text-red-700 mt-1' size={24} />
                )}
                <div>
                  <p className='font-bold text-lg text-gray-900 mb-1'>
                    Q{i + 1}. {q.question}
                  </p>
                  <p className='text-base text-gray-800'>
                    Your answer:{" "}
                    <span
                      className={`font-semibold ${
                        isCorrect && userAnswer
                          ? "text-green-800"
                          : "text-red-800"
                      }`}
                    >
                      {userAnswer || "Not answered"}
                    </span>
                  </p>
                  {!isCorrect && (
                    <p className='text-base text-gray-800 mt-1'>
                      Correct answer:{" "}
                      <span className='text-blue-800 font-semibold'>
                        {q.correctAnswer}
                      </span>
                    </p>
                  )}
                </div>
              </div>
              <span className='text-sm text-gray-600 underline hover:text-black'>
                {isOpen ? "Hide" : "Explain"}
              </span>
            </div>

            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25 }}
                className='px-6 pb-5 text-gray-800 text-[15px]'
              >
                {q.explanation ? (
                  <div className='bg-white rounded-md p-4 border-l-4 border-blue-600 shadow-sm'>
                    <p className='font-semibold text-blue-800 mb-1'>
                      Explanation:
                    </p>
                    <p>{q.explanation}</p>
                  </div>
                ) : (
                  <p className='text-gray-600 italic'>
                    No explanation provided.
                  </p>
                )}
              </motion.div>
            )}
          </motion.div>
        );
      })}
    </motion.div>
  );
};
