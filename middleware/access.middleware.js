const jwt = require("jsonwebtoken")


const verifyAccessToken = (req , res  ,next) => {
  const token = req.cookies.accesstoken

  if(!token){
    return res.json({
      message : "AccessToken not found"
    })
  }

  jwt.verify(token , process.env.SECRET_ACCESS_KEY , (err , decoded) => {
    if(err){
      return res.json({
        message : "Invalid token or your token expired"
      })
    }
    req.user = decoded
  })
  
  next()
}

module.exports = verifyAccessToken