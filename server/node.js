const express = require("express");

const router = express.Router();
let temp = require("temp.json")

console.log("temp",temp);


router.get('./jsonId',function (req,res){
    res.send(temp)

})