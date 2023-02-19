import { Request,Response } from "express";
import { QueryConfig } from "pg";
import { client } from "../../database";
import { AppError } from "../../errors";

export const updateActiveUserService = async (req: Request, res: Response): Promise<Response> => {

    const idUser: number = parseInt(req.params.id)

    const queryString: string = `
    SELECT
     active
    FROM
     users
    WHERE
     id=$1;
    `

    const queryConfig: QueryConfig = {
        text: queryString,
        values: [idUser]
    }

    const queryResult = await client.query(queryConfig)

    if (queryResult.rows.length === 0) {
        throw new AppError("User not found", 404)
    }

    const userIsActive = queryResult.rows[0].active

    if (userIsActive) {
        throw new AppError("User already active", 400)
    }

    const updateQueryString: string = `
    UPDATE 
     users
    SET 
     active=true
    WHERE id=$1
    RETURNING
     id,name,email,admin,active;
    `

    const updateQueryConfig: QueryConfig = {
        text: updateQueryString,
        values: [idUser]
    }

    const updateQueryResult = await client.query(updateQueryConfig)

    return updateQueryResult.rows[0]
}