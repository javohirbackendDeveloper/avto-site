const {Schema , model} = require("mongoose")

const carModelSchema = new Schema({
  marka : {
    type : String,
    enum : {
      values : ["chevrolet" ,"daewoo", "Toyota", "Honda", "BMW", "Mercedes-Benz", "Ford", "Audi", "Chevrolet", "Nissan", "Volkswagen", "Hyundai", "Kia", "Porsche", "Tesla", "Jeep", "Subaru", "Mazda", "Lexus", "Ferrari", "Lamborghini", "Bentley"  ],
      message : "{VALUE} this model is not defined"
    }
  },
  img : {
    type : String
  }
},
{
  versionKey : false,
  timestamps : true
})

module.exports = model("Models" , carModelSchema)