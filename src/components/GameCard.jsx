function GameCard({ game }) {
  return (
    <article className="game-card">
      <div className="game-cover">
        <span>{game.title.charAt(0)}</span>
      </div>

      <div className="game-details">
        <div className="game-card-header">
          <h3>{game.title}</h3>

          <span className="status-badge">
            {game.status}
          </span>
        </div>

        <div className="game-tags">
          <span>{game.genre}</span>
          <span>{game.platform}</span>
        </div>

        <div className="progress-section">
          <div className="progress-track">
            <div
              className="progress-fill"
              style={{ width: `${game.progress}%` }}
            ></div>
          </div>

          <span>{game.progress}%</span>
        </div>
      </div>
    </article>
  );
}

export default GameCard;