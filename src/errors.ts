import {Request,Response, NextFunction } from "express";

export class AppError extends Error {

  message: string;
  statusCode: number;

  constructor(message: string, statusCode: number = 400) {
    super();
    this.message = message;
    this.statusCode = statusCode;
  }
}
 
export const handleErrors=(error:Error,req:Request,res:Response,next:NextFunction)=>{
    if(error instanceof AppError){
        return res.status(409).json({message:error.message})
    }

}