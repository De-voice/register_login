const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const routes = require("./src/route/route")

// make the environment  variable globa
dotenv.config();



const app = express();
const port = parseInt(process.env.PORT || 5000);

// establishing a mongoDB connection
 mongoose.connect(process.env.DATABASE_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
})
const db = mongoose.connection;


db.on("error",() => {
    console.log("something went wrong")
})
db.once("open",() => {
    console.log("database connection successful")
})

// middlewares 
app.use(express.urlencoded({extended:true}));
app.use(express.json())
app.use(routes)



// Listening to our port

app.listen(port,() => {
    console.log(`Server running on port ${port}`);
})