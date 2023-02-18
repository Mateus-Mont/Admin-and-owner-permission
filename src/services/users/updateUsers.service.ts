import { Request, Response } from "express";
import { QueryConfig } from "pg";
import format from "pg-format";
import { object } from "zod";
import { client } from "../../database";
import { iDataUpdateUser } from "../../interfaces/updateUser";

export const updateUserService = async (
  req: Request,
  res:Response
): Promise<iDataUpdateUser | Response> => {

   const idUser:number=parseInt(req.params.id)


  const queryString: string = format(
    `
   UPDATE
   users
   SET (%I)= ROW (%L)
   WHERE
    id=$1
   RETURNING*;
`,
    Object.keys(req.body),
    Object.values(req.body)
  );

  const queryConfig: QueryConfig = {
    text: queryString,
    values: [idUser]
  };

  const queryResult=await client.query(queryConfig)

  return queryResult.rows[0]
};
