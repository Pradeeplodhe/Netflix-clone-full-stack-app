import React, { useEffect, useState } from "react";

export default function NewAndPopular() {
  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(true);

  const queries = [
    { title: "New on Netflix", query: "new movies" },
    { title: "Popular Worldwide", query: "popular movies" },
    { title: "Top Picks for You", query: "trending movies" },
  { title: "New on Netflix", query: "new movies" },
    { title: "Popular Worldwide", query: "popular movies" },
    

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
        Loading New & Popular...
      </div>
    );
  }

  return (
    <section className="px-6 py-16 bg-[#0b0b0b] text-white overflow-hidden">
      <h2 className="text-5xl sm:text-6xl font-extrabold mb-16 text-center bg-gradient-to-r from-red-600 via-pink-500 to-purple-600 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,0,120,0.4)]">
        🔥 New & Popular
      </h2>

      {sections.map((section, i) => (
        <div key={i} className="mb-16">
          <h3 className="text-2xl sm:text-3xl font-semibold mb-8 flex items-center gap-3 pl-2">
            <span className="w-2 h-8 bg-gradient-to-b from-red-500 to-pink-600 rounded-full shadow-lg"></span>
            {section.title}
          </h3>

          <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {section.movies.slice(0, 10).map((movie, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[180px] sm:w-[220px] md:w-[240px] snap-center group perspective-1000"
              >
                <div className="relative overflow-hidden rounded-3xl shadow-lg group-hover:shadow-2xl transform transition-all duration-500 hover:scale-105 hover:rotate-[1deg]">
                  <img
                    src={
                      movie["#IMG_POSTER"] ||
                      "https://via.placeholder.com/300x450?text=No+Poster"
                    }
                    alt={movie["#TITLE"]}
                    className="w-full h-80 object-cover rounded-3xl transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm rounded-b-3xl">
                    <h4 className="text-lg font-bold truncate">{movie["#TITLE"] || "Untitled"}</h4>
                    <p className="text-sm text-gray-300 mt-1">{movie["#YEAR"] || "Unknown Year"}</p>
                  </div>
                  <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-pink-500/40 transition-all duration-500"></div>
                  <div className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-40 bg-[radial-gradient(circle_at_30%_30%,rgba(255,0,150,0.25),transparent_70%)] transition-all duration-700 rounded-3xl"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
