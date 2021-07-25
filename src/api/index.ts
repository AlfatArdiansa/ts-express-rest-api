import express from "express";
import sayhi from "./sayhi";

const router = express.Router();

router.get("/", (req, res) => {
  res.json("API - 🌏");
});
router.use("/say-hi", sayhi);

export default router;
