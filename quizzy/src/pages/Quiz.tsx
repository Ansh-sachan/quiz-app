import { useNavigate, useParams } from "react-router-dom";
import { quizzes } from "../data/quizzes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useQuizStore } from "../store/quizStore";
import QuizQuestionStep from "../components/quiz/QuizQuestionStep";
import { useSpeech } from "../hooks/useSpeech";
import { Header } from "../components/home/Header";

export const Quiz = () => {
  const { id } = useParams();
  const [quiz, setQuiz] = useState<(typeof quizzes)[0] | undefined>(undefined);
  const navigate = useNavigate();
  const { stop } = useSpeech();

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
    stop();
  }, [currentQuestionIndex, stop]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentQuestionIndex]);

  if (!quiz) {
    return (
      <div className='text-center text-red-600 font-semibold mt-20 px-4'>
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
    <>
      <Header />
      <div className='min-h-screen py-10 px-4 sm:px-6 md:px-10 lg:px-16 mt-32'>
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='text-center mb-10'
        >
          <h1 className='text-3xl sm:text-4xl font-bold text-blue-600 mb-2'>
            {quiz.title}
          </h1>
          <p className='text-gray-600 text-base sm:text-lg'>
            {quiz.description}
          </p>
        </motion.div>

        <div className='max-w-screen-md mx-auto space-y-10'>
          <QuizQuestionStep
            question={question}
            selectedOption={selectedOption}
            onSelect={handleSelect}
            onNext={nextQuestion}
            onSubmit={handleSubmit}
            img={quiz.img}
            isLastQuestion={currentQuestionIndex === quiz.questions.length - 1}
          />
        </div>
      </div>
    </>
  );
};
