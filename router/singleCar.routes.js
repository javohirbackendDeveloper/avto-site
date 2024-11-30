
const {Router} = require("express")
const { addCar, updatecar, deletecar, getOneCar } = require("../controller/singleCar.controller")
const { singleCarValidator } = require("../middleware/singleCar.middleware")
const verifyAccessToken = require("../middleware/access.middleware")




const singleCarRouter = Router()


singleCarRouter.post("/addCar" ,[verifyAccessToken , singleCarValidator], addCar)
singleCarRouter.put("/updateCar/:id" ,[verifyAccessToken ,  singleCarValidator], updatecar)
singleCarRouter.delete("/deleteCar/:id" ,verifyAccessToken, deletecar)
singleCarRouter.get("/getOneCar/:id" , getOneCar)

module.exports = singleCarRouter