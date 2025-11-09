import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, Bell, User } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  window.onscroll = () => {
    setIsScrolled(window.scrollY > 60);
    return () => (window.onscroll = null);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center transition-all duration-500 ${
        isScrolled
          ? "bg-black/90 backdrop-blur-md shadow-lg"
          : "bg-gradient-to-b from-black to-transparent"
      }`}
    >
      {/* Left */}
      <div className="flex items-center space-x-8">
        <h1
          onClick={() => navigate("/")}
          className="text-3xl font-bold text-red-600 cursor-pointer tracking-wide"
        >
          NETFLIX
        </h1>
        <div className="hidden md:flex space-x-6 text-gray-200 text-sm">
          <Link to="/">Home</Link>
          <Link to="/tv-shows">TV Shows</Link>
          <Link to="/movies">Movies</Link>
          <Link to="/latest">New & Popular</Link>
          <Link to="/my-list">My List</Link>
        <Link to="/search">Search</Link>
       
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center space-x-6 text-gray-200">
        <Search
          onClick={() => navigate("/search")}
          className="w-5 h-5 cursor-pointer hover:text-white"
        />
        <Bell className="w-5 h-5 cursor-pointer hover:text-white" />
        <div
          onClick={() => navigate("/login")}
          className="flex items-center cursor-pointer hover:text-white"
        >
          <User className="w-6 h-6" />
        </div>
      </div>
    </nav>
  );
}
