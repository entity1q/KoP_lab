import { useState } from "react";

export function useGameState() {
    const EMPTY_BOARD = Array.from({ length: 6 }, () => Array(7).fill(null));

    const [board, setBoard] = useState(EMPTY_BOARD);
    const [currentPlayer, setCurrentPlayer] = useState("R");
    const [winner, setWinner] = useState(null);
    const [isDraw, setIsDraw] = useState(false);

    function dropDisc(columnIndex) {
        if (winner || isDraw) return;

        const newBoard = board.map((row) => [...row]);

        for (let row = 5; row >= 0; row--) {
            if (newBoard[row][columnIndex] === null) {
                newBoard[row][columnIndex] = currentPlayer;
                break;
            }
        }

        setBoard(newBoard);

        const win = checkWinner(newBoard);
        if (win) {
            setWinner(currentPlayer);
            return;
        }

        if (checkDraw(newBoard)) {
            setIsDraw(true);
            return;
        }

        setCurrentPlayer((p) => (p === "R" ? "Y" : "R"));
    }

    function checkDraw(board) {
        return board.every((row) => row.every((cell) => cell !== null));
    }

    function checkWinner(board) {
        const directions = [
            { x: 1, y: 0 },
            { x: 0, y: 1 },
            { x: 1, y: 1 },
            { x: 1, y: -1 },
        ];

        for (let row = 0; row < 6; row++) {
            for (let col = 0; col < 7; col++) {
                const player = board[row][col];
                if (!player) continue;

                for (const { x, y } of directions) {
                    if (checkLine(board, row, col, x, y, player)) return player;
                }
            }
        }
        return null;
    }

    function checkLine(board, r, c, dx, dy, player) {
        for (let i = 1; i < 4; i++) {
            const nr = r + dy * i;
            const nc = c + dx * i;

            if (nr < 0 || nr >= 6 || nc < 0 || nc >= 7) return false;
            if (board[nr][nc] !== player) return false;
        }
        return true;
    }

    function resetGame() {
        setBoard(EMPTY_BOARD);
        setCurrentPlayer("R");
        setWinner(null);
        setIsDraw(false);
    }

    return {
        board,
        currentPlayer,
        winner,
        isDraw,
        dropDisc,
        resetGame,
    };
}
