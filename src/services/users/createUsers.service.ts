import { iDataUser, iUserWithoutPassword, userQueryResult } from "../../interfaces/createUser"
import format from 'pg-format'
import {client} from "../../database"
import {returnSchemaWithoutPassword} from "../../schemas/users.schema"


export const createUsersService=async(userData:iDataUser):Promise<iUserWithoutPassword>=>{

    const queryString:string=format(`
    INSERT INTO
       users(%I)
    VALUES(%L)
    RETURNING
      id,name,email,admin,active;

    `,
     Object.keys(userData),
     Object.values(userData))

    const QueryResult:userQueryResult=await client.query(queryString)
    return QueryResult.rows[0]
}