const Router = require('express').Router();
const user = require("../controllers/userControler")
Router.post('/registeruser', user.userSignUp)

module.exports = Router;