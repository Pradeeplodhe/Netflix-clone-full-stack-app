import React, { useEffect, useState } from "react";

export default function TVShows() {
  const [movies, setMovies] = useState([]);
  const [movies2, setMovies2] = useState([]);
const [movies3, setMovies3] = useState([]);
const [movies4, setMovies4] = useState([]);
const [movies5, setMovies5] = useState([]);
const [movies6, setMovies6] = useState([]);


  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://imdb.iamidiotareyoutoo.com/search?q=baalveer")
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.description || []);
        setLoading(false);
      });

   
      fetch("https://imdb.iamidiotareyoutoo.com/search?q=shaktimaan")
      .then((res) => res.json())
      .then((data) => {
        setMovies2(data.description || []);
        setLoading(false);
      })

      
     fetch("https://imdb.iamidiotareyoutoo.com/search?q=hero")
      .then((res) => res.json())
      .then((data) => {
        setMovies3(data.description || []);
        setLoading(false);
      })


      fetch("https://imdb.iamidiotareyoutoo.com/search?q=ramayan")
      .then((res) => res.json())
      .then((data) => {
        setMovies4(data.description || []);
        setLoading(false);
      })
      fetch("https://imdb.iamidiotareyoutoo.com/search?q=hanumaan")
      .then((res) => res.json())
      .then((data) => {
        setMovies5(data.description || []);
        setLoading(false);
      })
      fetch("https://imdb.iamidiotareyoutoo.com/search?q=sonpari")
      .then((res) => res.json())
      .then((data) => {
        setMovies6(data.description || []);
        setLoading(false);
      })




      .catch((err) => {
        console.error("Error fetching:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-72 text-gray-400 animate-pulse text-xl tracking-widest">
        Loading TV Shows...
      </div>
    );
  }

  return (
    <section className="px-6 py-12 bg-gradient-to-b from-[#050505] via-[#0a0a0a] to-black text-white">
      <h2 className="text-4xl sm:text-5xl font-extrabold mb-10 tracking-wide bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(255,0,0,0.3)]">
        TV Shows
      </h2>

      {/* --- Baalveer Section --- */}
      <div className="mb-14">
        <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
          <span className="w-2 h-8 bg-gradient-to-b from-red-500 to-red-700 rounded-full"></span>
          Baalveer Series
        </h3>
        <div className="grid gap-7 grid-cols-2 sm:grid-cols-2 md:grid-cols-6">
          {movies.slice(0, 6).map((movie, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-2xl bg-[#111] shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:shadow-[0_0_25px_rgba(255,0,0,0.25)] transform hover:scale-[1.06] transition-all duration-300 ease-out border border-transparent hover:border-red-500/40"
            >
              <img
                src={movie["#IMG_POSTER"] || "https://via.placeholder.com/300x450"}
                alt={movie["#TITLE"]}
                className="w-full h-72 object-cover rounded-2xl transition-all duration-500 group-hover:scale-110 group-hover:brightness-75"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 backdrop-blur-[2px]">
                <h3 className="text-lg font-semibold truncate text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]">
                  {movie["#TITLE"] || "Unknown Title"}
                </h3>
                <p className="text-sm text-gray-300 mt-1">{movie["#YEAR"] || "N/A"}</p>
              </div>
              <div className="absolute inset-0 border border-transparent group-hover:border-red-500/40 rounded-2xl transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>

   
      {/* --- Shaktimaan Section --- */}
      <div className="mb-14">
        <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
          <span className="w-2 h-8 bg-gradient-to-b from-red-500 to-red-700 rounded-full"></span>
          Shaktimaan Series
        </h3>
        <div className="grid gap-7 grid-cols-2 sm:grid-cols-2 md:grid-cols-6">
          {movies2.slice(0, 6).map((movie, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-2xl bg-[#111] shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:shadow-[0_0_25px_rgba(255,0,0,0.25)] transform hover:scale-[1.06] transition-all duration-300 ease-out border border-transparent hover:border-red-500/40"
            >
              <img
                src={movie["#IMG_POSTER"] || "https://via.placeholder.com/300x450"}
                alt={movie["#TITLE"]}
                className="w-full h-72 object-cover rounded-2xl transition-all duration-500 group-hover:scale-110 group-hover:brightness-75"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 backdrop-blur-[2px]">
                <h3 className="text-lg font-semibold truncate text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]">
                  {movie["#TITLE"] || "Unknown Title"}
                </h3>
                <p className="text-sm text-gray-300 mt-1">{movie["#YEAR"] || "N/A"}</p>
              </div>
              <div className="absolute inset-0 border border-transparent group-hover:border-red-500/40 rounded-2xl transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>



      {/* --- Shaktimaan Section --- */}
      <div className="mb-14">
        <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
          <span className="w-2 h-8 bg-gradient-to-b from-red-500 to-red-700 rounded-full"></span>
          Shaktimaan Series
        </h3>
        <div className="grid gap-7 grid-cols-2 sm:grid-cols-2 md:grid-cols-6">
          {movies3.slice(0, 6).map((movie, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-2xl bg-[#111] shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:shadow-[0_0_25px_rgba(255,0,0,0.25)] transform hover:scale-[1.06] transition-all duration-300 ease-out border border-transparent hover:border-red-500/40"
            >
              <img
                src={movie["#IMG_POSTER"] || "https://via.placeholder.com/300x450"}
                alt={movie["#TITLE"]}
                className="w-full h-72 object-cover rounded-2xl transition-all duration-500 group-hover:scale-110 group-hover:brightness-75"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 backdrop-blur-[2px]">
                <h3 className="text-lg font-semibold truncate text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]">
                  {movie["#TITLE"] || "Unknown Title"}
                </h3>
                <p className="text-sm text-gray-300 mt-1">{movie["#YEAR"] || "N/A"}</p>
              </div>
              <div className="absolute inset-0 border border-transparent group-hover:border-red-500/40 rounded-2xl transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>


      {/* --- Shaktimaan Section --- */}
      <div className="mb-14">
        <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
          <span className="w-2 h-8 bg-gradient-to-b from-red-500 to-red-700 rounded-full"></span>
          Shaktimaan Series
        </h3>
        <div className="grid gap-7 grid-cols-2 sm:grid-cols-2 md:grid-cols-6">
          {movies4.slice(0, 6).map((movie, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-2xl bg-[#111] shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:shadow-[0_0_25px_rgba(255,0,0,0.25)] transform hover:scale-[1.06] transition-all duration-300 ease-out border border-transparent hover:border-red-500/40"
            >
              <img
                src={movie["#IMG_POSTER"] || "https://via.placeholder.com/300x450"}
                alt={movie["#TITLE"]}
                className="w-full h-72 object-cover rounded-2xl transition-all duration-500 group-hover:scale-110 group-hover:brightness-75"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 backdrop-blur-[2px]">
                <h3 className="text-lg font-semibold truncate text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]">
                  {movie["#TITLE"] || "Unknown Title"}
                </h3>
                <p className="text-sm text-gray-300 mt-1">{movie["#YEAR"] || "N/A"}</p>
              </div>
              <div className="absolute inset-0 border border-transparent group-hover:border-red-500/40 rounded-2xl transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>


      {/* --- Shaktimaan Section --- */}
      <div className="mb-14">
        <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
          <span className="w-2 h-8 bg-gradient-to-b from-red-500 to-red-700 rounded-full"></span>
          Shaktimaan Series
        </h3>
        <div className="grid gap-7 grid-cols-2 sm:grid-cols-2 md:grid-cols-6">
          {movies5.slice(0, 6).map((movie, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-2xl bg-[#111] shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:shadow-[0_0_25px_rgba(255,0,0,0.25)] transform hover:scale-[1.06] transition-all duration-300 ease-out border border-transparent hover:border-red-500/40"
            >
              <img
                src={movie["#IMG_POSTER"] || "https://via.placeholder.com/300x450"}
                alt={movie["#TITLE"]}
                className="w-full h-72 object-cover rounded-2xl transition-all duration-500 group-hover:scale-110 group-hover:brightness-75"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 backdrop-blur-[2px]">
                <h3 className="text-lg font-semibold truncate text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]">
                  {movie["#TITLE"] || "Unknown Title"}
                </h3>
                <p className="text-sm text-gray-300 mt-1">{movie["#YEAR"] || "N/A"}</p>
              </div>
              <div className="absolute inset-0 border border-transparent group-hover:border-red-500/40 rounded-2xl transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>


      {/* --- Shaktimaan Section --- */}
      <div className="mb-14">
        <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
          <span className="w-2 h-8 bg-gradient-to-b from-red-500 to-red-700 rounded-full"></span>
          Shaktimaan Series
        </h3>
        <div className="grid gap-7 grid-cols-2 sm:grid-cols-2 md:grid-cols-6">
          {movies6.slice(0, 6).map((movie, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-2xl bg-[#111] shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:shadow-[0_0_25px_rgba(255,0,0,0.25)] transform hover:scale-[1.06] transition-all duration-300 ease-out border border-transparent hover:border-red-500/40"
            >
              <img
                src={movie["#IMG_POSTER"] || "https://via.placeholder.com/300x450"}
                alt={movie["#TITLE"]}
                className="w-full h-72 object-cover rounded-2xl transition-all duration-500 group-hover:scale-110 group-hover:brightness-75"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 backdrop-blur-[2px]">
                <h3 className="text-lg font-semibold truncate text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]">
                  {movie["#TITLE"] || "Unknown Title"}
                </h3>
                <p className="text-sm text-gray-300 mt-1">{movie["#YEAR"] || "N/A"}</p>
              </div>
              <div className="absolute inset-0 border border-transparent group-hover:border-red-500/40 rounded-2xl transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>






    </section>
  );
}
