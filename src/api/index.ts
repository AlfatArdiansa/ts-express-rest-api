import express from "express";
import sayhi from "./sayhi";
import authMiddleware from "../auth/middleware";

const router = express.Router();

/**
 * Remove comment to enable auth verification to access the api
 */
// router.use(authMiddleware.isAuthenticated);

router.get("/", (req, res) => {
  res.json({ message: "API - 🌏" });
});
router.use("/say-hi", sayhi);

export default router;
