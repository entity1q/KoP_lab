import { useState } from "react";
import StartPage from "./pages/StartPage/StartPage.jsx";
import GamePage from "./pages/GamePage/GamePage.jsx";
import ResultPage from "./pages/ResultPage/ResultPage.jsx";

function App() {
  const [page, setPage] = useState("start");
    const [resultWinner, setResultWinner] = useState(null);
    const [resultDraw, setResultDraw] = useState(false);


    if (page === "start") return <StartPage onStart={() => setPage("game")} />;
    if (page === "game")
        return (
            <GamePage
                onFinish={(winner, isDraw) => {
                    setResultWinner(winner);
                    setResultDraw(isDraw);
                    setPage("result");
                }}
            />
        );
    if (page === "result")
        return (
            <ResultPage
                winner={resultWinner}
                isDraw={resultDraw}
                onRestart={() => {
                    setPage("start");
                }}
            />
        );


    return null;
}

export default App;
