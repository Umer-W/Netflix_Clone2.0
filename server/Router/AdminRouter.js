const express = require("express");
const router = express.Router();

const {MovieUpload}=require("../Controller/adminController")

router.post("/MovieUpload",MovieUpload)


module.exports =router;