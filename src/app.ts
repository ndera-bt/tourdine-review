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

app.listen(port, () => {
  console.log("Server on");
});
