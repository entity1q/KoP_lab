import { useState } from "react";
import StartPage from "./pages/StartPage/StartPage.jsx";
import GamePage from "./pages/GamePage/GamePage.jsx";
import { GameSettingsProvider } from "./context/GameSettingsContext";

function App() {
    return (
        <GameSettingsProvider>
            <AppContent />
        </GameSettingsProvider>
    );
}

function AppContent() {
    const [page, setPage] = useState("start");

    if (page === "start")
        return <StartPage onStart={() => setPage("game")} />;

    if (page === "game")
        return <GamePage onExit={() => setPage("start")} />;

    return null;
}

export default App;
