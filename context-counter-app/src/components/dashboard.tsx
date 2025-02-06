import { useContext } from "react";
import { CreateUser } from "../context/CreateUserCon";

export const Dashboard = () => {
  const user = useContext(CreateUser);

  if (!user) {
    throw new Error("Dashboard must be used with AuthProvider");
  }

  return (
    <div className="dashboard-box">
      <h2>Dashboard</h2>
      <p>Logged in as: {user.username}</p>
    </div>
  );
};
