import express from "express";
import { postgres } from "./config/database";
import bodyParser from "body-parser";
import { AuthRoute } from "./routes/authRoute";
import * as dotenv from "dotenv";
dotenv.config({ path: ".env" });

const app = express();

const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(AuthRoute);

postgres
  .initialize()
  .then((data) => {
    if (data.isInitialized) {
      console.log("Database connected");
      app.listen(port, () => {
        console.log("Running on port 5000");
      });
    }
  })
  .catch((err) => {
    console.log("Unable to connect");
    console.log(err);
  });
