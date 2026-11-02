import GameCard from "./GameCard";
import EmptyState from "./EmptyState";

function GameList({ games }) {
  if (games.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className="game-list">
      {games.map((game) => (
        <GameCard
          key={game.id}
          game={game}
        />
      ))}
    </div>
  );
}

export default GameList;