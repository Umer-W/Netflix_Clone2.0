const mongoose=require("mongoose")

const movieSchema=new mongoose.Schema({
    backgroundImage:{
        type:String,
        required:true
    },
    nameLogo:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    para:{
        type:String,
        required:true
    },
    starring:{
        type:String,
        required:true
    },
    videoLink:{
        type:String,
        required:true
    }

})


const movie=mongoose.model("movie", movieSchema);

module.exports=movie;