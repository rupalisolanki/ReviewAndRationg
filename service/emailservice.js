const nodemailer = require("nodemailer");
require("dotenv").config();

var transpoter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "rupssolanki123@gmail.com",
    pass: "cdqykegdvoqprksy",
  },
});
var mailOptions = {
  from: process.env.EMAIL,
  to: "rupalisolanki20003@gmail.com",
  from: "rupssolanki123@gmail.com",
  subject: "hy rupali",
  text: "i am roopss",
};

module.exports = { transpoter, mailOptions };
