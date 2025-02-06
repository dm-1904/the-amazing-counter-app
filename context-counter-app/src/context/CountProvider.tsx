import { ReactNode, useContext, useState } from "react";
import { CountContext } from "./CountContext";
import { CreateUser } from "./CreateUserCon";

export const CountProvider = ({ children }: { children: ReactNode }) => {
  const [count, setCount] = useState(0);

  const user = useContext(CreateUser);

  if (!user) {
    throw new Error("Not logged in");
  }

  const handleIncrement = () => {
    console.log("user", user);
    setCount((prev) => prev + 1);
    fetch(`http://localhost:3000/app-users/${user.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(count),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to PATCH item: ${res.status}`);
        }
        return res.json();
      })
      .catch((err) => {
        throw new Error(`Failed to PATCH item: ${err.message}`);
      });
  };
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
