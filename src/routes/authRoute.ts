import express from "express";
import { AuthManager } from "../controllers/authController";
import { body, check } from "express-validator";

const router = express.Router();

router.post(
  "/auth/signup",
  [
    check("email", "Invalid email").isEmail().normalizeEmail(),
    body("name", "Name too short").trim().isLength({ min: 3 }),
    body("password", "password should not be less than 5 characters")
      .isLength({ min: 5 })
      .trim(),
    body("confirmPassword", "password must match")
      .trim()
      .custom((value: any, { req }) => {
        return req.body.password === value;
      }),
  ],
  AuthManager.postSignup
);

export const AuthRoute = router;
