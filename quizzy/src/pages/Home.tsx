import { Header } from "../components/home/Header";
import { Hero } from "../components/home/Hero";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <div className='flex flex-col items-center justify-center mb-6'>
        {/* Call to Action */}
        <Link to={"/quizzes"}>
          <motion.button
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 0px 20px rgba(0, 128, 255, 0.8)",
              textShadow: "0px 0px 8px rgba(255, 255, 255, 0.8)",
              cursor: "pointer",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            className='relative text-2xl mt-8 px-10 py-5 bg-gradient-to-r from-blue-600  to-blue-300 text-white font-bold rounded-2xl shadow-2xl animate-pulse hover:animate-none tracking-wide'
          >
            <span className='mr-2 animate-bounce'>🚀</span> Start Quiz Now
          </motion.button>
        </Link>
      </div>
    </div>
  );
};
