const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

  name: {
    //user name
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  mobile: {
    type: String,
    require: true,
  },
  city: {
    type: String,
    require: true,
  },
  state: {
    type: String,
    require: true,
  },
  profilPic: String,
  isActive: {
    type: Boolean,
    require: true,
    default: true,
  },
  role: {
    type: String,
    default: "users",
  },
});

userSchema.set("timestamps", true);
module.exports = mongoose.model("users", userSchema);
