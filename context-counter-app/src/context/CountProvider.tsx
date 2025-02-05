import { ReactNode, useState } from "react";
import { CountContext } from "./CountContext";

export const CountProvider = ({ children }: { children: ReactNode }) => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount((prev) => prev + 1);
  const handleDecrement = () => setCount((prev) => prev - 1);
  const handleReset = () => setCount(0);

  return (
    <CountContext.Provider
      value={{ count, handleDecrement, handleIncrement, handleReset }}
    >
      {children}
    </CountContext.Provider>
  );
};
