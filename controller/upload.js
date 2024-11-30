const multer = require("multer")
const path = require("path")
const carsModelSchema = require("../schema/carsModel.schema")


const storage = multer.diskStorage({
  destination : "./upload/images",
  filename : (req , file , cb) => {
    return cb(null , `${file.fieldname}_${ Date.now()}${path.extname(file.originalname)}`)
  }
})

const upload = multer({storage})

const addImage = (req , res , next) =>{
  try{
    const {marka , img} = req.body
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

module.exports = {addImage , upload}