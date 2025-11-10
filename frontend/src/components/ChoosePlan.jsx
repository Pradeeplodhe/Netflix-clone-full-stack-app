import React from "react";
import { motion } from "framer-motion";
import { Link,Navigate,useNavigate } from "react-router-dom";

export default function ChoosePlan() {
  const navigate=useNavigate();
  const plans = [
    {
      name: "Basic",
      price: "₹199 / month",
      quality: "Good",
      resolution: "480p",
      features: [
        "Watch on 1 device at a time",
        "Unlimited movies and TV shows",
        "Download on 1 device",
      ],
    },
    {
      name: "Standard",
      price: "₹499 / month",
      quality: "Better",
      resolution: "1080p",
      features: [
        "Watch on 2 devices at a time",
        "Unlimited movies and TV shows",
        "Download on 2 devices",
      ],
    },
    {
      name: "Premium",
      price: "₹649 / month",
      quality: "Best",
      resolution: "4K + HDR",
      features: [
        "Watch on 4 devices at a time",
        "Ultra HD and HDR quality",
        "Download on 4 devices",
      ],
    },
     {
      name: "Premium",
      price: "₹649 / month",
      quality: "Best",
      resolution: "4K + HDR",
      features: [
        "Watch on 4 devices at a time",
        "Ultra HD and HDR quality",
        "Download on 4 devices",
      ],
    },
     {
      name: "Premium",
      price: "₹649 / month",
      quality: "Best",
      resolution: "4K + HDR",
      features: [
        "Watch on 4 devices at a time",
        "Ultra HD and HDR quality",
        "Download on 4 devices",
      ],
    }, {
      name: "Premium",
      price: "₹649 / month",
      quality: "Best",
      resolution: "4K + HDR",
      features: [
        "Watch on 4 devices at a time",
        "Ultra HD and HDR quality",
        "Download on 4 devices",
      ],
    },

  ];

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/7bccc68b-8b8e-4e57-b739-3a20b17a5c8c/9b8321a0-45b0-43d4-9c16-c933bb4e65ed/IN-en-20241104-popsignuptwoweeks-perspective_alpha_website_large.jpg')] bg-cover bg-center opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black" />

      {/* Netflix Logo */}
      <div className="absolute top-6 left-10 z-10">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="Netflix"
          className="w-32"
        />
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex flex-col items-center text-center px-4 pt-28"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Choose the plan that’s right for you
        </h1>
        <p className="text-gray-300 max-w-2xl text-lg leading-relaxed">
          Watch everything on Netflix — at one low price. Flexible plans that
          fit your needs. Cancel anytime.
        </p>
      </motion.div>

      {/* Plans Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-8 mt-14 max-w-7xl mx-auto"
      >
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            whileHover={{ scale: 1.08 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className={`relative rounded-2xl overflow-hidden shadow-xl backdrop-blur-md border-2 transition-all p-8 cursor-pointer
              ${
                plan.name === "Premium"
                  ? "border-red-600 bg-gradient-to-b from-[#1a0000]/90 via-[#0c0c0c]/80 to-black"
                  : "border-gray-700 bg-[#0f0f0f]/80 hover:border-red-600"
              }`}
          >
            {/* Glowing border effect */}
            {plan.name === "Premium" && (
              <div className="absolute inset-0 rounded-2xl border-2 border-red-600 animate-pulse opacity-40"></div>
            )}

            <h2 className="text-2xl font-semibold mb-3">{plan.name}</h2>
            <p className="text-red-500 text-2xl font-bold mb-4">
              {plan.price}
            </p>

            <div className="text-gray-300 text-sm mb-6">
              <p>Video Quality: {plan.quality}</p>
              <p>Resolution: {plan.resolution}</p>
            </div>

            <ul className="text-gray-400 text-sm space-y-2 text-left mb-8">
              {plan.features.map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <span className="text-red-500">✔</span> {f}
                </li>
              ))}
            </ul>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="w-full bg-red-600 py-3 rounded-lg font-semibold hover:bg-red-700 transition-all shadow-md hover:shadow-red-600/50"
            >
              Choose {plan.name}
            </motion.button>
          </motion.div>
        ))}
      </motion.div>



<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-all duration-300"
>
  Proceed to Payment
</motion.button>

      {/* Footer */}
      <div className="relative z-10 mt-20 text-gray-500 text-sm text-center pb-10">
        
        <p>Plans start at just ₹1299. Enjoy on your phone, tablet, laptop, and TV.</p>
      <motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="bg-red-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-all duration-300"
onClick={()=>{
  console.log("paln button")
  navigate("/payment")
}}

>
  Proceed to Payment
</motion.button>

<button
  className="bg-gradient-to-r from-red-700 to-red-600 hover:from-red-600 hover:to-red-500 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:shadow-red-600/40 transition-all duration-300"

onClick={()=>{
  console.log("paln button")
  navigate("/home")
}}
>
  Use 7 Days Free
</button>


      </div>

    </div>
  );
}
