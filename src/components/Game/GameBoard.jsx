import Column from "./Column";
import "./GameBoard.css";
import { useGameSettings } from "../../context/GameSettingsContext";

export default function GameBoard({ board, onDrop }) {
    const { settings } = useGameSettings();

    return (
        <div className="game-board">
            {board[0].map((_, columnIndex) => (
                <Column
                    key={columnIndex}
                    column={board.map((row) => row[columnIndex])}
                    onClick={() => onDrop(columnIndex)}
                    player1Color={settings.player1Color}
                    player2Color={settings.player2Color}
                />
            ))}
        </div>
    );
}
