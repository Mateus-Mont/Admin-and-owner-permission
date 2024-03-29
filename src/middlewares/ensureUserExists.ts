import {Request,Response, NextFunction } from "express";
import { QueryConfig } from "pg";
import { client } from "../database";
import { AppError } from "../errors";

export const ensureUserExists = async (req:Request,res: Response,next: NextFunction):Promise<Response | void> => {

  const queryString:string=`
  SELECT
   *
  FROM
    users
  WHERE
    email=$1
  `
  const queryConfig:QueryConfig={
    text:queryString,
    values:[req.body.email]
  }
  const queryResult=await client.query(queryConfig)

  if(queryResult.rowCount>0){
     throw new AppError("E-mail already registered",409)
  }
  return next();  
};
