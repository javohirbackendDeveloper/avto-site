const mongoose = require("mongoose")

module.exports.connectDB = function () {
  try{
   mongoose.connect(process.env.MONGODB_URL)
   console.log("Connected");
   
  }catch(error){
    console.log(error);
    
  }
}