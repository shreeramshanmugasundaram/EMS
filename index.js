import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import { contact } from "./controllers/contact.js";
import path from "path";
import getResultStudents from "./controllers/getResultStudents.js";
import { fileURLToPath } from "url";
import getMainPageStudents from "./controllers/mainPageStudents.js";
import getResultYears from "./controllers/getResultYears.js";
import getShotsLinks from "./controllers/getShotsLinks.js";

const app = express();
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
const PORT = process.env.PORT || 5000;
const DB = process.env.DB;

app.post("/getresutlstudents", getResultStudents);
app.get("/getresultyears", getResultYears);
app.post("/contact", contact);
app.get("/getmainpagestudents", getMainPageStudents);
app.get("/getshots", getShotsLinks);

app.use(express.static(path.join(__dirname, "./client/build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"), (err) => {
    res.status(500).send(err);
  });
});

mongoose
  .connect(DB)
  .then(() => {
    app.listen(PORT, () => console.log(`Server Started at PORT ${PORT}`));
  })
  .catch((error) => {
    console.log(error);
  });
