import { useState } from "react";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import GameSummary from "./components/GameSummary";
import GameList from "./components/GameList";
import GameForm from "./components/GameForm";

import "./App.css";

function App() {
  const [showForm, setShowForm] = useState(false);

  const [games, setGames] = useState([
        {
      id: 1,
      title: "God of War",
      platform: "PC",
      genre: "Action RPG",
      status: "Playing",
      progress: 51,
      rating: 9
    },
    {
      id: 2,
      title: "Monster Hunter Wilds",
      platform: "PC",
      genre: "Action RPG",
      status: "Want to Play",
      progress: 0,
      rating: 0
    },
    {
      id: 3,
      title: "Miside",
      platform: "PC",
      genre: "Psychological Horror",
      status: "Completed",
      progress: 100,
      rating: 8
    },
    {
      id: 4,
      title: "OMORI",
      platform: "PC",
      genre: "Psychological Horror",
      status: "Completed",
      progress: 100,
      rating: 10
    }
  ]);
  // Menambahkan game ke daftar game
  function handleAddGame(newGame) {
    setGames([...games, newGame]);
    setShowForm(false);
  }

  // Menghitung statistik game
  const playingGames = games.filter(
    (game) => game.status === "Playing"
  ).length;

  const completedGames = games.filter(
    (game) => game.status === "Completed"
  ).length;

  return (
    <div className="app-container">
      <Sidebar />

      <main className="main-content">
        <Header
          onAddGame={() => setShowForm(!showForm)}
        />

        <GameSummary
          totalGames={games.length}
          playingGames={playingGames}
          completedGames={completedGames}
        />

        {showForm && (
          <GameForm onAddGame={handleAddGame} />
        )}

        <section className="game-collection">
          <div className="section-header">
            <h2>My Games</h2>
          </div>

          <GameList games={games} />
        </section>
      </main>
    </div>
  );
}

export default App;