import { NextFunction, Request, Response } from "express";
import { ZodTypeAny } from "zod";

export const ensureValidUpdate = (schema: ZodTypeAny) => (req: Request, res: Response, next: NextFunction): Response | void => {
    const validateData=schema.parse(req.body)
    req.body=validateData
    return next()
    
   };