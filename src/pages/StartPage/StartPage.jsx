import { useState } from "react";
import Layout from "../../components/Layout/Layout.jsx";
import Button from "../../components/UI/Button.jsx";
import Modal from "../../components/Modal/Modal.jsx";
import SettingsForm from "./SettingsForm.jsx";
import "./StartPage.css";

export default function StartPage({ onStart }) {
    const [showSettings, setShowSettings] = useState(false);

    return (
        <Layout>
            <div className="start-screen">
                <h2>Ласкаво просимо!</h2>
                <p>Натисніть кнопку нижче, щоб розпочати гру.</p>

                <Button onClick={onStart}>Почати гру</Button>
                <Button onClick={() => setShowSettings(true)}>Налаштування</Button>
            </div>

            {showSettings && (
                <Modal>
                    <SettingsForm onClose={() => setShowSettings(false)} />
                </Modal>
            )}
        </Layout>
    );
}
