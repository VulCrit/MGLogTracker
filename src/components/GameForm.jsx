import { useState } from "react";

function GameForm({ onAddGame }) {
  const [formData, setFormData] = useState({
    title: "",
    platform: "",
    genre: "",
    status: "Want to Play",
    progress: 0,
    rating: 0
  });

  // Mengubah nilai input
  function handleChange(event) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value
    });
  }

  // Mengirim data game
  function handleSubmit(event) {
    event.preventDefault();

    if (!formData.title.trim() ||
        !formData.platform ||
        !formData.genre.trim()) {
      alert("Please complete all required fields!");
      return;
    }

    const newGame = {
      ...formData,
      id: Date.now(),
      progress: Number(formData.progress),
      rating: Number(formData.rating)
    };

    onAddGame(newGame);

    setFormData({
      title: "",
      platform: "",
      genre: "",
      status: "Want to Play",
      progress: 0,
      rating: 0
    });
  }

  return (
    <section className="game-form-section" id="add-game-form">
      <div className="form-heading">
        <h2>Add New Game</h2>
        <p>Add a new game to your personal backlog.</p>
      </div>

      <form className="game-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Game Title</label>
          <input
            type="text"
            name="title"
            placeholder="Enter game title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Platform</label>
            <select
              name="platform"
              value={formData.platform}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Select platform
              </option>
              <option value="PC">PC</option>
              <option value="PlayStation">PlayStation</option>
              <option value="Xbox">Xbox</option>
              <option value="Nintendo Switch">Nintendo Switch</option>
              <option value="Mobile">Mobile</option>
            </select>
          </div>

          <div className="form-group">
            <label>Genre</label>
            <input
              type="text"
              name="genre"
              placeholder="e.g. Action RPG"
              value={formData.genre}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Status</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
            >
              <option value="Want to Play">Want to Play</option>
              <option value="Playing">Playing</option>
              <option value="Completed">Completed</option>
            </select>
          </div>

          <div className="form-group">
            <label>Progress (%)</label>
            <input
              type="number"
              name="progress"
              min="0"
              max="100"
              value={formData.progress}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-group">
          <label>Rating (0-10)</label>
          <input
            type="number"
            name="rating"
            min="0"
            max="10"
            value={formData.rating}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="submit-game-button">
          Add Game
        </button>
      </form>
    </section>
  );
}

export default GameForm;