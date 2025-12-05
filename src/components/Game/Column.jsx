import Cell from "./Cell";

export default function Column({ column, onClick }) {
    return (
        <div onClick={onClick}>
            {column.map((value, index) => (
                <Cell key={index} value={value} />
            ))}
        </div>
    );
}
