import Column from "./Column";
import "./GameBoard.css";

export default function GameBoard({ board, onDrop }) {
    return (
        <div className="game-board">
            {board[0].map((_, columnIndex) => (
                <Column
                    key={columnIndex}
                    column={board.map((row) => row[columnIndex])}
                    onClick={() => onDrop(columnIndex)}
                />
            ))}
        </div>
    );
}
