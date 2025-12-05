import Layout from "../../components/Layout/Layout.jsx";
import Button from "../../components/UI/Button.jsx";
import "./StartPage.css";

export default function StartPage({ onStart }) {
  return (
    <Layout>
      <div className="start-screen">
        <h2>Ласкаво просимо!</h2>
        <p>Натисніть кнопку нижче, щоб розпочати гру.</p>
        <Button onClick={onStart}>Почати гру</Button>
      </div>
    </Layout>
  );
}
