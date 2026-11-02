function GameSummary({ totalGames, playingGames, completedGames }) {
  return (
    <section className="game-summary">
      <div className="summary-card">
        <div className="summary-icon">▤</div>
        <div>
          <p>Total Games</p>
          <h2>{totalGames}</h2>
        </div>
      </div>

      <div className="summary-card">
        <div className="summary-icon">▶</div>
        <div>
          <p>Playing</p>
          <h2>{playingGames}</h2>
        </div>
      </div>

      <div className="summary-card">
        <div className="summary-icon">✓</div>
        <div>
          <p>Completed</p>
          <h2>{completedGames}</h2>
        </div>
      </div>
    </section>
  );
}

export default GameSummary;