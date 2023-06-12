const joi = require("@hapi/joi");

const schema = {
  registerUser: joi
    .object({
      name: joi.string().max(20).required(),
      email: joi.string().email().required(),
      password: joi.string().max(12).required(),
      mobile: joi
        .number()
        .integer()
        .min(1000000000)
        .max(9999999999)
        .message("invalid number ")
        .required(),
      city: joi.string().required(),
      state: joi.string().required(),
    })
    .unknown(true),

  userLogin: joi
    .object({
      email: joi.string().email().required(),
      password: joi.string().max(12).required(),
    })
    .unknown(true),
};
module.exports = schema;
