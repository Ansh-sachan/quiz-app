import { motion } from "framer-motion";
import { useSpeech } from "../../hooks/useSpeech";
import { Volume2 } from "lucide-react";
import { useQuizStore } from "../../store/quizStore";
import { SpeakingWave } from "./SpeakingWave";

interface QuizQuestionCardProps {
  id: number;
  question: string;
  options: string[];
  onSelect: (option: string) => void;
  selectedOption: string | null;
  img: string;
}

export default function QuizQuestionCard({
  id,
  question,
  options,
  onSelect,
  selectedOption,
  img,
}: QuizQuestionCardProps) {
  const { speak, isSpeaking, stop } = useSpeech();
  const { currentQuestionIndex: index } = useQuizStore();

  const handleSpeak = () => {
    if (isSpeaking) {
      stop();
    } else {
      const fullText = `Question ${
        index + 1
      }: ${question}. Options are: ${options.join(", ")}`;
      speak(fullText);
    }
  };

  const checkVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { pathLength: 1, opacity: 1 },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className='bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-500 mb-6 w-full mx-auto'
    >
      <div className='flex md:flex-row flex-col justify-between gap-4 items-center'>
        {/* Image section */}
        {img && (
          <div className='mb-4 md:basis-1/3 basis-full'>
            <img
              src={img}
              alt={`Illustration for question ${index + 1}`}
              className='w-full h-auto object-cover rounded-lg shadow-sm'
              loading='lazy'
            />
          </div>
        )}
        <div className='md:basis-2/3 basis-full'>
          {/* Question and speak button */}
          <div className='flex items-center justify-between mb-4'>
            <p className='text-lg font-semibold text-gray-800 max-w-[90%]'>
              Q{index + 1}. {question}
            </p>
            <div onClick={handleSpeak} className='flex items-center gap-2'>
              {!isSpeaking && (
                <button
                  className={`text-blue-500 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded p-1 transition duration-200`}
                  title={isSpeaking ? "Stop reading" : "Read aloud"}
                  aria-label='Toggle speech'
                >
                  <Volume2 size={22} />
                </button>
              )}
              {isSpeaking && (
                <div
                  className='w-[32px] h-[32px] mt-1 p-[4px] border border-blue-400 rounded-full shadow-sm bg-blue-50 flex items-center justify-center transition-all overflow-hidden'
                  title='Speaking...'
                >
                  <SpeakingWave />
                </div>
              )}
            </div>
          </div>

          {/* Options */}
          <ul className='space-y-3'>
            {options.map((option, i) => {
              const isSelected = selectedOption === option;
              return (
                <li key={i}>
                  <label
                    htmlFor={`option-${id}-${i}`}
                    className={`flex items-center cursor-pointer select-none rounded-md px-4 py-2 transition
                  border
                  ${
                    isSelected
                      ? "bg-blue-100 text-blue-700 border-blue-400 font-medium shadow-blue-500 shadow-md"
                      : "bg-gray-100 hover:bg-blue-50 border-transparent"
                  }
                  `}
                  >
                    <input
                      type='checkbox'
                      id={`option-${id}-${i}`}
                      checked={isSelected}
                      onChange={() => onSelect(option)}
                      className='sr-only'
                      aria-checked={isSelected}
                    />
                    <span
                      className={`relative flex items-center justify-center w-5 h-5 mr-3 rounded border-2
                    ${
                      isSelected
                        ? "bg-blue-500 text-white"
                        : "border-gray-400 bg-white"
                    }
                  `}
                      aria-hidden='true'
                    >
                      <motion.svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='currentColor'
                        strokeWidth={3}
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        className='w-4 h-4 text-white absolute'
                        initial='hidden'
                        animate={isSelected ? "visible" : "hidden"}
                        variants={checkVariants}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <motion.path d='M4 12l6 6L20 6' />
                      </motion.svg>
                    </span>
                    <span>{option}</span>
                  </label>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
