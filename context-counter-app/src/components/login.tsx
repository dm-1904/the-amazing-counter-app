import { useContext, useState } from "react";
import { CreateUser } from "../context/CreateUserCon";
import { CountContext } from "../context/CountContext";
import { toast } from "react-toastify";

export const Login = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
  const auth = useContext(CreateUser);
  const countContext = useContext(CountContext);
  const [inputUsername, setInputUsername] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  if (!auth) {
    throw new Error("Login auth error");
  }

  if (!countContext) {
    throw new Error("Count context error");
  }

  const { setUsername, setPassword, setID } = auth;
  const { setCount } = countContext;

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3000/app-users");
    const users = await response.json();
    const user = users.find(
      (u: { username: string; password: string }) =>
        u.username === inputUsername && u.password === inputPassword
    );

    if (user) {
      setUsername(user.username);
      setPassword(user.password);
      setID(user.id.toString());
      setCount(user.lastCount);
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("count", user.lastCount.toString());
      toast.success(`Welcome ${user.username}`);
    } else {
      toast.error("Invalid username or password");
    }

    setInputUsername("");
    setInputPassword("");
  };

  return (
    <div className="login-box">
      <h2>Login</h2>
      <form
        action="submit"
        className="login-form"
        onSubmit={handleLogin}
      >
        <input
          type="text"
          className="user-input"
          placeholder="Username"
          value={inputUsername}
          onChange={(e) => setInputUsername(e.target.value)}
          disabled={isLoggedIn}
        />
        <input
          type="password"
          className="password-input"
          placeholder="Password"
          value={inputPassword}
          onChange={(e) => setInputPassword(e.target.value)}
          disabled={isLoggedIn}
        />
        <button disabled={isLoggedIn}>Login</button>
      </form>
    </div>
  );
};
