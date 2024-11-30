const jwt = require("jsonwebtoken")
require("dotenv").config()

const generatAccessToken = (payload) => {
  return jwt.sign(payload , process.env.SECRET_ACCESS_KEY , {expiresIn : process.env.FOR_COOKIE_ACCESS})
}

const generateRefreshToken = (payload) => {
  return jwt.sign(payload , process.env.SECRET_REFRESH_KEY , {expiresIn : process.env.FOR_COOKIE_REFRESH})
}


module.exports = {
  generatAccessToken,
  generateRefreshToken
}