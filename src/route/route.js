const router = require("../controller/user_endpoint");
const  express = require("express");

const app = express();

app.use("/api/v1/user",router);



module.exports = app