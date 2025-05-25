// useCountdown.ts
import { useEffect, useState } from "react";

export function useCountdown(start: number, onDone: () => void) {
  const [count, setCount] = useState(start);

  useEffect(() => {
    if (count > 0) {
      const timer = setInterval(() => setCount((prevCount) => prevCount - 1), 1000);
      return () => clearInterval(timer);
    } else {
      onDone();
    }
  }, [count, onDone]);

  return count;
}
