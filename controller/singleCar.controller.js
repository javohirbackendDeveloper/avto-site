
const singleCarSchema = require("../schema/singleCar.schema")



const getOneCar = (req , res , next) => {
  try{
    const {id} = req.params
    const car = singleCarSchema.findOne({_id : id})
    if (!car) {
      throw BaseError.BadRequest("This car is not defined")

    }
    
    res.json(car)
  }catch(error){
    next(error)
  }
}

const addCar = async (req , res , next) => {
  try{
    const {type , marka, motor, color, gearbook, insideImg, description, tanirovka, year, distance, narxi, frontImg, modelImg} = req.body
    
    await singleCarSchema.create({type , marka, motor, color, gearbook, insideImg, description, tanirovka, year, distance, narxi, frontImg, modelImg})
    res.json({
      message : 'Added car'
    })
   
  }catch(error){
    next(error)
  }
}




const updatecar= async (req , res , next) =>{
  try{
   
   const {id} = req.params
   const updated = req.body
    await singleCarSchema.findByIdAndUpdate({_id : id}, updated )
    res.json({
      message : "Updated your information"
    })
  }catch(error){
    next(error)
  }
}


const deletecar =async (req , res , next) =>{
  try{
    const {id} = req.params
    const deleted = req.body
   await singleCarSchema.findByIdAndDelete({_id : id} , deleted)
    res.json({
      message : "Deleted"
    })
  }catch(error){
    next(error)
  }
}



module.exports = {
  addCar,
  updatecar,
  deletecar,
  getOneCar
}