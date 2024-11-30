const carsModelSchema = require("../schema/carsModel.schema")
const singleCarSchema = require("../schema/singleCar.schema")




const getmodels = async (req , res , next) => {
  try{
    const data =await carsModelSchema.find()
    res.json(data)
  }catch(error){
    next(error)
  }
}


const getOneModel = async (req , res , next) => {
  try{
    const {id} = req.params
    const data = await carsModelSchema.findOne({_id : id})

    if (!data) {
      throw BaseError.BadRequest("This model is not defined")
    }

    const relatedCarsToModel = await singleCarSchema.find({ marka: data.marka })
 
    if (!relatedCarsToModel) {
      throw BaseError.BadRequest("There is not a car that has this kind of marka")
     
      
    }

     res.json(relatedCarsToModel)
  }catch(error){
    next(error)
  }
}





const addModel = (req , res , next) =>{
  try{
   
    carsModelSchema.create({
      img  :`http://localhost:4000/images/${req.file.filename}`,
      marka : req.body.marka
     })
    res.json({
      message : "Added"
    })
  }catch(error){
    next(error)
  }
}





const updateModel= async (req , res , next) =>{
  try{
   
   const {id} = req.params
   const updated = req.body
    await carsModelSchema.findByIdAndUpdate({_id : id}, updated )
    res.json({
      message : "Updated your information"
    })
  }catch(error){
    next(error)
  }
}


const deleteModel =async (req , res , next) =>{
  try{
    const {id} = req.params
    const deleted = req.body
   await carsModelSchema.findByIdAndDelete({_id : id} , deleted)
    res.json({
      message : "Deleted"
    })
  }catch(error){
    next(error)
  }
}



module.exports = {
  getmodels,
  addModel,
  updateModel,
  deleteModel,
  getOneModel
}