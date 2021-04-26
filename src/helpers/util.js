const jwt = require("jsonwebtoken");



 const handleRespones = (message,statusCode,token,res,data) => {
    return res.status(statusCode).json({
        data,
        token,
        message
    })
    
}

const generateUserToken  = (payload) => {
   return jwt.sign(payload,process.env.SECRET_KEY)
}


const decodeUserToken = (token) => {
    return jwt.decode(token,process.env.SECRET_KEY)
}






module.exports = {
    handleRespones,
    generateUserToken,
    decodeUserToken
}