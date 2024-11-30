const {Schema , model} = require("mongoose")

const singleCarSchema = new Schema({
  type : {
    type : String,
  },
  marka : {
    type : String,
    enum : {
      values : ["chevrolet" ,"daewoo", "Toyota", "Honda", "BMW", "Mercedes-Benz", "Ford", "Audi", "Chevrolet", "Nissan", "Volkswagen", "Hyundai", "Kia", "Porsche", "Tesla", "Jeep", "Subaru", "Mazda", "Lexus", "Ferrari", "Lamborghini", "Bentley"  ],
      message : "{VALUE} this model is not defined"
    }
  },
  motor : {
    type : String,
  },
  color : {
    type : String,
  },
  gearbook : {
    type : String,
    enum : {
      values : ["avtomat" , "mexanik"],
      message : "{VALUE} this gearbook is not defined"
    }
  },
  insideImg : {
    type : String,
  },
  description : {
    type : String,
  },
  tanirovka : {
    type : Boolean,
    enum : {
      values : [true , false],
      message : "{VALUE} add it"
    }
  },
  year : {
    type : Number,
  },
  distance : {
    type : String,
  },
  narxi : {
    type : String,
  },
  frontImg : {
    type : String,
  },
  modelImg : {
    type : String,
  }
  
},
{
  versionKey : false,
  timestamps : true
})

module.exports = model("Cars" , singleCarSchema)