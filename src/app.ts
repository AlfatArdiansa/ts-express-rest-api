import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import middlewares from "./middlewares";
import api from "./api";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json({
    message: "Hello World - 🌏",
  });
});

app.use("/api/v1", api);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

export default app;
