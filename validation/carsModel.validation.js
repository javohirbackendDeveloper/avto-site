
const joi = require("joi");

module.exports.carModelValidate = function (data) {
  const schema = joi.object({
   marka : joi.string(),
   img : joi.string()
  });

  return schema.validate(data);
};
