import { useNavigate, useParams } from "react-router-dom";
import { quizzes } from "../data/quizzes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useQuizStore } from "../store/quizStore";
import QuizQuestionStep from "../components/quiz/QuizQuestionStep";

export const Quiz = () => {
  const { id } = useParams();
  const [quiz, setQuiz] = useState<(typeof quizzes)[0] | undefined>(undefined);
  const navigate = useNavigate();
  const {
    currentQuestionIndex,
    answers,
    increaseScore,
    setAnswer,
    nextQuestion,
    difficulty,
  } = useQuizStore();

  useEffect(() => {
    const newQuiz = quizzes.find((q) => q.id === Number(id));
    const updatedQuestions = newQuiz?.questions.filter(
      (q) => q.difficulty === difficulty
    );
    if (newQuiz && updatedQuestions) {
      setQuiz({ ...newQuiz, questions: updatedQuestions });
    }
  }, [id]);

  useEffect(() => {
    // Reset scroll on question change for better UX
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentQuestionIndex]);

  if (!quiz) {
    return (
      <div className='text-center text-red-600 font-semibold mt-20'>
        Quiz not found
      </div>
    );
  }

  const question = quiz.questions[currentQuestionIndex];
  const selectedOption = answers[currentQuestionIndex] ?? null;

  const handleSelect = (option: string) => {
    setAnswer(currentQuestionIndex, option);
    if (question.correctAnswer === option) {
      increaseScore();
    }
  };

  const handleSubmit = () => {
    navigate(`/quiz/${quiz.id}/result`);
  };

  return (
    <div className='min-h-screen bg-gray-50 py-12 px-6'>
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className='text-center mb-12'
      >
        <h1 className='text-4xl font-bold text-blue-600 mb-2'>{quiz.title}</h1>
        <p className='text-gray-600 text-lg'>{quiz.description}</p>
      </motion.div>

      <div className='max-w-4xl mx-auto space-y-8'>
        <QuizQuestionStep
          question={question}
          selectedOption={selectedOption}
          onSelect={handleSelect}
          onNext={nextQuestion}
          onSubmit={handleSubmit}
          isLastQuestion={currentQuestionIndex === quiz.questions.length - 1}
        />
      </div>
    </div>
  );
};
