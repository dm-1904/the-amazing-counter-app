import { useEffect, useState } from "react";

export const TakenUserNames = () => {
  const [usernames, setUsernames] = useState<string[]>([]);

  useEffect(() => {
    const fetchUsernames = async () => {
      const response = await fetch("http://localhost:3000/app-users");
      const users = await response.json();
      const usernames = users.map(
        (user: { username: string }) => user.username
      );
      setUsernames(usernames);
    };

    fetchUsernames();
  }, []);

  return (
    <div>
      <h2>Taken Usernames</h2>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {usernames.map((username) => (
          <li
            style={{ marginLeft: "10px" }}
            key={username}
          >
            {username}
          </li>
        ))}
      </div>
    </div>
  );
};
