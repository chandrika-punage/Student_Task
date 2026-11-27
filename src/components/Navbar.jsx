
function Navbar({ activeTab, setActiveTab }) {
  const navItems = [
    "Student Info",
    "Student Details",
    "Address Details",
    "Contact Details",
  ];

  return (
    <nav className="navbar">
      {navItems.map((item) => (
        <button
          key={item}
          className={`nav-button ${
            activeTab === item ? "active" : ""
          }`}
          onClick={() => setActiveTab(item)}
        >
          {item}
        </button>
      ))}
    </nav>
  );
}

export default Navbar;
