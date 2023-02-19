import {iUserWithoutPassword, userQueryResult} from "../../interfaces/createUser"
import { Response } from "express"
import { QueryConfig } from "pg"
import {client} from "../../database"
import{ensureTokenIsValid} from "../../middlewares/ensureTokenIsValid"
 
export const allUsers=async(res:Response):Promise<Response>=>{
  
    const queryString=`
    SELECT 
     id, name, email,admin,active
    FROM
     users;
    `
    const queryConfig:QueryConfig={
        text:queryString
    }

    const queryResult:userQueryResult=await client.query(queryConfig)
    return res.status(200).json(queryResult.rows)
}