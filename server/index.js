import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import dotenv from "dotenv";

/* CONFIGURATIONS */
dotenv.config();
const app = express();
app.use(express.json);
app.use(helmet());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(cors());

/* SERVER SETUP */
const PORT = process.env.port || 9000;
app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});
