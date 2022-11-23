"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
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
module.exports = mongoose_1.default.model("Review", reviewSchema);
