import React, { useEffect, useState } from "react";

export default function Movies() {
  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(true);

  const queries = [
    { title: "Avengers Universe", query: "avengers" },
    { title: "Spider-Man Collection", query: "spiderman" },
    { title: "Batman Legacy", query: "batman" },
    { title: "Superman Saga", query: "superman" },
    { title: "Fast & Furious", query: "fast and furious" },
    { title: "Harry Potter", query: "harry potter" },
  ];

  useEffect(() => {
    Promise.all(
      queries.map(({ title, query }) =>
        fetch(`https://imdb.iamidiotareyoutoo.com/search?q=${query}`)
          .then((res) => res.json())
          .then((data) => ({
            title,
            movies: data.description || [],
          }))
      )
    )
      .then((results) => {
        setSections(results);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching movies:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-72 text-gray-400 animate-pulse text-xl tracking-widest">
        Loading Movies...
      </div>
    );
  }

  return (
    <section className="px-6 py-16 bg-gradient-to-b from-[#020202] via-[#0a0a0a] to-black text-white overflow-hidden">
      <h2 className="text-5xl sm:text-6xl font-extrabold mb-14 tracking-wide bg-gradient-to-r from-red-600 via-pink-500 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,0,100,0.3)] text-center">
        🎬 Blockbuster Movies
      </h2>

      {sections.map((section, i) => (
        <div key={i} className="mb-16">
          <h3 className="text-2xl sm:text-3xl font-semibold mb-8 flex items-center gap-3 pl-2">
            <span className="w-2 h-8 bg-gradient-to-b from-red-500 to-fuchsia-600 rounded-full shadow-[0_0_10px_rgba(255,0,100,0.6)]"></span>
            {section.title}
          </h3>

          <div
            className="grid gap-8 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 transition-all duration-500"
            style={{ perspective: "1000px" }}
          >
            {section.movies.slice(0, 6).map((movie, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-3xl bg-gradient-to-b from-[#111] to-[#0a0a0a] shadow-[0_0_25px_rgba(255,255,255,0.08)] hover:shadow-[0_0_35px_rgba(255,0,120,0.4)] transform hover:scale-[1.05] transition-all duration-500 ease-out border border-transparent hover:border-fuchsia-600/50"
              >
                <img
                  src={
                    movie["#IMG_POSTER"] ||
                    "https://via.placeholder.com/300x450?text=No+Poster"
                  }
                  alt={movie["#TITLE"]}
                  className="w-full h-80 object-cover rounded-3xl transition-all duration-700 group-hover:scale-110 group-hover:brightness-75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-5 backdrop-blur-[3px]">
                  <h3 className="text-lg font-bold truncate text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                    {movie["#TITLE"] || "Untitled"}
                  </h3>
                  <p className="text-sm text-gray-300 mt-1">
                    {movie["#YEAR"] || "Unknown Year"}
                  </p>
                </div>

                {/* Glow ring effect */}
                <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-fuchsia-600/40 transition-all duration-500 blur-[0.5px]"></div>

                {/* Floating light animation */}
                <div className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-40 bg-[radial-gradient(circle_at_30%_30%,rgba(255,0,150,0.3),transparent_70%)] transition-all duration-700"></div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
