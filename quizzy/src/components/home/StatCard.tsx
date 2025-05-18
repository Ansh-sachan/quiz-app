import { motion } from "framer-motion";
import { useCountUp } from "../../utils/countUp";
import { ReactNode } from "react";

export const StatCard = ({
  endCount,
  label,
  icon,
}: {
  endCount: number;
  label: string;
  icon?: ReactNode;
}) => {
  const count = useCountUp(endCount, 1500);

  return (
    <motion.div
      whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255,255,255,0.2)" }}
      transition={{ type: "spring", stiffness: 200 }}
      className='cursor-pointer relative basis-[45%] px-6 py-4 rounded-2xl bg-white/10 backdrop-blur-lg shadow-lg border border-white/20 hover:border-white/30 hover:shadow-xl transition duration-300 ease-in-out flex items-center gap-4'
    >
      {/* Optional Icon */}
      {icon && (
        <div className='text-3xl sm:text-4xl text-[var(--primary-color)]'>
          {icon}
        </div>
      )}

      {/* Text Content */}
      <div className='flex flex-col'>
        <span className='text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] leading-tight'>
          {count.toLocaleString()}+
        </span>
        <span className='text-sm sm:text-base text-muted-foreground font-medium'>
          {label}
        </span>
      </div>
    </motion.div>
  );
};
