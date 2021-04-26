const userController = require("./user_controller");
const express = require("express");


const router = express.Router();


router.post("/signup",userController.userSignUp);
router.post("/login",userController.userLogin);



module.exports = router;

