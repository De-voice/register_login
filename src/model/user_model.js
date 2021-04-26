const { Schema,model } = require("mongoose");

const useSchema = new Schema({
      full_name:{
          type:String,
          required:true
      },
      email:{
          type:String,
          required:true,
          unique:true
      },
      phone_number:{
          type:String,
          required:true,
      },
      area_code:{
        type:Number,
        max_len:10,
        min_len:5,
        required:true,
      },
      location:{
          type:String,
          required:true
      },
      password:{
          type:String,
          required:true
      },
      confirm_password:{
          type:String,
          required:true
      }
   
})


module.exports = model("Users", useSchema)
