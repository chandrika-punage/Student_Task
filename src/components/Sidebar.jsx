
function Sidebar({ isOpen, onClose, activeTab, setActiveTab }) {
  const items = [
    "All Details",
    "Student Info",
    "Student Details",
    "Address Details",
    "Contact Details",
  ];

  if (!isOpen) return null;

  return (
    <div className="sidebar-wrapper">
      <div className="sidebar-overlay" onClick={onClose}></div>

      <aside className="sidebar">
        <div className="sidebar-top">
          <h2>Navigation</h2>
          <button className="close-sidebar" onClick={onClose}>
            ✕
          </button>
        </div>

        {items.map((item) => (
          <button
            key={item}
            className={`sidebar-link ${
              activeTab === item ? "selected" : ""
            }`}
            onClick={() => {
              setActiveTab(item);
              onClose();
            }}
          >
            {item}
          </button>
        ))}
      </aside>
    </div>
  );
}

export default Sidebar;
