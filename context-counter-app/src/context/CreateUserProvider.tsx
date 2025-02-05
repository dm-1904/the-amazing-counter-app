import { ReactNode, useState } from "react";
import { AuthContext } from "./CreateUserCon";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <AuthContext.Provider
      value={{ username, password, setUsername, setPassword }}
    >
      {children}
    </AuthContext.Provider>
  );
};
