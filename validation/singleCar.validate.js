
const joi = require("joi");

module.exports.singleCarValidate = function (data) {
  const schema = joi.object({
    modelImg : joi.string(),
    frontImg : joi.string(),
    narxi : joi.string(),
    distance : joi.string(),
    description : joi.string(),
   year : joi.number(),
   tanirovka : joi.boolean(),
   insideImg : joi.string(),
   gearbook : joi.string(),
   color : joi.string(),
   motor : joi.string(),
   marka : joi.string(),
   type : joi.string(),
   
  });

  return schema.validate(data);
};
