import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ChoosePlan from "./components/ChoosePlan";
import PaymentPage from "./components/PaymentPage";
import Search from "./components/Search";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import TVShows from "./components/TvShow";
import Movies from "./components/Movies";
import NewAndPopular from "./components/NewAndPopular";
import UserProfile from "./components/UserProfile";


export default function App() {
  return (
    
     
      // <div className="bg-black min-h-screen text-white">
      //   <Navbar />
      //   <Routes>
      //     {/* <Route path="/" element={<Home />} /> */}
      //     <Route path="/search" element={<Search />} />
      //     <Route path="/login" element={<Login />} />
      //     <Route path="/signup" element={<Signup />} />
      //     {/* <Route path="*" element={<Navigate to="/" />} /> */}
      //   </Routes>
      // </div>
    

<>

  <div className="bg-black min-h-screen text-white">
  <Navbar/>
  <Routes  >
       <Route path="/" element={<Home />}/>

    <Route path="/search" element={<Search />}/>
    <Route path="/tv-shows" element={<TVShows />}/>
     <Route path="/movies" element={<Movies/>}/>
   <Route path="/latest" element={<NewAndPopular/>}/>
   <Route path="/profile" element={<UserProfile/>}/>
  
  </Routes>
</div>
</>



      
   
  );
}
