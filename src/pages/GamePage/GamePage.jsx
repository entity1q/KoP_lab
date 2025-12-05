import Layout from "../../components/Layout/Layout.jsx";
import GameBoard from "../../components/Game/GameBoard.jsx";
import Button from "../../components/UI/Button.jsx";
import "./GamePage.css";

export default function GamePage({ onFinish }) {
  return (
    <Layout>
      <div className="game-page">
        <GameBoard />
        <Button onClick={onFinish}>Завершити гру</Button>
      </div>
    </Layout>
  );
}
