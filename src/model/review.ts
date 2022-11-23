import mongoose from "mongoose";

const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  stars: {
    type: Number,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  restaurant: {
    type: Schema.Types.ObjectId,
    ref: "Restaurant",
  },
});

module.exports = mongoose.model("Review", reviewSchema);
