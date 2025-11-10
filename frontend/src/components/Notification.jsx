import React, { useState } from "react";
import { Bell } from "lucide-react"; // npm install lucide-react

export default function Notification() {
  const [open, setOpen] = useState(false);

  const notifications = [
    {
      id: 1,
      title: "Plan Reminder",
      message: "Your Premium plan renews on Nov 15, 2025.",
      time: "Just now",
    },
    {
      id: 2,
      title: "New Release",
      message: "‘Money Heist: Season 6’ is now streaming in 4K!",
      time: "1 hr ago",
    },
    {
      id: 3,
      title: "Account Activity",
      message: "New login detected on your Smart TV.",
      time: "3 hrs ago",
    },
    {
      id: 4,
      title: "Payment Success",
      message: "Your payment of ₹649 was received successfully.",
      time: "2 days ago",
    },
  ];

  return (
    <div className="relative">
      {/* 🔔 Bell Icon */}
      <button
        onClick={() => setOpen(!open)}
        className="relative p-2 rounded-full hover:bg-gray-800 transition"
      >
        <Bell className="w-6 h-6 text-white" />
        {notifications.length > 0 && (
          <span className="absolute top-1 right-1 bg-red-600 rounded-full w-2 h-2"></span>
        )}
      </button>

      {/* 🔽 Dropdown */}
      {open && (
        <div className="absolute right-0 mt-3 w-80 bg-[#141414]/95 backdrop-blur-md 
                        border border-gray-700 rounded-2xl shadow-2xl overflow-hidden z-50 animate-fadeIn">
          <div className="p-4 font-semibold text-gray-200 border-b border-gray-700">
            Notifications
          </div>

          <div className="max-h-80 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
            {notifications.map((note) => (
              <div
                key={note.id}
                className="p-4 border-b border-gray-800 hover:bg-[#1f1f1f] transition"
              >
                <p className="text-red-500 font-semibold text-sm">{note.title}</p>
                <p className="text-gray-300 text-sm leading-snug mt-1">{note.message}</p>
                <p className="text-gray-500 text-xs mt-2">{note.time}</p>
              </div>
            ))}
          </div>

          <div className="p-3 text-center text-sm text-gray-400 hover:text-white cursor-pointer bg-[#1a1a1a]">
            View all notifications
          </div>
        </div>
      )}
    </div>
  );
}
