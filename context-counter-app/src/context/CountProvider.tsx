import { ReactNode, useContext, useState, useEffect } from "react";
import { CountContext } from "./CountContext";
import { CreateUser } from "./CreateUserCon";

export const CountProvider = ({ children }: { children: ReactNode }) => {
  const [count, setCount] = useState(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const { lastCount } = JSON.parse(storedUser);
      return lastCount;
    }
    return 0;
  });

  const user = useContext(CreateUser);

  if (!user) {
    throw new Error("Not logged in");
  }

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const { lastCount } = JSON.parse(storedUser);
      setCount(lastCount);
    }
  }, []);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const user = JSON.parse(storedUser);
      user.lastCount = count;
      localStorage.setItem("user", JSON.stringify(user));
    }
  }, [count]);

  const updateLastCount = async (newCount: number) => {
    const url = `http://localhost:3000/app-users/${user.id}`;
    await fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        lastCount: newCount,
      }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to PATCH item: ${res.status}`);
        }
        return res.json();
      })
      .catch((err) => {
        console.error(`Failed to PATCH item: ${err.message}`);
      });
  };

  const handleIncrement = () => {
    const newCount = count + 1;
    setCount(newCount);
    updateLastCount(newCount);
  };

  const handleDecrement = () => {
    const newCount = count - 1;
    setCount(newCount);
    updateLastCount(newCount);
  };

  const handleReset = () => {
    const newCount = 0;
    setCount(newCount);
    updateLastCount(newCount);
  };

  return (
    <CountContext.Provider
      value={{ count, handleDecrement, handleIncrement, handleReset, setCount }}
    >
      {children}
    </CountContext.Provider>
  );
};
