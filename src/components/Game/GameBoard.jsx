import Column from "./Column.jsx";
import "./GameBoard.css";

export default function GameBoard() {
  const columns = Array.from({ length: 7 });

  return (
    <div className="game-board">
      {columns.map((_, index) => (
        <Column key={index} />
      ))}
    </div>
  );
}
