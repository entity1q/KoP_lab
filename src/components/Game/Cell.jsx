import "./Cell.css";

export default function Cell({ value, player1Color, player2Color }) {
    let color = "white";

    if (value === "R") color = player1Color;
    if (value === "Y") color = player2Color;

    return (
        <div
            className="cell"
            style={{
                background: color,
            }}
        />
    );
}
