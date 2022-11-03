import { User } from "../model/user";

export class AuthService {
  static signup = async (
    name: string,
    email: string,
    password: string,
    photo: string
  ) => {
    const create = User.create({ name, email, password, photo });
    const user = create.save();
    return user;
  };
}
