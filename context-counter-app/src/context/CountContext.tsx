import { createContext } from "react";

export type CountContextType = {
  count: number;
  handleIncrement: () => void;
  handleDecrement: () => void;
  handleReset: () => void;
};

export const CountContext = createContext<CountContextType | undefined>(
  undefined
);
