const { default: mongoose } = require("mongoose");

const reviewSchema = new mongoose.Schema({

  subject: {
    type: String,
    require: true,
  },
  review: {
    type: String,
    require: true,
  },
  ratting: {
    type: String,
    require: true,
  },
  isActive: {
    type: Boolean,
    require: true,
    default: true,
  },
  company_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "company",
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
});
reviewSchema.set("timestamps", true);
module.exports = mongoose.model("review", reviewSchema);
