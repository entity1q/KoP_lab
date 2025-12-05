import Layout from "../../components/Layout/Layout.jsx";
import Button from "../../components/UI/Button.jsx";
import Card from "../../components/UI/Card.jsx";
import "./ResultPage.css";

export default function ResultPage({ onRestart }) {
  return (
    <Layout>
      <div className="result-page">
        <Card>
          <h2>Результати гри</h2>
          <p className="result-text">Переміг: гравець X</p>
          <Button onClick={onRestart}>Зіграти ще раз</Button>
        </Card>
      </div>
    </Layout>
  );
}
