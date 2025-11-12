import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
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
import PrivateRoutes from "./Privateroutes/PrivateRoutes";
import MovieManager from "./components/MovieManger";
export default function App() {
  return (
    <>
      <Navbar />

      <div className="bg-black min-h-screen text-white">
        {/* <Login/> */}

        <Routes>
          {/* <Route path="/nav" element={<Navbar/>}/> */}

          <Route path="/" element={<Login />} />
          <Route path="/chooseplan" element={<ChoosePlan />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          <Route
            path="/notification"
            element={
              <PrivateRoutes>
                {" "}
                <Notification />
              </PrivateRoutes>
            }
          />

          <Route
            path="/home"
            element={
              <PrivateRoutes>
                <Home />
              </PrivateRoutes>
            }
          />

          <Route
            path="/search"
            element={
              <PrivateRoutes>
                <Search />
              </PrivateRoutes>
            }
          />

          <Route
            path="/tv-shows"
            element={
              <PrivateRoutes>
                <TVShows />
              </PrivateRoutes>
            }
          />
          <Route
            path="/movies"
            element={
              <PrivateRoutes>
                <Movies />
              </PrivateRoutes>
            }
          />

          
          <Route
            path="/latest"
            element={
              <PrivateRoutes>
                <NewAndPopular />
              </PrivateRoutes>
            }
          />


            <Route
            path="/my-list"
            element={
              <PrivateRoutes>
                <MovieManager/>
              </PrivateRoutes>
            }
          />


          <Route
            path="/profile"
            element={
              <PrivateRoutes>
                <UserProfile />
              </PrivateRoutes>
            }
          />
        </Routes>
      </div>

      <Footer />
    </>
  );
}
