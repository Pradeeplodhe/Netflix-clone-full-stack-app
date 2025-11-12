import React, { useState } from "react";
import { Pencil, Camera, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
export default function UserProfile() {
  const navigate=useNavigate();
  const [name, setName] = useState("Pradeep Lodhi");
  const [editing, setEditing] = useState(false);
  const [avatar, setAvatar] = useState(
    "https://i.pinimg.com/736x/bc/09/43/bc0943e5c70b49b1eb75e675e807ef1f.jpg"
  );

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file){

    setAvatar(URL.createObjectURL(file));
      localStorage.setItem("dp",file);
  }
  }; 
 
  const mail = localStorage.getItem("userMail");

  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-black via-neutral-900 to-black text-white">
      {/* Background Animations */}
     <div className="absolute inset-0 -z-10">

        <div className="absolute w-[700px] h-[700px] bg-red-700/40 blur-[180px] rounded-full top-[-300px] left-[-200px] animate-pulse"></div>
        <div className="absolute w-[600px] h-[600px] bg-red-600/40 blur-[200px] rounded-full bottom-[-250px] right-[-200px] animate-pulse delay-2000"></div>
      </div>

      {/* Netflix Heading */}
      <h1 className="text-5xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400 mb-10 tracking-widest drop-shadow-[0_0_15px_rgba(255,0,0,0.4)] animate-fade-in">
       PROFILE
      </h1>

      {/* Avatar */}
      <div className="relative group transition-transform duration-500 hover:scale-105">
        <div className="w-44 h-44 sm:w-52 sm:h-52 rounded-full overflow-hidden border-[4px] border-red-600 shadow-[0_0_50px_rgba(255,0,0,0.4)] backdrop-blur-md transition-all duration-500">
          <img
            src={localStorage.getItem("dp")}
            alt="User Avatar"
            className="w-full h-full object-cover group-hover:opacity-90 transition-all duration-300"
          />
          <label
            htmlFor="avatarUpload"
            className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
          >
            <Camera size={30} className="text-red-500 drop-shadow-lg" />
          </label>
        </div>
        <input
          type="file"
          id="avatarUpload"
          accept="image/*"
          className="hidden"
          onChange={handleAvatarChange}
        />
      </div>

      {/* Editable Name */}
      <div className="mt-8 flex items-center gap-3">
        {editing ? (
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onBlur={() => setEditing(false)}
            autoFocus
            className="bg-transparent border-b-2 border-red-600 focus:outline-none text-3xl sm:text-4xl font-bold text-center px-3 tracking-wide focus:border-red-500 transition-all"
          />
        ) : (
          <h2
            className="text-3xl sm:text-4xl font-semibold hover:text-red-500 cursor-pointer transition-all duration-300"
            onClick={() => setEditing(true)}
          >
            {name}
          </h2>
        )}
        <Pencil
          size={24}
          className="cursor-pointer text-gray-400 hover:text-red-500 transition-transform duration-300 hover:scale-125"
          onClick={() => setEditing(true)}
        />
      </div>

      {/* Profile Information Card */}
      <div className="mt-12 w-[90%] max-w-md bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 shadow-[0_0_50px_rgba(255,0,0,0.15)] hover:shadow-[0_0_70px_rgba(255,0,0,0.25)] transition-all duration-500">
        <h3 className="text-xl font-medium mb-5 border-b border-gray-700 pb-3 text-gray-300 tracking-wider">
          Profile Information
        </h3>
        <div className="space-y-3 text-gray-400 text-base">
          <p>
            <span className="font-semibold text-white">Email:</span>{" "}
             {mail}
          </p>
          <p>
            <span className="font-semibold text-white">Plan:</span>{" "}
            <span className="text-red-400">Premium Ultra HD</span>
          </p>
          <p>
            <span className="font-semibold text-white">Language:</span> English
          </p>
          <p>
            <span className="font-semibold text-white">Joined:</span> March 2024
          </p>
        </div>
      </div>

      {/* Sign Out Button */}
      <button className="mt-12 bg-gradient-to-r from-red-700 via-red-600 to-red-500 hover:from-red-600 hover:to-red-400 px-8 py-3 rounded-2xl text-lg font-semibold flex items-center gap-3 shadow-[0_0_30px_rgba(255,0,0,0.4)] hover:shadow-[0_0_40px_rgba(255,0,0,0.7)] transform hover:scale-105 transition-all duration-300 active:scale-95"
      onClick={()=>{
        console.log("log out")
        alert("log out")

        localStorage.removeItem("token");  // Replace "token" with your key name
      navigate("/login")
      }}
      >
    
        {/* log out */}
        <LogOut size={22} /> Sign Out
      </button>

      {/* Footer */}
      <p className="mt-10 text-sm text-gray-500 tracking-wide">
        Designed with ❤️ by <span className="text-red-500">Pradeep Lodhi</span>
      </p>
    </div>
  );
}
