import { useEffect, useState } from "react";

export const useCountUp = (end: number, duration: number = 1000) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const incrementTime = 10;
    const steps = duration / incrementTime;
    const increment = end / steps;

    const interval = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(interval);
      }
      setCount(Math.floor(start));
    }, incrementTime);

    return () => clearInterval(interval);
  }, [end, duration]);

  return count;
};
