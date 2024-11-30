const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const nodemailer = require("nodemailer")
const registerSchema = require("../schema/register.schema")
require("dotenv").config()
const {generatAccessToken , generateRefreshToken} = require("../utils/generate")
const BaseError = require("../utils/error")


const register = async (req , res , next) => {
  try{
    const {email , password  } = req.body
    const foundUser =await registerSchema.findOne({email})
    
    if (foundUser) {
      throw BaseError.BadRequest("This user already exist")
      
    }

    

    const transporter = await nodemailer.createTransport({
      service : "gmail",
      auth : {
        user : process.env.GMAIL_GOOGLE,
        pass  : process.env.GOOGLE_PASSKEY
      }
    })

    const randomNumber = await  Array.from({length : 6} , () => Math.floor(Math.random() * 10)).join("")
    

    const send = {
      from : process.env.GMAIL_GOOGLE,
      to  :email,
      subject : "test",
      html : `<p style = " font-size : 30px;">Tasdiqlash kodi : <b style = "color : blue;">${randomNumber}</b></p>`
    }

    await transporter.sendMail(send , (error , info) => {
      if (error) {
        res.json({
          message : error.message
        })
      }else{
         res.json({
          message : info.response
        })
      }
    })

    const hash = await bcrypt.hash(password , 12)

    const findUser = await registerSchema.create({email , password : hash , verify_code : randomNumber})
  
    setTimeout(async () => {
      await registerSchema.findByIdAndUpdate(findUser._id , {verify_code : ""})
    }, 60 * 1000);
    res.json({
      message : "Registered"
    })
  }catch(error){
    throw new Error(error.message)
  }
}



const verify = async (req , res , next) => {
  try{
    const {email , verify_code_by_client} = req.body

    const findUser = await registerSchema.findOne({email})
    
    if (!findUser) {
      throw BaseError.BadRequest("User not found")

    }

    if (findUser.verify_code === verify_code_by_client) {
      await registerSchema.findByIdAndUpdate(findUser._id , {verify : true , verify_code : ""})

      res.json({
        message: "Verified",
      })
    }else{
      throw BaseError.BadRequest("Your verify code is invalid")

    }
  }catch(error) {
    next(error)
  }
}


const login =async (req , res  ,next) => {
  try{
    const {email , password} = req.body

    const findUser = await registerSchema.findOne({email})
    
    if (!findUser) {
      throw BaseError.BadRequest("User not found")

    }

    const checkerPassword = await bcrypt.compare(password , findUser.password)

    if (!checkerPassword) {
      throw BaseError.BadRequest("Password is invalid")

    }

    if (findUser.verify == true) {
      const accesstoken =await generatAccessToken({email : findUser.email , id : findUser._id , role : findUser.role})
      


      const refreshtoken =await generateRefreshToken({email : findUser.email , id : findUser._id , role : findUser.role})
      
     res.cookie("accesstoken" , accesstoken , {httpOnly : true , maxAge : process.env.FOR_COOKIE_ACCESS})
     res.cookie("refreshtoken" , refreshtoken , {httpOnly : true , maxAge : process.env.FOR_COOKIE_REFRESH})
      
      
      res.json({
        message: "Successfully",
        token : {
          accesstoken
        }
      })
    }else{
      throw BaseError.BadRequest("You were not verified ")

    }
  }catch(error){
    next(error)
  }
}




const logout = (req, res) => {
  try {
    res.clearCookie("accesstoken");
    res.clearCookie("refreshtoken");

    res.json({
      message: "Successfully logged out",
    });
  } catch (error) {
    throw BaseError.BadRequest("There is an Error")
  }
};






module.exports = {
   register,
   verify,
   login,
  logout
}