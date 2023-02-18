import { Request,Response } from "express";
import { QueryConfig } from "pg";

export const deleteUserService=async(req:Request,res:Response):Promise<Response>=>{

    const queryString:string=`
    UPDATE
      users
    WHERE id=1
    
    `

    const queryConfig:QueryConfig={
        text:queryString,
        values:[]
    }
return res
}