import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function PaymentPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const query = new URLSearchParams(location.search);
  const plan = query.get("plan") || "Basic";

  const planDetails = {
    Basic: { price: "₹199", quality: "Good", resolution: "480p" },
    Standard: { price: "₹499", quality: "Better", resolution: "1080p" },
    Premium: { price: "₹649", quality: "Best", resolution: "4K + HDR" },
  };

  const selected = planDetails[plan];

  const handlePayment = (e) => {
    e.preventDefault();
    alert(`✅ Payment Successful for ${plan} Plan!`);
    navigate("/"); // Redirect after payment
  };

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

      {/* Payment Card */}
      <div className="relative z-10 flex justify-center items-center min-h-screen px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-black/70 border border-gray-700 rounded-2xl p-8 w-full max-w-md backdrop-blur-lg shadow-2xl"
        >
          <h2 className="text-3xl font-bold mb-6 text-center">
            Confirm Your Payment
          </h2>

          <div className="bg-[#111] p-5 rounded-xl mb-6 border border-gray-700">
            <h3 className="text-xl font-semibold mb-2 text-red-500">
              {plan} Plan
            </h3>
            <p className="text-gray-300">Price: {selected.price} / month</p>
            <p className="text-gray-300">Quality: {selected.quality}</p>
            <p className="text-gray-300">Resolution: {selected.resolution}</p>
          </div>

          <form className="space-y-4" onSubmit={handlePayment}>
            <input
              type="text"
              placeholder="Cardholder Name"
              className="w-full p-3 bg-[#222] rounded-lg text-white outline-none"
              required
            />
            <input
              type="text"
              placeholder="Card Number"
              maxLength="16"
              className="w-full p-3 bg-[#222] rounded-lg text-white outline-none"
              required
            />

            <div className="flex gap-4">
              <input
                type="text"
                placeholder="MM/YY"
                maxLength="5"
                className="w-1/2 p-3 bg-[#222] rounded-lg text-white outline-none"
                required
              />
              <input
                type="text"
                placeholder="CVV"
                maxLength="3"
                className="w-1/2 p-3 bg-[#222] rounded-lg text-white outline-none"
                required
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-red-600 py-3 rounded-lg font-semibold hover:bg-red-700 transition-all shadow-lg hover:shadow-red-600/50 mt-4"
            >
              Pay {selected.price}
            </motion.button>
          </form>

          <p className="text-gray-500 text-sm text-center mt-6">
            Secured payment powered by Netflix Clone™
          </p>
        </motion.div>
      </div>
    </div>
  );
}
