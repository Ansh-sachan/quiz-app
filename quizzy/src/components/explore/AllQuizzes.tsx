import { quizzes } from "../../data/quizzes";
import { useState } from "react";
import QuizCard from "./QuizCard";
import { motion } from "framer-motion";

export default function AllQuizzes() {
  const [search, setSearch] = useState("");

  const filtered = quizzes.filter(q =>
    q.title.toLowerCase().includes(search.toLowerCase()) ||
    q.tags.some(tag => tag.toLowerCase().includes(search.toLowerCase()))
  );

  return (
       <div className="min-h-screen bg-white py-14 px-6">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1 , y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center text-blue-600 mb-8"
      >
        All Quizzes
      </motion.h1>

      <div className="max-w-md mx-auto mb-10">
        <input
          type="text"
          placeholder="Search quizzes..."
          className="w-full border border-gray-300 px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>

      <motion.div
        initial="hidden"
        animate="show"
        variants={{
          hidden: { opacity: 0, y: 20 },
          show: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.1 }
          }
        }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
      >
        {filtered.length ? (
          filtered.map(quiz => <QuizCard key={quiz.id} quiz={quiz} />)
        ) : (
          <p className="text-center col-span-full text-gray-500">No quizzes found</p>
        )}
      </motion.div>
    </div>
  );
}
