import { useContext } from "react";
import { AuthContext } from "../context/CreateUserCon";

export const Dashboard = () => {
  const auth = useContext(AuthContext);

  if (!auth) {
    throw new Error("Dashboard must be used with AuthProvider");
  }

  return (
    <div className="dashboard-box">
      <h2>Dashboard</h2>
      <p>Logged in as: {auth.username}</p>
    </div>
  );
};
