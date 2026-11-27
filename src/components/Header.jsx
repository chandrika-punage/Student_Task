
function Header({ onMenuClick }) {
  return (
    <header className="header">
      <button
        className="hamburger"
        onClick={onMenuClick}
        aria-label="Open sidebar"
      >
        ☰
      </button>

      <h1>Student Portal</h1>
    </header>
  );
}

export default Header;
