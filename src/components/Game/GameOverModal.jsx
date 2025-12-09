import Modal from "../Modal/Modal";

export default function GameOverModal({
                                          winner,
                                          isDraw,
                                          wins,
                                          isFinal,
                                          onNextRound,
                                          onRestart,
                                      }) {
    const scoreText = `R — ${wins.R} | Y — ${wins.Y}`;

    return (
        <Modal>
            {isFinal ? (
                <>
                    <h2>Матч завершено!</h2>
                    <p>🏆 Переміг гравець: {winner}</p>
                    <p style={{ fontWeight: "bold" }}>Фінальний рахунок: {scoreText}</p>
                    <button onClick={onRestart}>Повернутися в меню</button>
                </>
            ) : (
                <>
                    <h2>Гру завершено</h2>
                    <p>{isDraw ? "Нічия!" : `Переміг гравець: ${winner}`}</p>
                    <p style={{ fontWeight: "bold" }}>Рахунок: {scoreText}</p>

                    <button onClick={onNextRound}>Наступний тур</button>
                    <button onClick={onRestart}>Повернутися в меню</button>
                </>
            )}
        </Modal>
    );
}
