import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // 👈 for navigation after login

  async function handleLogin(e) {
    e.preventDefault(); // 🛑 stop form reload

    try {
      const res = await fetch("http://localhost:7000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Login successful!");
        // ✅ optionally store token
        localStorage.setItem("token", data.token);
        navigate("/chooseplan"); // redirect to home page
      } else {
        alert(data.message || "Invalid credentials");
      }
    } catch (err) {
      console.error("Login error:", err);
      alert("Something went wrong. Try again.");
    }
  }

  return (
    <div className="relative h-screen bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/7bccc68b-8b8e-4e57-b739-3a20b17a5c8c/9b8321a0-45b0-43d4-9c16-c933bb4e65ed/IN-en-20241104-popsignuptwoweeks-perspective_alpha_website_large.jpg')] bg-cover bg-center">
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Netflix logo */}
      <div className="absolute top-6 left-10">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="Netflix Logo"
          className="w-32"
        />
      </div>

      {/* Login form */}
      <div className="flex justify-center items-center h-full relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-black/75 p-10 rounded-2xl w-full max-w-md shadow-lg"
        >
          <h1 className="text-3xl font-bold mb-6 text-center">Sign In</h1>

          <form className="flex flex-col space-y-4" onSubmit={handleLogin}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email or phone number"
              className="p-3 bg-[#333] rounded text-white outline-none focus:ring-2 focus:ring-red-600"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="p-3 bg-[#333] rounded text-white outline-none focus:ring-2 focus:ring-red-600"
            />

            <button
              type="submit"
              className="bg-red-600 py-3 rounded font-semibold hover:bg-red-700 transition"
            >
              Sign In
            </button>

            <div className="flex justify-between items-center text-sm text-gray-400">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2 accent-red-600" /> Remember me
              </label>
              <p className="cursor-pointer hover:underline">Need help?</p>
            </div>
          </form>

          <p className="text-gray-400 mt-6 text-center">
            New to Netflix?{" "}
            <Link to="/signup" className="text-white hover:underline">
              Sign up now
            </Link>
          </p>

          <p className="text-gray-500 text-xs mt-4 text-center">
            This page is protected by Google reCAPTCHA to ensure you're not a bot.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
