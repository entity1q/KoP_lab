import "./Layout.css";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <header className="layout-header">Connect Four</header>
      <main className="layout-main">{children}</main>
    </div>
  );
}
