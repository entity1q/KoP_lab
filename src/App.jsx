import { useState } from "react";
import StartPage from "./pages/StartPage/StartPage.jsx";
import GamePage from "./pages/GamePage/GamePage.jsx";
import ResultPage from "./pages/ResultPage/ResultPage.jsx";

function App() {
  const [page, setPage] = useState("start");

  if (page === "start") return <StartPage onStart={() => setPage("game")} />;
  if (page === "game") return <GamePage onFinish={() => setPage("result")} />;
  if (page === "result") return <ResultPage onRestart={() => setPage("start")} />;

  return null;
}

export default App;
