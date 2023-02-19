import { Request,Response } from "express";
import { QueryConfig } from "pg";
import { client } from "../../database";

export const deleteUserService=async(req:Request,res:Response):Promise<Response>=>{

    const idUser:number=parseInt(req.params.id)

    const queryString:string=`
    UPDATE
      users
    SET
     active=false
    WHERE
      id=$1
    RETURNING*;
    
    `
    const queryConfig:QueryConfig={
        text:queryString,
        values:[idUser]
    }

    await client.query(queryConfig)
    return res
}