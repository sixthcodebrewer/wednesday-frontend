import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AppTournament from "./AppTournament";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppTournament />
  </StrictMode>
);
