import { ReactNode, useContext, useState, useEffect } from "react";
import { CountContext } from "./CountContext";
import { CreateUser } from "./CreateUserCon";

export const CountProvider = ({ children }: { children: ReactNode }) => {
  const [count, setCount] = useState(0);

  const user = useContext(CreateUser);

  if (!user) {
    throw new Error("Not logged in");
  }

  useEffect(() => {
    console.log("User context:", user);
  }, [user]);

  const updateLastCount = async (newCount: number) => {
    const url = `http://localhost:3000/app-users/${user.id}`;
    console.log(
      "Updating lastCount for user:",
      user.id,
      "with count:",
      newCount
    );
    console.log("PATCH request URL:", url);

    // Fetch the specific user by ID and log the response
    const fetchedUser = await fetch(url)
      .then((res) => res.json())
      .catch((err) => {
        console.error("Failed to fetch user:", err.message);
        return null;
      });

    console.log("Fetched user:", fetchedUser);

    if (!fetchedUser) {
      console.error(`User with ID ${user.id} does not exist.`);
      return;
    }

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
        console.log("PATCH response status:", res.status);
        if (!res.ok) {
          throw new Error(`Failed to PATCH item: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log("PATCH response data:", data);
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
      value={{ count, handleDecrement, handleIncrement, handleReset }}
    >
      {children}
    </CountContext.Provider>
  );
};
