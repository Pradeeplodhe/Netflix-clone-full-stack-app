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
      const res = await fetch("https://netflix-clone-full-stack-app.onrender.com/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Login successful!");
        localStorage.setItem("token", data.token);
        localStorage.setItem("userMail", email);
        navigate("/chooseplan");
      } else {
        alert(data.message || "Invalid credentials");
      }
    } catch (err) {
      console.error("Login error:", err);
      alert("Something went wrong. Try again.");
    }
  }

  return (
    <div
     
    
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url(https://www.bing.com/ck/a?!&&p=ccd173991a673c2fc1c85eafada89faa35684f13d83caf2d402c9a171348f5a7JmltdHM9MTc2MjkwNTYwMA&ptn=3&ver=2&hsh=4&fclid=37d21b21-a316-6181-02d6-0885a2176052&u=a1L2ltYWdlcy9zZWFyY2g_cT1pbWFnZSZpZD1FMkFEMTkzQTg4Mzg1MERDOTZBOTYwMTNEQjVGMTlBMjlDQTY2MkY4JkZPUk09SVFGUkJB)",
      }}
    >

       <div>

         </div>
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Netflix logo */}
      

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
             
              Sign In WatchNChat🍿
            </button>

            <div className="flex justify-between items-center text-sm text-gray-400">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2 accent-red-600" /> Remember me
              </label>
              <p className="cursor-pointer hover:underline">Need help?</p>
            </div>
          </form>

          <p className="text-gray-400 mt-6 text-center">
            New to WatchNChat{" "}
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
