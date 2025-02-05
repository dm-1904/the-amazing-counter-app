import { useContext, useState } from "react";
import { AuthContext } from "../context/CreateUserCon";

export const Login = () => {
  const auth = useContext(AuthContext);
  const [inputUsername, setInputUsername] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  if (!auth) {
    throw new Error("Login auth error");
  }

  const { setUsername, setPassword } = auth;

  const handleLogin = () => {
    setUsername(inputUsername);
    setPassword(inputPassword);
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
          type="text"
          className="password-input"
          placeholder="Password"
          value={inputPassword}
          onChange={(e) => setInputPassword(e.target.value)}
        />
        <button>Set Credentials</button>
      </form>
    </div>
  );
};
