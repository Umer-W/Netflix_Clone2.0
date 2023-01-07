const mongoose=require("mongoose")

const movieCardSchema=new mongoose.Schema({
    image:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    }
   

},{timestamps:true})


const movieCard=mongoose.model("movieCard", movieCardSchema);

module.exports=movieCard;