import React, { useState, useEffect } from "react";

export default function MovieManager() {
  const [formData, setFormData] = useState({
    moviesTitle: "",
    moviesGenration: "",
    moviesRating: "",
    moviesDiscription: "", // ✅ backend ke hisaab se
    moviesUrl: "",
  });

  const [movies, setMovies] = useState([]);

  const token = localStorage.getItem("token");

  // 🟢 Fetch movies on mount
  useEffect(() => {
    fetch("https://netflix-clone-full-stack-app.onrender.com/api/usermoviesDataList/getAllmoviesData", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setMovies(data))
      .catch((err) => console.error(err));
  }, [token]);

  // 🟢 Handle form input
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 🟢 Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.moviesTitle || !formData.moviesGenration) {
      alert("Please fill all required fields");
      return;
    }

    try {
      const response = await fetch(
        "https://netflix-clone-full-stack-app.onrender.com/api/usermoviesDataList/post",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            moviesTitle: formData.moviesTitle,
            moviesGenration: formData.moviesGenration,
            moviesRating: Number(formData.moviesRating),
            moviesDiscription: formData.moviesDiscription, // ✅ backend key
            moviesUrl: formData.moviesUrl,
          }),
        }
      );

      const data = await response.json();
      setMovies([...movies, data]); // UI update
      setFormData({
        moviesTitle: "",
        moviesGenration: "",
        moviesRating: "",
        moviesDiscription: "",
        moviesUrl: "",
      });
    } catch (err) {
      console.error(err);
      alert("Error adding movie");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white px-6 py-10">
      <h1 className="text-3xl font-bold text-center mb-10">
        🎬 Add Your Movies & See Your Collection
      </h1>

      {/* FORM */}
      <div className="max-w-xl mx-auto bg-gray-900 p-6 rounded-2xl shadow-lg">
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="moviesTitle"
            value={formData.moviesTitle}
            onChange={handleChange}
            placeholder="Movie Title"
            required
            className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-red-600 focus:outline-none"
          />
          <input
            type="text"
            name="moviesGenration"
            value={formData.moviesGenration}
            onChange={handleChange}
            placeholder="Genre / Generation"
            required
            className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-red-600 focus:outline-none"
          />
          <input
            type="number"
            name="moviesRating"
            value={formData.moviesRating}
            onChange={handleChange}
            placeholder="Rating (1–10)"
            min="0"
            max="10"
            step="0.1"
            className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-red-600 focus:outline-none"
          />
          <input
            type="url"
            name="moviesUrl"
            value={formData.moviesUrl}
            onChange={handleChange}
            placeholder="Poster Image URL"
            className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-red-600 focus:outline-none"
          />
          <textarea
            name="moviesDiscription" // ✅ backend-compatible
            value={formData.moviesDiscription}
            onChange={handleChange}
            placeholder="Movie Description"
            rows="3"
            className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-red-600 focus:outline-none"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-red-600 py-3 rounded-lg text-lg font-semibold hover:bg-red-700 transition-all"
          >
            Add Movie
          </button>
        </form>
      </div>

      {/* DISPLAY MOVIES */}
      <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies.length === 0 ? (
          <p className="text-center text-gray-400 col-span-full">
            No movies added yet.
          </p>
        ) : (
          movies.map((movie) => (
            <div
              key={movie._id}
              className="bg-gray-900 rounded-xl overflow-hidden shadow-md border border-gray-800 hover:scale-105 transition-transform"
            >
              {movie.moviesUrl ? (
                <img
                  src={movie.moviesUrl}
                  alt={movie.moviesTitle}
                  className="w-full h-48 object-cover"
                />
              ) : (
                <div className="w-full h-48 bg-gray-800 flex items-center justify-center text-gray-600">
                  No Image
                </div>
              )}
              <div className="p-4">
                <h2 className="text-xl font-bold text-red-500">
                  {movie.moviesTitle}
                </h2>
                <p className="text-sm text-gray-400 mb-1">
                  Genre: {movie.moviesGenration}
                </p>
                <p className="text-sm text-gray-400 mb-1">
                  Rating: {movie.moviesRating || "N/A"}
                </p>
                <p className="text-gray-300 text-sm line-clamp-3">
                  {movie.moviesDiscription || "No description provided."}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
