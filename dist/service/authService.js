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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const user_1 = __importDefault(require("../model/user"));
const password_1 = require("../util/password");
class AuthService {
}
exports.AuthService = AuthService;
_a = AuthService;
AuthService.signup = (name, email, password) => __awaiter(void 0, void 0, void 0, function* () {
    const hash = yield password_1.PasswordManager.hash(password);
    const create = new user_1.default({ name: name, email: email, password: hash });
    return create.save();
});
AuthService.singin = () => __awaiter(void 0, void 0, void 0, function* () { });
