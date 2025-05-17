import { useParams } from "react-router-dom";
import { quizzes } from "../data/quizzes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const Quiz = () => {
  const { id } = useParams();
  const [quiz, setQuiz] = useState<typeof quizzes[0] | undefined>(undefined);

  useEffect(() => {
    const newQuiz = quizzes.find((q) => q.id === Number(id));
    setQuiz(newQuiz);
  }, [id]);

  if (!quiz) return <div className="text-center text-red-600 font-semibold mt-20">Quiz not found</div>;

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-blue-600 mb-2">{quiz.title}</h1>
        <p className="text-gray-600 text-lg">{quiz.description}</p>
      </motion.div>

      <div className="max-w-4xl mx-auto space-y-8">
        {quiz.questions.map((question, index) => (
          <motion.div
            key={question.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-xl shadow-md p-6 border-l-4 border-blue-500"
          >
            <p className="text-lg font-semibold text-gray-800 mb-4">
              Q{index + 1}. {question.question}
            </p>
            <ul className="space-y-2">
              {question.options.map((option, optionIndex) => (
                <li
                  key={optionIndex}
                  className="cursor-pointer px-4 py-2 bg-gray-100 hover:bg-blue-100 rounded-md transition"
                >
                  {option}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
