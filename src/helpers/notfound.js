const express = require("express");


const app = express();

app.get("/",(req,res) => {
    res.status(200).json({message:"First Deployment on Heroku"})
})

app.all("*",(req,res) => {
    res.status(404).json({message:"Ouch the routes does not exist!!!"})
})


module.exports = app;