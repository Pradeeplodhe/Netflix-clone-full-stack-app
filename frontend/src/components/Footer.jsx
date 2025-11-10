import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-10 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-sm mb-6">
          Questions? Call{" "}
          <a href="tel:000-800-919-1694" className="hover:underline text-gray-300">
            000-800-919-1694
          </a>
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-sm">
          <a href="#" className="hover:underline">FAQ</a>
          <a href="#" className="hover:underline">Help Centre</a>
          <a href="#" className="hover:underline">Account</a>
          <a href="#" className="hover:underline">Media Centre</a>
          <a href="#" className="hover:underline">Investor Relations</a>
          <a href="#" className="hover:underline">Jobs</a>
          <a href="#" className="hover:underline">Ways to Watch</a>
          <a href="#" className="hover:underline">Terms of Use</a>
          <a href="#" className="hover:underline">Privacy</a>
          <a href="#" className="hover:underline">Cookie Preferences</a>
          <a href="#" className="hover:underline">Corporate Information</a>
          <a href="#" className="hover:underline">Contact Us</a>
        </div>

        <div className="mt-6">
          <select
            className="bg-black border border-gray-600 text-gray-300 px-3 py-2 rounded-md text-sm focus:outline-none"
          >
            <option>English</option>
            <option>हिन्दी</option>
          </select>
        </div>

        <p className="text-sm text-gray-500 mt-6">Netflix India</p>
      </div>
    </footer>
  );
}
