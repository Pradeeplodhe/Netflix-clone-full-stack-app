import UserMoviesList from "../models/User.MoviesList.js";
import express from "express";
import { verifyToken } from "../middleware/verifyToken.js";
const Router=express.Router();


Router.get("/", async(req,res)=>{
    
   
    res.send({data:"user movies datalist api"})

    
})


Router.post("/post",verifyToken, async(req,res)=>{
  try {
    
    const{
    moviesTitle,
    moviesGenration,
    moviesRating,
    moviesUrl,
    moviesDiscription,

     }= req.body;

     const movieData=new UserMoviesList({
      moviesTitle,
    moviesGenration,
    moviesRating,
    moviesUrl,
    moviesDiscription,
  })

 await movieData.save();

 res.send({sucess:true,message:"data is send safely"})
  } catch (error) {
    res.send({sucess:false,message:error.message})
 
  }
})

Router.get("/getAllmoviesData",verifyToken ,async(req,res)=>{

try {
    const movies = await UserMoviesList.find(); // MongoDB se saari movies
    res.status(200).json(movies);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }


})
export default Router;