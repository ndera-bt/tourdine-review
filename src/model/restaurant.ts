import {
  Column,
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  OneToMany,
} from "typeorm";
import { Review } from "./review";

@Entity("restaurant")
export class Restaurant extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  address: string;

  @Column()
  city: string;

  @Column()
  hours: string;

  @Column()
  categories: string;

  @Column()
  stars: string;

  @Column()
  website: string;

  @Column()
  review_count: number;

  @OneToMany(() => Review, (review) => review.restaurant)
  reviews: Review[];

  @Column()
  contact: string;

  @Column()
  photo: string;
}
