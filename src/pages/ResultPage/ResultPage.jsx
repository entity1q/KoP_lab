import Layout from "../../components/Layout/Layout";
import Button from "../../components/UI/Button";
import Card from "../../components/UI/Card";
import "./ResultPage.css";

export default function ResultPage({ winner, isDraw, onRestart }) {
    return (
        <Layout>
            <div className="result-page">
                <Card>
                    <h2>Результати гри</h2>

                    <p>
                        {isDraw
                            ? "Нічия!"
                            : `Переміг гравець: ${winner}`}
                    </p>

                    <Button onClick={onRestart}>Зіграти ще раз</Button>
                </Card>
            </div>
        </Layout>
    );
}
