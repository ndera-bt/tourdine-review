import { DataSource } from "typeorm";
import { User } from "../model/user";
import { Review } from "../model/review";
import { Restaurant } from "../model/restaurant";
import * as dotenv from "dotenv";
dotenv.config({ path: ".env" });

export const postgres = new DataSource({
  type: "postgres",
  database: process.env.DATABASE,
  username: process.env.DB_USERNAME,
  password: process.env.PASSWORD,
  host: process.env.HOST,
  port: 5432,
  entities: [User, Review, Restaurant],
  synchronize: true,
  logging: false,
});
