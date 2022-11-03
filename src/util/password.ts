import * as bcrypt from "bcrypt";

export class PasswordManager {
  static async hash(password: string, saltRound = 12) {
    return bcrypt.hash(password, saltRound);
  }
}
