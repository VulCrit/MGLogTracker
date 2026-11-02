function Header({ onAddGame }) {
  return (
    <header className="page-header">
      <div>
        <h1>Game Dashboard</h1>
        <p>
          Track, organize, and manage your game backlog.
        </p>
      </div>

      <button
        className="add-game-button"
        onClick={onAddGame}
      >
        <span>+</span> Add Game
      </button>
    </header>
  );
}

export default Header;