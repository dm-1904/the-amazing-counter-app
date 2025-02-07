import "./App.css";
import { Box, NestedBox } from "./components/box";
import { MinusButton, PlusButton, ResetButton } from "./components/button";
import { Dashboard } from "./components/dashboard";
import { Login } from "./components/login";
import { Register } from "./components/register";

function App() {
  return (
    <div
      className="counter-container-box"
      style={{ backgroundColor: "black", padding: "30px" }}
    >
      <h1>The Amazing Counter App!</h1>
      <Register />
      <Login />
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
