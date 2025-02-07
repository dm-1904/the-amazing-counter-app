import { createContext } from "react";

export type CountContextType = {
  count: number;
  handleIncrement: () => void;
  handleDecrement: () => void;
  handleReset: () => void;
  setCount: (count: number) => void;
};

export const CountContext = createContext<CountContextType | undefined>(
  undefined
);
