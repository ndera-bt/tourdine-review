import mongoose from "mongoose";
import * as bcrypt from "bcrypt";

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  reviews: {
    type: Schema.Types.ObjectId,
    ref: "Review",
  },
});

export default mongoose.model("User", userSchema);
