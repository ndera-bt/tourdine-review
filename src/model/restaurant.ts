import mongoose from "mongoose";

const Schema = mongoose.Schema;

const restaurantSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  hours: {
    type: String,
    required: true,
  },
  categories: {
    type: String,
    required: true,
  },
  stars: {
    type: String,
    required: true,
  },
  website: {
    type: String,
    required: true,
  },
  review_count: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  restaurantReviews: {
    reviews: [
      {
        reviewID: {
          type: Schema.Types.ObjectId,
          ref: "Review",
        },
      },
    ],
  },
});

module.exports = mongoose.model("Restaurant", restaurantSchema);
