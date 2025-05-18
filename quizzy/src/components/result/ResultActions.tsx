import { RefreshCcw, Home, Download } from "lucide-react";

interface Props {
  onRetake: () => void;
  onHome: () => void;
  onDownload: () => void;
}

export const ResultActions = ({ onRetake, onHome, onDownload }: Props) => (
  <div className='flex flex-col sm:flex-row justify-center items-center gap-4 mt-10 px-4'>
    <button
      onClick={onRetake}
      className='bg-blue-600 text-white px-5 py-2 rounded-lg w-full sm:w-auto flex items-center justify-center gap-2 hover:bg-blue-700 transition text-sm sm:text-base'
    >
      <RefreshCcw size={18} /> Retake Quiz
    </button>
    <button
      onClick={onHome}
      className='bg-gray-300 text-gray-800 px-5 py-2 rounded-lg w-full sm:w-auto flex items-center justify-center gap-2 hover:bg-gray-400 transition text-sm sm:text-base'
    >
      <Home size={18} /> Back to Home
    </button>
    <button
      onClick={onDownload}
      className='bg-blue-600 text-white px-5 py-2 rounded-lg w-full sm:w-auto flex items-center justify-center gap-2 hover:bg-blue-700 transition text-sm sm:text-base'
    >
      <Download size={18} /> Download PDF
    </button>
  </div>
);
