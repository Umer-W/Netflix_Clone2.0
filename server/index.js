const express=require("express")
const userRouter= require("./Router/UserRouter.js")
const movieRouter= require("./Router/MovieRouter.js")
const adminRouter= require("./Router/AdminRouter.js")
const cookieParser=require("cookie-parser")
const cors = require("cors");
const dotenv=require("dotenv")
const app=new express();
app.use(cors());

dotenv.config({path: "./config.env"})
require("./db/connection")
app.use(express.json());

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser())


const port=process.env.PORT || 5550;

app.use(userRouter)
app.use(movieRouter)
app.use(adminRouter)








app.listen(port,()=>{
    console.log("han g bhai apka khud ka aek server ban chuka ha ")
})