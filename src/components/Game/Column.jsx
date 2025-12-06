import Cell from "./Cell";

export default function Column({ column, onClick, player1Color, player2Color }) {
    return (
        <div onClick={onClick}>
            {column.map((value, index) => (
                <Cell
                    key={index}
                    value={value}
                    player1Color={player1Color}
                    player2Color={player2Color}
                />
            ))}
        </div>
    );
}
