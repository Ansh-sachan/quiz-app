import { motion } from "framer-motion";
import { useQuizStore } from "../store/quizStore";
import { quizzes } from "../data/quizzes";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Trophy, RefreshCcw, Home } from "lucide-react";

export const Result = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quiz, setQuiz] = useState<typeof quizzes[0] | undefined>(undefined);
  const { answers, score, resetQuiz, currentQuestionIndex } = useQuizStore();

  useEffect(() => {
    const newQuiz = quizzes.find((q) => q.id === Number(id));
    setQuiz(newQuiz);
  }, [id]);

  const handleRetake = () => {
    resetQuiz();
    navigate(`/quiz/${quiz?.id}`); // reset all for now
  };

  if (!quiz) {
    return (
      <div className="text-center mt-20 text-red-500 font-semibold">
        Quiz not found.
      </div>
    );
  }

  const totalQuestions = quiz.questions.length;
  const correct = score;
  const incorrect = totalQuestions - correct;
  const percentage = ((correct / totalQuestions) * 100).toFixed(1);

  const chartData = [
    { label: "Correct", value: correct },
    { label: "Incorrect", value: incorrect },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-12 px-6"
    >
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-10 space-y-8">
        <motion.h1
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-4xl font-bold text-blue-600 text-center flex items-center justify-center gap-2"
        >
          <Trophy className="text-yellow-500" size={32} /> Quiz Result
        </motion.h1>

        <div className="text-center text-lg text-gray-700">
          <p className="mb-2">Quiz: <span className="font-semibold">{quiz.title}</span></p>
          <p>🎯 Score: <span className="text-green-600 font-bold">{score}/{totalQuestions}</span></p>
          <p className="text-gray-600 mt-1">Accuracy: <span className="text-blue-500 font-medium">{percentage}%</span></p>
        </div>

        <div className="h-60">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <XAxis dataKey="label" stroke="#555" />
              <YAxis allowDecimals={false} />
              <Tooltip />
              <Bar dataKey="value" fill="#3B82F6" barSize={40} radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
          }}
          className="space-y-4"
        >
          {quiz.questions.map((q, i) => {
            const userAnswer= answers[i];
            const correctAnswer = q.correctAnswer; 
            const isCorrect = userAnswer === correctAnswer; 

            return (
              <motion.div
                key={q.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                className={`p-4 rounded-md border text-sm transition-all duration-300 ease-in-out shadow-sm ${
                  isCorrect ? "border-green-500 bg-green-50" : "border-red-400 bg-red-50"
                }`}
              >
                <p className="font-medium text-gray-800">Q{i + 1}. {q.question}</p>
                <p className="mt-1">Your answer: <span className={isCorrect ? "text-green-700" : "text-red-700 font-medium"}>{userAnswer || "Not answered"}</span></p>
                {!isCorrect && (
                  <p className="text-gray-600">Correct answer: <span className="text-blue-700 font-semibold">{q.correctAnswer}</span></p>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        <div className="flex justify-center gap-4 mt-10">
          <button
            onClick={handleRetake}
            className="bg-blue-600 text-white px-5 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition"
          >
            <RefreshCcw size={18} /> Retake Quiz
          </button>
          <button
            onClick={() => navigate("/")}
            className="bg-gray-300 text-gray-800 px-5 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-400 transition"
          >
            <Home size={18} /> Back to Home
          </button>
        </div>
      </div>
    </motion.div>
  );
};
