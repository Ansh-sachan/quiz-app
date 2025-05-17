import { Link } from "react-router-dom";
import { quizzes } from "../../data/quizzes";
import QuizCard from "../explore/QuizCard";
import { motion } from "framer-motion";

export default function FeaturedQuizzes() {
  const featured = quizzes.slice(0, 3); // Show top 3
  return (
    <div className='py-14 px-6 bg-gray-50'>
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className='text-3xl font-bold text-center text-blue-600 mb-10'
      >
        Featured Quizzes
      </motion.h2>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto'>
        {featured.map((quiz) => (
          <QuizCard key={quiz.id} {...quiz} />
        ))}
      </div>

      <div className='text-center mt-10'>
        <Link to='/quizzes'>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className='bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition'
          >
            View All Quizzes
          </motion.button>
        </Link>
      </div>
    </div>
  );
}
