import "./App.css";
import { Box, NestedBox } from "./components/box";
import {
  LogOutButton,
  MinusButton,
  PlusButton,
  ResetButton,
} from "./components/button";
import { Dashboard } from "./components/dashboard";
import { Login } from "./components/login";
import { Register } from "./components/register";
import { TakenUserNames } from "./components/takenUN";
import { useState, useContext } from "react";
import { CreateUser } from "./context/CreateUserCon";

function App() {
  const [dependency, setDependency] = useState(0);
  const user = useContext(CreateUser);

  const isLoggedIn: boolean = !!(user && user.username !== "");

  return (
    <div
      className="counter-container-box"
      style={{ backgroundColor: "black", padding: "30px" }}
    >
      <h1>The Amazing Counter App!</h1>
      <Register
        setDependency={setDependency}
        isLoggedIn={isLoggedIn}
      />
      <TakenUserNames dependency={dependency} />
      <Login isLoggedIn={isLoggedIn} />
      <LogOutButton />
      <Dashboard />
      <ResetButton />
      <PlusButton />
      <MinusButton />
      <Box>
        <Box>
          <Box>
            <NestedBox />
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default App;
