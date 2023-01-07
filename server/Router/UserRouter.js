const express = require("express");
const router = express.Router();
const {AddUser,HomePage,CheckUser}=require("../Controller/userController")


router.get("/",HomePage )


router.post("/signup", AddUser)

router.post("/login", CheckUser)

module.exports = router