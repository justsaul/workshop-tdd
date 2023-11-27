import { useState, useEffect } from "react";

export const useCounter = (reset?: boolean) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (reset) {
      setCount(0);
    }
  }, [reset]);

  const incrementCount = () => {
    setCount((c) => c + 1);
  };

  const decrementCount = () => {
    setCount((c) => c - 1);
  };

  return {
    count,
    incrementCount,
    decrementCount,
  };
};
