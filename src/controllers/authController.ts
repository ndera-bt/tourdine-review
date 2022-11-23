import { validationResult } from "express-validator";
import { AuthService } from "../service/authService";
import { tryCatch } from "../util/tryCatch";

export class AuthManager {
  static postSignup = async (req: any, res: any) => {
    const { name, email, password } = req.body;
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(500).json(errors.array()[0].msg);
    }

    const [error, user] = await tryCatch(
      AuthService.signup,
      name,
      email,
      password
    );

    if (error) {
      return res.status(500).json(error.message);
    }

    return res.status(201).json({ msg: "Account created successfully", user });
  };
}
