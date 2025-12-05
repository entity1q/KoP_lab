import "./Button.css";

export default function Button({ children, onClick }) {
  return (
    <button className="ui-btn" onClick={onClick}>
      {children}
    </button>
  );
}
