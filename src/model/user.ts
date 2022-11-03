import {
  Column,
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  OneToMany,
  BeforeInsert,
  AfterInsert,
} from "typeorm";
import { Review } from "./review";
import { PasswordManager } from "../util/password";

@Entity("user")
export class User extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  photo: string;

  @OneToMany(() => Review, (review) => review.user)
  reviews: Review[];

  @BeforeInsert()
  async hashPassword() {
    const hashed = await PasswordManager.hash(this.password);
    this.password = hashed;
  }

  @AfterInsert()
  returnOptions() {
    (this.password = ""), (this.id = "");
  }
}
