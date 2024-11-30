const {Schema , model} = require("mongoose")

const registerSchema = new Schema({
  username : {
    type : String,
  },
  password : {
    type : String,
    required : true
  },
  email : {
    type : String,
    required : true
  },
  role : {
    type : String,
    default : "user",
    enum: {
      values : ["user" , "admin" , "superAdmin"],
      message : "{VALUE} - this is not found"
    }
  },
  verify : {
    type : Boolean,
    default : false
  },
  verify_code : {
    type : String,
  }
},
{
  versionKey : false,
  timestamps : true
})

module.exports = model("users" , registerSchema)