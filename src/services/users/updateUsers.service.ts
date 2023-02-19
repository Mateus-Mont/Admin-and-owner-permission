import { Request, Response } from "express";
import { QueryConfig } from "pg";
import format from "pg-format";
import { client } from "../../database";
import { iDataUser } from "../../interfaces/createUser";
import { iDataUpdateUser } from "../../interfaces/updateUser";

export const updateUserService = async (
  req: Request,
  res:Response
): Promise<iDataUpdateUser | Response> => {

  const dataBodyUpdate:iDataUpdateUser=req.body



   const idUser:number=parseInt(req.params.id)
  const queryString: string = format(
    `
   UPDATE
   users
   SET (%I)= ROW (%L)
   WHERE
    id=$1
   RETURNING 
    id,name,email,admin,active;
`,
    Object.keys(dataBodyUpdate),
    Object.values(dataBodyUpdate)
  );

  const queryConfig: QueryConfig = {
    text: queryString,
    values: [idUser]
  };

  const queryResult=await client.query(queryConfig)

  return queryResult.rows[0]
};
