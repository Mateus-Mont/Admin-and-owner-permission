import { Request,Response } from "express"
import { QueryConfig } from "pg"
import { iLoginRequest } from "../../interfaces/loginData"
import {client} from "../../database"
import { AppError } from "../../errors"
import { compare } from "bcryptjs"
import jwt from "jsonwebtoken"
import { iUserResultWithPassword } from "../../interfaces/createUser"

export const createLoginService=async(loginData:iLoginRequest):Promise<string>=>{
    
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
        values:[loginData.email]
    }
  
   const queryResult:iUserResultWithPassword =await client.query(queryConfig)
 

   if(queryResult.rowCount===0){
    throw new AppError("Wrong email or password", 401)
     } 

     const matchPassword: boolean = await compare(loginData.password, queryResult.rows[0].password)

     if(!matchPassword){
         throw new AppError("Wrong email or password", 401)
     }
     const token: string = jwt.sign(
         {
             admin: queryResult.rows[0].admin
         },
        "CH4V3 73CR3T4",
         {
             expiresIn: "24h",
             subject: queryResult.rows[0].id.toString()
         }
     )
     return token   
}