function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <div className="brand-icon">🎮</div>

        <div>
          <h2>MGBLogTracker</h2>
          <p>My Game Backlog Tracker</p>
        </div>
      </div>

      <nav className="sidebar-nav">
        <a href="#" className="nav-link active">
          <span>▦</span>
          Dashboard
        </a>

        <a href="#" className="nav-link">
          <span>🎮</span>
          My Games
        </a>
      </nav>

      <div className="sidebar-bottom">
        <a href="#" className="nav-link">
          <span>⚙</span>
          Settings
        </a>
      </div>
    </aside>
  );
}

export default Sidebar;