"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthManager = void 0;
const express_validator_1 = require("express-validator");
const authService_1 = require("../service/authService");
const tryCatch_1 = require("../util/tryCatch");
class AuthManager {
}
exports.AuthManager = AuthManager;
_a = AuthManager;
AuthManager.postSignup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, password, photo } = req.body;
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(500).json(errors.array()[0].msg);
    }
    const [error, user] = yield (0, tryCatch_1.tryCatch)(authService_1.AuthService.signup, name, email, password, photo);
    if (error) {
        return res.status(500).json(error.message);
    }
    return res.status(201).json({ msg: "Account created successfully", user });
});
