import React, { useState, useEffect } from "react";

export default function Home() {
  const [movies1, setMovies1] = useState([]);
   const [movies2, setMovies2] = useState([]);
   const [movies3, setMovies3] = useState([]);
   const [movies4, setMovies4] = useState([]);
  

  useEffect(() => {
   
    fetch("https://imdb.iamidiotareyoutoo.com/search?q=bolywood")
      .then((res) => res.json())
      .then((data) => setMovies1(data.description))
      .catch((err) => console.error("Error fetching:", err));
  

     fetch("https://imdb.iamidiotareyoutoo.com/search?q=fault")
      .then((res) => res.json())
      .then((data) => setMovies2(data.description))
      .catch((err) => console.error("Error fetching:", err));
  

         fetch("https://imdb.iamidiotareyoutoo.com/search?q=fight")
      .then((res) => res.json())
      .then((data) => setMovies3(data.description))
      .catch((err) => console.error("Error fetching:", err));
  
  

         fetch("https://imdb.iamidiotareyoutoo.com/search?q=come")
      .then((res) => res.json())
      .then((data) => setMovies4(data.description))
      .catch((err) => console.error("Error fetching:", err));
  
    }, []);

  return (
    <div className="pt-[80px] bg-black text-white min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[85vh] w-full">
        <img
          src="https://images.hdqwalls.com/download/venom-movie-2018-hd-lf-1920x1080.jpg"
        alt="hero"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        <div className="absolute bottom-20 left-12 space-y-4">
          <h1 className="text-5xl font-bold">Breaking Bad</h1>
          <p className="max-w-lg text-gray-300">
            A chemistry teacher diagnosed with cancer turns to manufacturing and selling meth to secure his family's future.
          </p>
          <div className="flex space-x-4">
            <button className="bg-white text-black px-6 py-2 rounded font-semibold hover:bg-gray-300 transition">
              ▶ Play
            </button>
            <button className="bg-gray-600/70 px-6 py-2 rounded font-semibold hover:bg-gray-500 transition">
              ℹ️ More Info
            </button>
          </div>
        </div>
      </div>

      {/* Trending Movies */}
      <div className="px-6 py-10">
        <h2 className="text-2xl font-semibold mb-4">Trending Now</h2>
        <div className="flex overflow-x-scroll scrollbar-hide space-x-4">
          {movies1.slice(0, 10).map((movie, idx) => (
            <div key={idx} className="min-w-[200px]">
              <img
                src={movie["#IMG_POSTER"]}
                alt={movie["#TITLE"]}
                className="rounded-lg hover:scale-105 transition-transform duration-300"
              />
              <p className="mt-2 text-sm text-center">{movie["#TITLE"]}</p>
            </div>
          ))}
        </div>
      </div>


       <div className="px-6 py-0">
        <h2 className="text-2xl font-semibold mb-4">Trending Movies</h2>
        <div className="flex overflow-x-scroll scrollbar-hide space-x-4">
          {movies2.slice(0, 10).map((movie, idx) => (
            <div key={idx} className="min-w-[200px]">
              <img
                src={movie["#IMG_POSTER"]}
                alt={movie["#TITLE"]}
                className="rounded-lg hover:scale-105 transition-transform duration-300"
              />
              <p className="mt-2 text-sm text-center">{movie["#TITLE"]}</p>
            </div>
          ))}
        </div>
      </div>



 <div className="px-6 py-0">
        <h2 className="text-2xl font-semibold mb-4">Thrill Movies</h2>
        <div className="flex overflow-x-scroll scrollbar-hide space-x-4">
          {movies3.slice(0, 10).map((movie, idx) => (
            <div key={idx} className="min-w-[200px]">
              <img
                src={movie["#IMG_POSTER"]}
                alt={movie["#TITLE"]}
                className="rounded-lg hover:scale-105 transition-transform duration-300"
              />
              <p className="mt-2 text-sm text-center">{movie["#TITLE"]}</p>
            </div>
          ))}
        </div>
      </div> <div className="px-6 py-0">
        <h2 className="text-2xl font-semibold mb-4">Horrer Movies</h2>
        <div className="flex overflow-x-scroll scrollbar-hide space-x-4">
          {movies4.slice(0, 10).map((movie, idx) => (
            <div key={idx} className="min-w-[200px]">
              <img
                src={movie["#IMG_POSTER"]}
                alt={movie["#TITLE"]}
                className="rounded-lg hover:scale-105 transition-transform duration-300"
              />
              <p className="mt-2 text-sm text-center">{movie["#TITLE"]}</p>
            </div>
          ))}
        </div>
      </div>


    </div>
  );
}
