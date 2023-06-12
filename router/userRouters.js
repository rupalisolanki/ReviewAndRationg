const express = require("express");
const upload = require("../middleware/imageStorage");
const user = require("../controllers/userControler");
const auth = require("../middleware/auth_midddleware");
const validate = require("../validation/user/uservalidation");

const router = express.Router();

router.post(
  "/signup",
  upload.single("profilePic"),
  validate.registerUserValidation,
  user.userSignUp
);
router.post("/forgetPasswordEmail", user.forgetPasswordEmail);
router.post("/userPasswordReset/:id/:token", user.userPasswordReset);
router.post("/userlogin", validate.userLoginValidation, user.userLogin);

module.exports = router;
