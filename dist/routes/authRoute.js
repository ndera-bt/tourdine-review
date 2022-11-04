"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRoute = void 0;
const express_1 = __importDefault(require("express"));
const authController_1 = require("../controllers/authController");
const express_validator_1 = require("express-validator");
const router = express_1.default.Router();
router.post("/auth/signup", [
    (0, express_validator_1.check)("email", "Invalid email").isEmail().normalizeEmail(),
    (0, express_validator_1.body)("name", "Name too short").trim().isLength({ min: 3 }),
    (0, express_validator_1.body)("password", "password should not be less than 5 characters")
        .isLength({ min: 5 })
        .trim(),
    (0, express_validator_1.body)("confirmPassword", "password must match")
        .trim()
        .custom((value, { req }) => {
        return req.body.password === value;
    }),
], authController_1.AuthManager.postSignup);
exports.AuthRoute = router;
