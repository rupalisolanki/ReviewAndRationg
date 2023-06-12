const jwt = require("jsonwebtoken");
const User = require("../models/user_schema");

const checkUserAuth = async (req, res, next) => {
  let token;
  const { authorization } = req.headers;
  if (authorization && authorization.startsWith("Bearer")) {
    try {
      //get token from header
      token = authorization.split(" ")[1];
      // check what we are getting in token and authorization
      console.log("token :", token);
      console.log("Authorization :", authorization);
      //verify token
      const { userId } = jwt.verify(token, process.env.JWT_SECERT_KEY);
      //GET USER FROM TOKEN
      //req.user = await User.findByID(userId).select('password');
      next();
    } catch (error) {
      console.log(error);
      res.status(402).send({ status: "failed", message: "unauthorized user" });
    }
  } else {
    res.status(401).send({ message: "unauthorized user no token" });
  }
};
module.exports = { checkUserAuth };
