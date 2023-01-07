const mongoose=require("mongoose");
const DB=process.env.DATABASE;
mongoose.connect(DB)
.then(()=>{
    console.log("yes your db is connected");
})
.catch((err)=>{
    console.log("sorry your db is not connected" +err);
})
