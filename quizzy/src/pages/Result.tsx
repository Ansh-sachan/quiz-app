import { motion } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { quizzes } from "../data/quizzes";
import { useQuizStore } from "../store/quizStore";
import { generateQuizPDF } from "../utils/generateQuizPdf";
import { ResultHeader } from "../components/result/ResultHeader";
import { ResultSummary } from "../components/result/ResultSummary";
import { ResultChart } from "../components/result/ResultChart";
import { QuestionBreakdown } from "../components/result/QuestionBreakdown";
import { ResultActions } from "../components/result/ResultActions";

export const Result = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quiz, setQuiz] = useState<(typeof quizzes)[0] | undefined>(undefined);
  const { answers, score, resetQuiz, difficulty } = useQuizStore();

  useEffect(() => {
    const newQuiz = quizzes.find((q) => q.id === Number(id));
    setQuiz(newQuiz);
  }, [id]);

  if (!quiz) {
    return (
      <div className='text-center mt-20 text-red-600 font-semibold px-4'>
        Quiz not found.
      </div>
    );
  }

  const quizQuestions =
    quiz?.questions.filter((q) => q.difficulty === difficulty) ?? [];
  const totalQuestions = quizQuestions.length;
  const percentage = ((score / totalQuestions) * 100).toFixed(1);
  const chartData = [
    { label: "Correct", value: score },
    { label: "Incorrect", value: totalQuestions - score },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className='min-h-screen bg-gradient-to-br from-blue-50 to-white py-8 px-4 sm:px-6 lg:px-12'
    >
      <div className='max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl p-6 sm:p-10 flex flex-col gap-8 overflow-auto'>
        {/* Sticky header on large screens */}
        <div className='sticky top-0 bg-white z-10 py-4 sm:py-6 border-b border-gray-200'>
          <ResultHeader />
        </div>

        <ResultSummary
          title={quiz.title}
          score={score}
          total={totalQuestions}
          percentage={percentage}
        />

        <ResultChart data={chartData} />

        <QuestionBreakdown questions={quizQuestions} answers={answers} />

        <ResultActions
          onRetake={() => {
            resetQuiz();
            navigate(`/quiz/${quiz.id}`);
          }}
          onHome={() => navigate("/")}
          onDownload={() => quiz && generateQuizPDF(quiz)}
        />
      </div>
    </motion.div>
  );
};
