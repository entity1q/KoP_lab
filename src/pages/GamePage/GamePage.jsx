import { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import GameBoard from "../../components/Game/GameBoard";
import Button from "../../components/UI/Button";
import "./GamePage.css";
import { useGameState } from "../../hooks/useGameState";
import GameOverModal from "../../components/Game/GameOverModal";
import { useGameSettings } from "../../context/GameSettingsContext";

export default function GamePage({ onExit }) {
    const game = useGameState();
    const { settings } = useGameSettings();

    const [wins, setWins] = useState({ R: 0, Y: 0 });
    const [finalWinner, setFinalWinner] = useState(null); // 🟦 новий стан

    useEffect(() => {
        if (game.winner) {
            setWins(prev => {
                const updated = {
                    ...prev,
                    [game.winner]: prev[game.winner] + 1,
                };


                if (updated[game.winner] >= settings.maxWins) {
                    setFinalWinner(game.winner);
                }

                return updated;
            });
        }
    }, [game.winner]);

    return (
        <Layout>
            {(game.winner || game.isDraw || finalWinner) && (
                <GameOverModal
                    winner={finalWinner || game.winner}
                    isDraw={game.isDraw}
                    wins={wins}
                    isFinal={!!finalWinner}
                    onNextRound={() => game.resetGame()}
                    onRestart={onExit}
                />
            )}

            <div className="game-page">
                <p>Хід гравця: {game.currentPlayer}</p>

                <GameBoard board={game.board} onDrop={game.dropDisc} />

                <Button onClick={game.resetGame}>Скинути гру</Button>
            </div>
        </Layout>
    );
}
