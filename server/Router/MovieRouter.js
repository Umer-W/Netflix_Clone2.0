const express = require("express");
const router = express.Router();
const {AddMovieDetail,AddMovieCard,GetMovieCard,GetMovieObject,DeleteCookie}=require("../Controller/movieController")




router.post("/AddMovieDetail",AddMovieDetail);


router.post("/AddMovieCard",AddMovieCard)


router.get("/GetAllData",GetMovieCard)

router.get("/SelectMovie/:name",GetMovieObject)


router.get("/Logout",DeleteCookie)

module.exports=router;
