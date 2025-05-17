import { motion } from "framer-motion";

export default function QuizCard({ quiz }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-xl p-5 shadow-md hover:shadow-xl transition border-t-4 border-blue-500"
    >
      <h3 className="text-xl font-semibold text-blue-600 mb-2">{quiz.title}</h3>
      <p className="text-gray-700 mb-2">{quiz.description}</p>
      <div className="text-sm text-gray-500">Difficulty: {quiz.difficulty}</div>
      <div className="flex gap-2 mt-3 flex-wrap">
        {quiz.tags.map(tag => (
          <span
            key={tag}
            className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}