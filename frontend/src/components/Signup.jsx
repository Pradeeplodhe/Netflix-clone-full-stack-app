import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // 👈 For redirect after signup

  async function handleSignup(e) {
    e.preventDefault(); // 🛑 Prevent page reload

    try {
      const res = await fetch("http://localhost:7000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Signup successful!");
        navigate("/login"); // ✅ Redirect to login page
      } else {
        alert(data.message || "Signup failed");
      }
    } catch (err) {
      console.error("Signup error:", err);
      alert("Something went wrong, please try again.");
    }
  }

  return (
    <div className="relative h-screen bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/7bccc68b-8b8e-4e57-b739-3a20b17a5c8c/9b8321a0-45b0-43d4-9c16-c933bb4e65ed/IN-en-20241104-popsignuptwoweeks-perspective_alpha_website_large.jpg')] bg-cover bg-center overflow-hidden">
      {/* Dark Overlay */}

      
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80" />

      {/* Netflix Logo */}
     
      {/* Signup Form */}

      
      <div className="flex justify-center items-center h-full relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="bg-black/75 backdrop-blur-md p-10 rounded-2xl w-full max-w-md shadow-2xl border border-red-600/20"
        >


          
          <h1 className="text-4xl font-bold mb-6 text-center text-white drop-shadow-lg">
            Create Account in WatchNChat🍿
          </h1>

          <form className="flex flex-col space-y-5" onSubmit={handleSignup}>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Full Name"
              className="p-3 bg-[#222] rounded-lg text-white outline-none focus:ring-2 focus:ring-red-600 transition duration-200"
            />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email Address"
              className="p-3 bg-[#222] rounded-lg text-white outline-none focus:ring-2 focus:ring-red-600 transition duration-200"
            />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
              className="p-3 bg-[#222] rounded-lg text-white outline-none focus:ring-2 focus:ring-red-600 transition duration-200"
            />

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="bg-red-600 py-3 rounded-lg font-semibold hover:bg-red-700 transition-all shadow-md hover:shadow-red-600/50"
            >
              Sign Up WatchNChat🍿
            </motion.button>
          </form>

          <p className="text-gray-400 mt-6 text-center">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-white font-medium hover:underline hover:text-red-500 transition"
            >
              Sign In WatchNChat🍿
            </Link>
          </p>

          <p className="text-gray-500 text-xs mt-4 text-center leading-relaxed">
            By signing up, you agree to our{" "}
            <span className="text-gray-300 underline cursor-pointer hover:text-red-400">
              Terms of Use
            </span>{" "}
            and{" "}
            <span className="text-gray-300 underline cursor-pointer hover:text-red-400">
              Privacy Policy
            </span>
            .
          </p>
        </motion.div>
      </div>
    </div>
  );
}
