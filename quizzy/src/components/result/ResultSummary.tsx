import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";

interface ResultSummaryProps {
  title: string;
  score: number;
  total: number;
  percentage: string; // string like "75.5"
}

export const ResultSummary = ({
  title,
  score,
  total,
  percentage,
}: ResultSummaryProps) => {
  const parsedPercentage = parseFloat(percentage);
  const [animatedPercent, setAnimatedPercent] = useState(0);

  const getColorClass = () => {
    if (parsedPercentage < 33) return "bg-red-500";
    if (parsedPercentage < 66) return "bg-yellow-400";
    return "bg-green-500";
  };

  const getMessage = () => {
    if (parsedPercentage < 33) return "Keep trying! 💪";
    if (parsedPercentage < 66) return "Good effort! ✨";
    return "Awesome work! 🌟";
  };

  useEffect(() => {
    let frame = 0;
    const target = Math.floor(parsedPercentage);
    const interval = setInterval(() => {
      frame++;
      setAnimatedPercent(frame);
      if (frame >= target) clearInterval(interval);
    }, 15);
    return () => clearInterval(interval);
  }, [parsedPercentage]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className='bg-white shadow-xl rounded-2xl p-6 max-w-md w-full mx-auto text-center space-y-4'
    >
      <h2 className='text-xl sm:text-2xl font-bold text-blue-600 flex justify-center items-center gap-2'>
        <Sparkles className='text-yellow-500' /> Quiz Summary
      </h2>

      <p className='text-gray-700 text-base sm:text-lg'>
        📘 <span className='font-medium'>Quiz:</span>{" "}
        <span className='font-semibold text-gray-900'>{title}</span>
      </p>

      <p className='text-lg sm:text-xl'>
        🎯 Score:{" "}
        <span className='text-green-600 font-bold'>
          {score}/{total}
        </span>
      </p>

      <div className='w-full bg-gray-200 h-4 rounded-full overflow-hidden mt-2'>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${parsedPercentage}%` }}
          transition={{ duration: 0.8 }}
          className={`h-full ${getColorClass()} rounded-full`}
        />
      </div>

      <div className='text-sm sm:text-base font-medium text-gray-600'>
        Accuracy:{" "}
        <span className='font-bold'>
          {animatedPercent}
          <span className='text-sm'>%</span>
        </span>
      </div>

      <AnimatePresence>
        <motion.div
          key={getMessage()}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4 }}
          className='text-md sm:text-lg font-semibold mt-2 text-gray-700'
        >
          {getMessage()}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};
