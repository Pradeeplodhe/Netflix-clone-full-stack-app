import React, { useState, useEffect } from "react";
import "./search.css";

export default function Search() {
  const [query, setQuery] = useState("popular");
  const [dataM, setDataM] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchMovies = (searchTerm) => {
    if (!searchTerm) return;
    setLoading(true);

    fetch(`https://imdb.iamidiotareyoutoo.com/search?q=${searchTerm}`)
      .then((res) => res.json())
      .then((data) => {
        setDataM(data.description || []);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching movie data:", error);
        setLoading(false);
      });
  };

  // Initial Fetch
  useEffect(() => {
    fetchMovies(query);
  }, []);

  // Handle Search
  const handleSearch = (e) => {
    e.preventDefault();
    fetchMovies(query);
  };

  return (
    <div className="search-page">
      {/* Header + Search Bar */}
      <div className="search-header">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="Netflix"
          className="netflix-logo"
        />

        <form onSubmit={handleSearch} className="search-bar">
          <input
            type="text"
            placeholder="Search for movies, shows..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="search-input"
          />
          <button type="submit" className="search-btn">
            🔍
          </button>
        </form>
      </div>

      {/* Title */}
      <h1 className="search-title">
        {query ? `Results for “${query}”` : "Trending Now"}
      </h1>

      {/* Loader */}
      {loading ? (
        <div className="loader">Loading...</div>
      ) : (
        <div className="movie-grid">
          {dataM.length > 0 ? (
            dataM.map((movie, idx) => (
              <div key={idx} className="movie-card">
                <div className="poster-wrapper">
                  <img
                    src={
                      movie["#IMG_POSTER"] ||
                      "https://via.placeholder.com/300x450?text=No+Image"
                    }
                    alt={movie["#TITLE"]}
                    className="poster"
                  />
                  <div className="overlay">
                    <button className="watch-btn">▶ Watch</button>
                  </div>
                </div>

                <div className="movie-details">
                  <h3>{movie["#TITLE"]}</h3>
                  <p className="actors">
                    🎭 {movie["#ACTORS"] || "Unknown"}
                  </p>
                  <p className="desc">{movie["#AKA"] || "No description"}</p>
                  <div className="meta">
                    <span>{movie["#YEAR"] || "N/A"}</span>
                    <span>⭐ Rank: {movie["#RANK"] || "N/A"}</span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="no-results">No movies found.</p>
          )}
        </div>
      )}
    </div>
  );
}
