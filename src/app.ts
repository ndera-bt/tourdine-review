import express from "express";
import { postgres } from "./config/database";
import multer from "multer";
import bodyParser from "body-parser";
import path from "path";
import { AuthRoute } from "./routes/authRoute";

const app = express();

// const fileStorage = multer.diskStorage({
//   destination: (req: any, file, cb) => {
//     cb(null, "images");
//   },
//   filename: (req: any, file, cb) => {
//     cb(
//       null,
//       new Date().toISOString().replace(/:/g, "-") + "-" + file.originalname
//     );
//   },
// });

// const fileFilter = (req: any, file: any, cb: Function) => {
//   if (
//     file.mimetype === "image/png" ||
//     file.mimetype === "image/jpg" ||
//     file.mimetype === "image/jpeg"
//   ) {
//     cb(null, true);
//   } else {
//     cb(null, false);
//   }
// };

// app.use(
//   multer({ storage: fileStorage, fileFilter: fileFilter }).single("image")
// );

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//app.use("/images", express.static(path.join(__dirname, "images")));

app.use(AuthRoute);

postgres
  .initialize()
  .then((data) => {
    if (data.isInitialized) {
      console.log("Database connected");
      app.listen(3000, () => {
        console.log("Running on port 5000");
      });
    }
  })
  .catch((err) => {
    console.log("Unable to connect");
    console.log(err);
  });
