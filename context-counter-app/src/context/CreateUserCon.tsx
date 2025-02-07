import { createContext } from "react";

export type TUserContext = {
  username: string;
  password: string;
  id: string;
  setUsername: (username: string) => void;
  setPassword: (password: string) => void;
  setID: (id: string) => void;
  postUser: (user: string, password: string) => Promise<void>;
};

export const CreateUser = createContext<TUserContext | undefined>(undefined);
