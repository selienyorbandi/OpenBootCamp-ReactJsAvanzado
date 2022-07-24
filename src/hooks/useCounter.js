import { useState } from "react";

const defaultValue = 0;

function useCounter(initialValue = defaultValue, min = 0, max = 100) {
  const [count, setCount] = useState(initialValue);

  const increment = () => {
    if (count < max) {
      setCount((oldValue) => oldValue + 1);
    }
  };

  const decrement = () => {
    if (count > min) {
      setCount((oldValue) => oldValue - 1);
    }
  };

  const reset = () => {
    setCount(defaultValue);
  };

  return {
    count,
    setCount,
    increment,
    decrement,
    reset,
  };
}

export default useCounter;
