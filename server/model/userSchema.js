const mongoose=require("mongoose");

         // ===========================  User  Schema  ===========================

const userSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
},{timestamps:true})


const Users=mongoose.model("Users",userSchema)


        // =========================  Export module  =============================
module.exports=Users;