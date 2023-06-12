const mongoose = require("mongoose");

const companySchema = new mongoose.Schema({
  companyname: {   //companyName
    type: String,
    require: true,
  },

  location: {
    type: String,
    require: true,
  },
  city: {
    type: String,
    require: true,
  },
  founded: {   //foundedOn 
    type: String,
    require: true,
  },

  isActive: {
    type: Boolean,
    require: true,
    default: true,
  },
  user_id: {   //userId 
    type: mongoose.Schema.ObjectId,
    ref: "users",
  },
  company_logo: { 
    type: String,
  },
});

companySchema.set("timestamps", true);
module.exports = mongoose.model("company", companySchema);
