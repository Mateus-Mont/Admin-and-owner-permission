import  {Request,Response} from "express"
import { QueryConfig } from "pg"
import { client } from "../../database"

export const getProfileUserService=async(req:Request,res:Response):Promise<Response>=>{

    const userId=req.user

    const queryString: string = `
    SELECT
      id, name, email, active, admin
    FROM
      users
    WHERE
      id=$1;
  `;

    const queryConfig:QueryConfig={
        text:queryString,
        values:[userId]
    }

    const queryResult=await client.query(queryConfig)

    return res.status(200).json(queryResult.rows[0])


}