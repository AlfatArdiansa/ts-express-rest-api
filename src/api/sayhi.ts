import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.json("Hi everyone! 👋");
});

export default router;
