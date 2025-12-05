import Layout from "../../components/Layout/Layout";
import GameBoard from "../../components/Game/GameBoard";
import Button from "../../components/UI/Button";
import "./GamePage.css";
import { useGameState } from "../../hooks/useGameState";

export default function GamePage({ onFinish }) {
    const game = useGameState();

    if (game.winner || game.isDraw) {
        onFinish(game.winner, game.isDraw);
    }

    return (
        <Layout>
            <div className="game-page">
                <p>Хід гравця: {game.currentPlayer}</p>

                <GameBoard board={game.board} onDrop={game.dropDisc} />

                <Button onClick={game.resetGame}>Скинути гру</Button>
            </div>
        </Layout>
    );
}
