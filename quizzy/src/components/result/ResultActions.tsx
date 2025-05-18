import { RefreshCcw, Home, Download } from "lucide-react";

interface Props {
  onRetake: () => void;
  onHome: () => void;
  onDownload: () => void;
}

export const ResultActions = ({ onRetake, onHome, onDownload }: Props) => (
  <div className='flex justify-center gap-4 mt-10'>
    <button
      onClick={onRetake}
      className='bg-blue-600 text-white px-5 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition'
    >
      <RefreshCcw size={18} /> Retake Quiz
    </button>
    <button
      onClick={onHome}
      className='bg-gray-300 text-gray-800 px-5 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-400 transition'
    >
      <Home size={18} /> Back to Home
    </button>
    <button
      onClick={onDownload}
      className='bg-blue-600 text-white px-5 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition'
    >
      <Download size={18} /> Download PDF
    </button>
  </div>
);
