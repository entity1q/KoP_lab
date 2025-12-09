import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { GameSettingsProvider } from "./context/GameSettingsContext";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <GameSettingsProvider>
                <App />
            </GameSettingsProvider>
        </BrowserRouter>
    </React.StrictMode>
);
