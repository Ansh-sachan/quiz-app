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
      className='space-y-6 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-10'
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
            className={`rounded-xl border-2 shadow-md transition-all cursor-pointer ${
              isCorrect && userAnswer
                ? "border-green-600 bg-green-100 hover:bg-green-200"
                : "border-red-600 bg-red-100 hover:bg-red-200"
            }`}
            onClick={() => toggleOpen(i)}
          >
            <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 p-4 sm:p-5 md:p-6'>
              <div className='flex gap-3 sm:items-start'>
                {isCorrect && userAnswer ? (
                  <CheckCircle2
                    className='text-green-700 mt-1 shrink-0'
                    size={22}
                  />
                ) : (
                  <XCircle className='text-red-700 mt-1 shrink-0' size={22} />
                )}
                <div>
                  <p className='font-semibold text-gray-900 text-base sm:text-lg mb-1'>
                    Q{i + 1}. {q.question}
                  </p>
                  <p className='text-gray-800 text-sm sm:text-base'>
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
                    <p className='text-gray-800 text-sm sm:text-base mt-1'>
                      Correct answer:{" "}
                      <span className='text-blue-800 font-semibold'>
                        {q.correctAnswer}
                      </span>
                    </p>
                  )}
                </div>
              </div>
              <span className='text-sm text-gray-600 underline hover:text-black self-end sm:self-auto'>
                {isOpen ? "Hide" : "Explain"}
              </span>
            </div>

            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25 }}
                className='px-4 sm:px-6 pb-4 text-gray-800 text-sm sm:text-[15px]'
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
