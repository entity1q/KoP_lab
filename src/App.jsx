import { Routes, Route, Navigate } from "react-router-dom";
import StartPage from "./pages/StartPage/StartPage.jsx";
import GamePage from "./pages/GamePage/GamePage.jsx";

function App() {
    return (
        <Routes>
            {/* редірект з кореня */}
            <Route path="/" element={<Navigate to="/user/guest/start" replace />} />

            {/* стартова сторінка з id користувача */}
            <Route path="/user/:userId/start" element={<StartPage />} />

            {/* сторінка гри */}
            <Route path="/user/:userId/game" element={<GamePage />} />

            {/* 404 */}
            <Route path="*" element={<h2>404 — Сторінку не знайдено</h2>} />
        </Routes>
    );
}

export default App;
