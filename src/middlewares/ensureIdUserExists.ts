import { NextFunction, Request, Response } from "express";
import { QueryConfig } from "pg";
import {client} from "../database"
import {userQueryResult} from "../interfaces/createUser"
import {AppError} from "../errors"


export const ensureIdUserExists=async(req:Request,res:Response,next:NextFunction):Promise<Response | void>=>{

    const idUser:number=parseInt(req.params.id)
    const queryString:string=`
    
    SELECT
     *
    FROM
     users
    WHERE
     id=$1;
    `

    const queryConfig:QueryConfig={
        text:queryString,
        values:[idUser]
    }

    const queryResult:userQueryResult =await client.query(queryConfig)
    
  if(queryResult.rowCount===0){
    throw new AppError("User not found",404)
 }
 
    return next()
}