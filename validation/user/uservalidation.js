const user = require("./userschema");

module.exports = {
  registerUserValidation: async (req, res, next) => {
    const value = await user.registerUser.validate(req.body);
    if (value.error) {
      res.json({
        sucess: 0,
        message: value.error.details[0].message,
      });
    } else {
      next();
    }
  },

  userLoginValidation: async (req, res, next) => {
    const value = await user.userLogin.validate(req.body);
    if (value.error) {
      res.json({
        sucess: 0,
        message: value.error.details[0].message,
      });
    } else {
      next();
    }
  },
};
