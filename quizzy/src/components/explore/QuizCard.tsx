import { motion } from "framer-motion";

interface QuizCardProps {
  id: number;
  title: string;
  description: string;
  difficulty: string;
  tags: string[];
  onClick?: () => void;
}

export default function QuizCard({id, title, description, difficulty, tags, onClick }: QuizCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      onClick={onClick}
      className="cursor-pointer bg-white rounded-xl p-5 shadow-md hover:shadow-xl transition border-t-4 border-blue-500"
    >
      <h3 className="text-xl font-semibold text-blue-600 mb-2">{title}</h3>
      <p className="text-gray-700 mb-2">{description}</p>
      <div className="text-sm text-gray-500">Difficulty: {difficulty}</div>
      <div className="flex gap-2 mt-3 flex-wrap">
        {tags.map(tag => (
          <span key={tag} className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-full">
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
