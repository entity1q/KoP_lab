import "./Cell.css";

export default function Cell({ value }) {
    return (
        <div
            className="cell"
            style={{
                background: value === "R" ? "red" : value === "Y" ? "yellow" : "white",
            }}
        />
    );
}
