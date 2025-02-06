import { ReactNode, useState } from "react";
import { CreateUser } from "./CreateUserCon";

export const CreateUserPro = ({ children }: { children: ReactNode }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [id, setID] = useState(0);

  const idGen = (max: number) => {
    return Math.floor(Math.random() * max);
  };

  const generateUniqueID = async () => {
    const response = await fetch("http://localhost:3000/app-users");
    const users = await response.json();
    const existingIDs = users.map((user: { id: number }) => user.id);

    let newID;
    do {
      newID = idGen(9999999999);
    } while (existingIDs.includes(newID));

    return newID;
  };

  const postUser = async (username: string, password: string) => {
    const newID = await generateUniqueID();
    setID(newID);
    return fetch("http://localhost:3000/app-users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: newID, username, password, lastCount: 0 }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP POST failed with status ${res.status}`);
        }
        return res.json();
      })
      .catch((error: Error) => {
        throw new Error(`Posting to 'app-users' failed: ${error.message}`);
      });
  };

  return (
    <CreateUser.Provider
      value={{
        username,
        password,
        setUsername,
        setPassword,
        postUser,
        id,
      }}
    >
      {children}
    </CreateUser.Provider>
  );
};
