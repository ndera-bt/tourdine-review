import {
  Column,
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
} from "typeorm";
import { Restaurant } from "./restaurant";
import { User } from "./user";

@Entity("review")
export class Review extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  stars: string;

  @Column()
  text: string;

  @ManyToOne(() => User, (user) => user.reviews, { onDelete: "CASCADE" })
  @JoinColumn({ name: "userId" })
  user: User;

  @ManyToOne(() => Restaurant, (restaurant) => restaurant.reviews, {
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "restaurantId" })
  restaurant: Restaurant;
}
