import { Request,Response } from "express"
import { QueryConfig } from "pg"
import { iLoginRequest } from "../../interfaces/loginData"
import {client} from "../../database"
import { AppError } from '../../errors'
import { compare } from "bcryptjs"
import jwt from 'jsonwebtoken'
import { userQueryResult } from "../../interfaces/createUser"

export const createLoginService=async(logiData:iLoginRequest)=>{
    
    const queryString:string=`
    SELECT
     *
    FROM
     users
    WHERE
     email=$1;
    `
    const queryConfig:QueryConfig={
        text:queryString,
        values:[logiData.email]
    }
    console.log(logiData.email)
    
   const queryResult:userQueryResult =await client.query(queryConfig)

   if(queryResult.rowCount===0){
    throw new AppError("email not found",401)
     } 


    
}