const express = require("express")
const { connectDB } = require("./db/config")
require("dotenv").config()
const cors = require("cors")
const carModelRouter = require("./router/carModel.routes")
const singleCarRouter = require("./router/singleCar.routes")
const errorMiddleware = require("./middleware/error.middleware")
const registerRouter = require("./router/register.routes")
const cookieParser = require("cookie-parser")



const app = express()
app.use(express.json())
app.use(cors())
app.use(cookieParser())



///////////// router

app.use(registerRouter)
app.use(carModelRouter)
app.use(singleCarRouter)


connectDB()


app.use("/images" , express.static("upload/images"))

app.use(errorMiddleware)
const PORT = process.env.PORT || 5000
app.listen(PORT , () => {
  console.log("Server is running on the " + PORT);
  
})