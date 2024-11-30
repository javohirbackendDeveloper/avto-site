const { singleCarValidate } = require("../validation/singleCar.validate");


module.exports.singleCarValidator= (req, res, next) => {
  try {
    const { error } = singleCarValidate(req.body); 

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
