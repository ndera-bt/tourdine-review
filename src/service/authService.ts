import User from "../model/user";
import { PasswordManager } from "../util/password";

export class AuthService {
  static signup = async (name: string, email: string, password: string) => {
    const hash = await PasswordManager.hash(password);
    const create = new User({ name: name, email: email, password: hash });
    return create.save();
  };

  static singin = async () => {};
}
