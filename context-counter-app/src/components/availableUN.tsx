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
      <ul>
        {usernames.map((username) => (
          <li key={username}>{username}</li>
        ))}
      </ul>
    </div>
  );
};
