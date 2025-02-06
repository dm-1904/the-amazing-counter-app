import { useContext, useState } from "react";
import { CreateUser } from "../context/CreateUserCon";

export const Register = () => {
  const auth = useContext(CreateUser);
  const [inputUsername, setInputUsername] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  if (!auth) {
    throw new Error("Login auth error");
  }

  const { setUsername, setPassword, postUser } = auth;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setUsername(inputUsername);
    setPassword(inputPassword);
    postUser(inputUsername, inputPassword);
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
        />
        <input
          type="password"
          className="password-input"
          placeholder="Password"
          value={inputPassword}
          onChange={(e) => setInputPassword(e.target.value)}
        />
        <button>Register</button>
      </form>
    </div>
  );
};
