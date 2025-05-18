import { motion } from "framer-motion";
import { ChartLine } from "lucide-react";
// import { FaChartLine } from "react-icons/fa"; // For difficulty icon

interface QuizCardProps {
  id: number;
  title: string;
  description: string;
  difficulty: string;
  tags: string[];
  onClick?: () => void;
}

export default function QuizCard({
  id,
  title,
  description,
  difficulty,
  tags,
  onClick,
}: QuizCardProps) {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        boxShadow: "0 8px 24px rgba(59, 130, 246, 0.4)", // soft blue glow shadow
        filter: "none",
        translateZ: 0,
      }}
      whileTap={{ scale: 0.97 }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 20,
        ease: "easeInOut",
      }}
      onClick={onClick}
      className='cursor-pointer bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-l-[6px] border-blue-500 group'
    >
      <h3 className='text-2xl font-bold text-blue-700 mb-3 group-hover:underline'>
        {title}
      </h3>

      <p className='text-gray-800 mb-4 text-sm'>{description}</p>

      <div className='flex items-center text-sm text-gray-600 mb-3'>
        <ChartLine className='mr-2 text-blue-400' />
        <span className='font-medium'>Difficulty:</span>&nbsp;
        <span className='capitalize font-semibold text-blue-600'>
          {difficulty}
        </span>
      </div>

      <div className='flex flex-wrap gap-2'>
        {tags.map((tag) => (
          <span
            key={tag}
            className='hover:scale-105 transition-all bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 font-medium text-xs px-3 py-1 rounded-full shadow-sm'
          >
            #{tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
