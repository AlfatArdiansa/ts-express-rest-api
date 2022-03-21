import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;
  if (token) {
    const [authType, tokenString] = token.split(" ");
    if (authType === "Bearer") {
      jwt.verify(tokenString, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
          return res.status(401).json({
            message: "Invalid token",
          });
        }
        return next();
      });
    }
  }
};
export default { isAuthenticated };
