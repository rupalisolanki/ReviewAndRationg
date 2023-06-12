const userSchema = require("../models/user_schema");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { transpoter, mailOptions } = require("../service/emailservice");
// const { error } = require("@hapi/joi/lib/base");

//user signup api

const userSignUp = async (req, res) => {
  
  const userData = new userSchema(req.body);
  // console.log(userData);

  try {
    const isUserExists = await userSchema.findOne({
      email: req.body.email,

    });
    if (isUserExists) {
      res.status(409).json({
        status: false,
        error: "email already exists",
      });
    } else {
      const salt = await bcrypt.genSalt(10);
      userData.password = await bcrypt.hash(req.body.password, salt);

      const filePath = `/uploads/${req.file.filename}`;
      userData.profilPic = filePath;
      const user = await userData.save();
      res.status(201).json({
        success: true,
        message: "registraion successfully",
        data: user,
      });
    }
  } catch (err) {
    res.status(500).json({
      status: false,
      error: err.message,
    });
  }
};

//user login api
const userLogin = async (req, res) => {
  //console.log(req.body);
  const { email, password } = req.body;
  try {
    const isUserLogin = await userSchema.findOne({ email: email });
    if (isUserLogin) {
      const pwdConfirmation = bcrypt.compare(password, isUserLogin.password);
      //GENERATE JWT
      const token = jwt.sign(
        { userID: isUserLogin._id },
        process.env.JWT_SECERT_KEY,
        {
          expiresIn: "5d",
        }
      );
      if (pwdConfirmation && isUserLogin) {
        res.status(200).json({
          status: true,
          message: "login sucessfully",
          token: token,
        });
      } else {
        res.status(401).json({
          status: false,
          message: "please enter correct username and password",
        });
      }
    } else {
      res.status(500).json({
        status: false,
        message: "this email is not register",
      });
    }
  } catch (err) {
    res.status(500).json({
      message: `errror occurs ${err.stack}`,
    });
  }
};

//forgetpassword api
const forgetPasswordEmail = async (req, res) => {
  console.log("****email :", req.body);
  const { email } = req.body;
  try {
    const userData = await userSchema.find({ email: email });
    if (userData != null) {
      const secert = userData._id + process.env.JWT_SECERT_KEY;
      const token = jwt.sign({ userID: userData._id }, secert, {
        expiresIn: "20min",
      });

      const link = `https://127.0.0.11:3000/api/user/reset/${userData._id}/${token}`;
      transpoter.sendMail({
        from: "rupalisolanki20003@gmail.com",
        to: email,
        subjet: "check password",
        text: `<a href ${link}>click on this for reset password`,
      });
      return res.status(201).json({
        success: true,
        message: "email send sucessfully",
        token: token,
        userid: userData._id,
      });
    } else {
      res.status(403).json({
        success: false,
        message: "email is not found for this name",
      });
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.stack,
    });
  }
};

//user reset password api
const userPasswordReset = async (req, res) => {
  const { id, token } = req.params;
  const { newPassword, confirmPassword } = req.body;
  console.log(id, token);
  try {
    const checkUser = await userSchema.findById(id);
    if (checkUser != null) {
      const secertKey = checkUser._id + process.env.JWT_SECERT_KEY;
      jwt.verify(token, secertKey);
      if (newPassword == confirmPassword) {
        const salt = await bcrypt.genSalt(10);
        const password = await bcrypt.hash(confirmPassword, salt);
        await userSchema.findByIdAndUpdate(checkUser._id, {
          $set: { password: password },
        });
        res.status(200).json({
          status: "sucess",
          message: "password reset sucessfully",
        });
      } else {
        res.status(403).json({
          status: "failed",
          message: "password and confirmed are not match",
        });
      }
    } else {
      res
        .status(403)
        .json({ status: "failed", message: "user emailis not found" });
    }
  } catch (err) {
    res.status(500).json({
      status: failed,
      message: err.message,
    });
  }
};

module.exports = {
  userSignUp,
  userLogin,
  forgetPasswordEmail,
  userPasswordReset,

  //companyData
};
