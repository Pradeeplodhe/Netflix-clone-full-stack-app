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
import Footer from "./components/Footer";
import Notification from "./components/Notification";
export default function App() {
  return (
    
     
      
    

<>
 
        <Navbar />

  <div className="bg-black min-h-screen text-white">
  
  {/* <Login/> */}
  
  <Routes  >
    {/* <Route path="/nav" element={<Navbar/>}/> */}
  
       <Route path="/" element={<Login />}/>
        <Route path="/chooseplan" element={<ChoosePlan />}/>
<Route path="/payment" element={<PaymentPage />}/>


         <Route path="/notification" element={<Notification />}/>

       <Route path="/home" element={<Home />}/>

    <Route path="/search" element={<Search />}/>
    <Route path="/tv-shows" element={<TVShows />}/>
     <Route path="/movies" element={<Movies/>}/>
   <Route path="/latest" element={<NewAndPopular/>}/>
   <Route path="/profile" element={<UserProfile/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/signup" element={<Signup/>}/>

  </Routes>
</div>

   <Footer />
     
</>



      
   
  );
}
