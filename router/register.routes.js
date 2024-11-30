const {Router} = require("express")
const { register, verify, login, logout } = require("../controller/register.controller")
const verifyRefreshToken = require("../middleware/refresh.middleware")

const registerRouter = Router()


registerRouter.post("/register" , register)
registerRouter.post("/verify" , verify)
registerRouter.post("/login" , login)
registerRouter.post("/refresh" ,verifyRefreshToken)
registerRouter.post("/logout", logout);


module.exports = registerRouter