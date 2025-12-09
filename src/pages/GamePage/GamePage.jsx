import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import GameBoard from "../../components/Game/GameBoard";
import Button from "../../components/UI/Button";
import { useGameState } from "../../hooks/useGameState";
import GameOverModal from "../../components/Game/GameOverModal";
import { useGameSettings } from "../../context/GameSettingsContext";

import styles from "./GamePage.module.css"; //

export default function GamePage() {
    const navigate = useNavigate();
    const { userId } = useParams();

    const game = useGameState();
    const { settings } = useGameSettings();

    const [wins, setWins] = useState({ R: 0, Y: 0 });
    const [finalWinner, setFinalWinner] = useState(null);

    useEffect(() => {
        if (game.winner) {
            setWins((prev) => {
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
    }, [game.winner, settings.maxWins]);

    function returnToMenu() {
        navigate(`/user/${userId}/start`);
    }

    return (
        <Layout>
            {(game.winner || game.isDraw || finalWinner) && (
                <GameOverModal
                    winner={finalWinner || game.winner}
                    isDraw={game.isDraw}
                    wins={wins}
                    isFinal={!!finalWinner}
                    onNextRound={() => game.resetGame()}
                    onRestart={returnToMenu}
                />
            )}

            <div className={styles.gamePage}>
                <p className={styles.playerTurn}>
                    Хід гравця: {game.currentPlayer}
                </p>

                <GameBoard board={game.board} onDrop={game.dropDisc} />

                <div className={styles.resetButton}>
                    <Button onClick={game.resetGame}>Скинути гру</Button>
                </div>
            </div>
        </Layout>
    );
}
