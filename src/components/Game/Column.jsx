import Cell from "./Cell.jsx";

export default function Column() {
  const cells = Array.from({ length: 6 });

  return (
    <div>
      {cells.map((_, index) => (
        <Cell key={index} />
      ))}
    </div>
  );
}
