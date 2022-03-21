import express from "express";
import jwt from "jsonwebtoken";

const router = express.Router();

router.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (username === "admin" && password === "admin") {
    const token = jwt.sign({ username: username }, process.env.JWT_SECRET);
    return res.json({
      token,
    });
  }
  res.send("Invalid username or password");
});

export default router;
