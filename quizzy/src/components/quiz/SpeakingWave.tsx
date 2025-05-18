import { motion } from "framer-motion";

export const SpeakingWave = () => (
  <div className='flex items-center gap-[2px] h-full'>
    {[0, 1, 2].map((i) => (
      <motion.div
        key={i}
        className='w-[4px] h-[12px] bg-blue-500 rounded-full'
        animate={{
          scaleY: [1, 1.5, 1],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          repeat: Infinity,
          duration: 0.6,
          delay: i * 0.2,
          ease: "easeInOut",
        }}
      />
    ))}
  </div>
);
