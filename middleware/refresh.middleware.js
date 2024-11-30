const jwt = require("jsonwebtoken")
const { generatAccessToken } = require("../utils/generate")


const verifyRefreshToken = (req , res  ) => {
  const token = req.cookies.refreshtoken

  if(!token){
    return res.json({
      message : "RefreshToken not found"
    })
  }

  const decoded = jwt.verify(token , process.env.SECRET_REFRESH_KEY)
req.user = decoded
  if (!decoded) {
    res.json({
      message  :"refresh token is invalid or expired"
    })
  }

  const accesstoken = generatAccessToken({id : req.user.id , email : req.user.email ,role : req.user.role })

  res.cookie("accesstoken" , accesstoken , {httptOnly : true , maxAge : process.env.FOR_COOKIE_ACCESS})


  res.json({
    message : "RefreshToken updated",
    accesstoken
  })
}

module.exports = verifyRefreshToken