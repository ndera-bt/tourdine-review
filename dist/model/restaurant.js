"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
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
module.exports = mongoose_1.default.model("Restaurant", restaurantSchema);
