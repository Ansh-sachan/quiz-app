import { motion } from "framer-motion";
import { StatCard } from "./StatCard";

export const Hero = () => {
  return (
    <motion.section
      initial='hidden'
      animate='visible'
      variants={{
        visible: { transition: { staggerChildren: 0.2 } },
        hidden: {},
      }}
      className='relative flex flex-col-reverse lg:flex-row items-center justify-between px-6 lg:px-20 py-12 md:mt-48 mt-20 text-[var(--primary-color)] '
    >
      {/* Text Content */}
      <div className='max-w-xl'>
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: -40 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8 }}
          className='md:text-6xl text-4xl font-bold tracking-tight'
        >
          Dare Your Mind.
        </motion.h1>

        <motion.h2
          variants={{
            hidden: { opacity: 0, y: -30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8 }}
          className='text-3xl sm:text-4xl font-semibold mt-4 md:mb-10 mb-5'
        >
          Click. Think. Conquer.
        </motion.h2>

        <motion.p
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8 }}
          className='mt-4 text-xl text-muted-foreground text-[var(--text-secondary)]'
        >
          Ready to challenge your intellect? Dive into mind-bending quizzes and
          rise on the leaderboard!
        </motion.p>

        {/* Stats or Feature Tags */}
        <motion.div
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          initial='hidden'
          animate='visible'
          transition={{ delay: 0.6, duration: 0.8 }}
          className='flex flex-row gap-6 mt-8 justify-start'
        >
          <StatCard endCount={10000} label='Players Tested' />
          <StatCard endCount={500} label='Brain-Boosting Questions' />
        </motion.div>
      </div>

      {/* Image with floating animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className='w-full lg:w-[50%] mb-10 lg:mb-0'
      >
        <motion.img
          src='/assets/home/home-bg.png'
          alt='Quiz Brain Image'
          className='w-full max-w-md mx-auto'
          initial={{ y: 0 }}
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Optional: Floating bubbles or particles in background */}
      <div className='absolute inset-0 -z-10 overflow-hidden'>
        <motion.div
          className='absolute top-10 left-20 w-20 h-20 bg-blue-500 rounded-full opacity-20 blur-2xl'
          animate={{ y: [0, 20, 0], x: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className='absolute bottom-10 right-10 w-32 h-32 bg-purple-600 rounded-full opacity-10 blur-3xl'
          animate={{ y: [0, -20, 0], x: [0, 20, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
      </div>
    </motion.section>
  );
};
