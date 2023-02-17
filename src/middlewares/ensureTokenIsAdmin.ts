import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors";
import Jwt from "jsonwebtoken";

export const ensureTokenIsAdmin = async (req: Request,res: Response,next: NextFunction):Promise<void> => {
  let token = req.headers.authorization;

  if (!token) {
    throw new AppError("Token  is missing", 401);
  }

  token = token.split(" ")[1];

  Jwt.verify(token, "CH4V3 73CR3T4", (error, decoded: any) => {
    if (error) {
      throw new AppError(error.message, 401);
    }

    if (decoded.admin) {
      return next();
    }

    throw new AppError("Admin only permission",401)
  });
};
