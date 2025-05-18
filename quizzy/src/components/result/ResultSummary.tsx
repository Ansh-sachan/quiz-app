interface ResultSummaryProps {
  title: string;
  score: number;
  total: number;
  percentage: string;
}

export const ResultSummary = ({
  title,
  score,
  total,
  percentage,
}: ResultSummaryProps) => (
  <div className='text-center text-lg text-gray-700'>
    <p className='mb-2'>
      Quiz: <span className='font-semibold'>{title}</span>
    </p>
    <p>
      🎯 Score:{" "}
      <span className='text-green-600 font-bold'>
        {score}/{total}
      </span>
    </p>
    <p className='text-gray-600 mt-1'>
      Accuracy: <span className='text-blue-500 font-medium'>{percentage}%</span>
    </p>
  </div>
);
