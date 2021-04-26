const bcrypt = require("bcrypt");
const Users = require("../model/user_model");
const helpersMethod = require("../helpers/util");



const  userLogin = async () => {
   const {email, password} = req.body;
  try {
     const user = User.findOne({ email });
     if(!user) {
       return helpersMethod.handleRespones(res,401,"Invalid credentials")
     };

     const isMatch = await bcrypt.compare(password,user.password)
     if(!isMatch) {
       return handleResponse(res,401, "password is not correct")
     };

     const token = helpersMethod.generateUserToken({
       _id:user._id,
       email:user._doc.email,
     });

     return handleResponse(res, 200, "Successfully login", {
       ...user._doc,
       _id:user._id,
       password:undefined,
       token
     });

  } catch (error) {
    return handleResponse(res, 500, "Some  error occured")
  };
}


const userSignUp = async (req,res) => {
   
  try {
      
      const {
       full_name,  
        email,
         phone_number,
         area_code,
         location,
        password,
    } = req.body;

    const user = new Users({
        full_name,  
         email,
         phone_number,
         area_code,
         location,
        password
       
    });


    if(area_code.length < 5) {
      return helpersMethod.handleRespones(res,401,"area")
    }

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password,salt)

      await user.save();

    const token = helpersMethod.generateUserToken({... user._doc});

    res.status(200).json({
        user: {
            ...user._doc,
              token
        }
    })
  } catch (error) {
      res.status(500).json({error})
  }


}




module.exports = {
    userSignUp,
    userLogin,
}











