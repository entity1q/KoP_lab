import { createContext, useContext, useState, useEffect } from "react";

const GameSettingsContext = createContext();

export function GameSettingsProvider({ children }) {
    const [settings, setSettings] = useState(() => {
        const saved = localStorage.getItem("game-settings");
        return saved
            ? JSON.parse(saved)
            : {
                winLength: 4,
                maxWins: 3,
                player1Color: "red",
                player2Color: "yellow",
            };
    });

    useEffect(() => {
        localStorage.setItem("game-settings", JSON.stringify(settings));
    }, [settings]);

    return (
        <GameSettingsContext.Provider value={{ settings, setSettings }}>
            {children}
        </GameSettingsContext.Provider>
    );
}

export const useGameSettings = () => useContext(GameSettingsContext);
