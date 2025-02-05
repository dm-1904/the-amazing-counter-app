import { createContext } from "react";

export type AuthContextType = {
  username: string;
  password: string;
  setUsername: (username: string) => void;
  setPassword: (password: string) => void;
};

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);
