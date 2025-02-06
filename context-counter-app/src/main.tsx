import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { CountProvider } from "./context/CountProvider.tsx";
import { CreateUserPro } from "./context/CreateUserProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CreateUserPro>
      <CountProvider>
        <App />
      </CountProvider>
    </CreateUserPro>
  </StrictMode>
);
