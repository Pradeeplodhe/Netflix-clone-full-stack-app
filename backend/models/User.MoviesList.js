import mongoose from "mongoose";

const moviesDataSchema=mongoose.Schema({
moviesTitle:{ type:String, require:true},
moviesGenration:{ type:String, require:true},
moviesRating:{ type:Number, require:true},
moviesUrl:{ type:String, require:true},
moviesDiscription:{ type:String, require:true},

})
export default mongoose.model("userMoviesDataList",moviesDataSchema)