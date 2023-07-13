import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import helmet from "helmet";
import mongoSanitize from "express-mongo-sanitize";
import cookieParser from "cookie-parser";
import compression from "compression";
import fileUpload from "express-fileupload";
import cors from "cors";

dotenv.config();

const app = express();

// Morgan
if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

// Helmet
app.use(helmet());

// parse json
app.use(express.json());

// parse json request body
app.use(express.urlencoded({ extended: true }));

// sanitize request data
app.use(mongoSanitize());

// Enabled cookie parser
app.use(cookieParser());

// grip compression
app.use(compression());

// file upload
app.use(
  fileUpload({
    useTempFiles: true,
  })
);

// cors
app.use(cors());

app.get("/", (req, res) => {
  res.send("Yo");
});

export default app;
