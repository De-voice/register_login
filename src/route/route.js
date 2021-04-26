const router = require("../controller/user_endpoint");
const  express = require("express");
const otherRoutes = require("../helpers/notfound")

const app = express();

app.use("/api/v1/user",router);
app.use("/",otherRoutes)




module.exports = app