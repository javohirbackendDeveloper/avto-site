const { carModelValidate } = require("../validation/carsModel.validation");


module.exports.carModelValidator= (req, res, next) => {
  try {
    const { error } = carModelValidate(req.body); 

    if (error) {
      return res.status(400).json({
        message: error.details[0].message, 
      });
    }
    next(); 
  } catch (error) {
    next(error); 
  }
};
