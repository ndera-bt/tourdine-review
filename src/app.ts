import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import { AuthRoute } from "./routes/authRoute";
import helmet from "helmet";
import compression from "compression";
import * as dotenv from "dotenv";
dotenv.config({ path: ".env" });

const MONGODB_URI = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.tp1kudq.mongodb.net/${process.env.MONGO_DEFAULT_DATABASE}?retryWrites=true&w=majority`;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(AuthRoute);
app.use(helmet());
app.use(compression());

mongoose
  .connect(MONGODB_URI)
  .then((result) => {
    app.listen(process.env.PORT || 3000);
  })
  .catch((err) => {
    console.log(err);
  });
