import { QueryResult } from "pg";
import { createUsersSchema,returnUserSchema,returnSchemaWithoutPassword } from "../schemas/users.schema"
import  {z} from "zod"


export type iDataUser=z.infer<typeof createUsersSchema>
export type iDataEncrementIdActive=z.infer<typeof returnUserSchema>


export type iUserWithoutPassword=Omit<iDataEncrementIdActive,"password"> 
export type userQueryResult = QueryResult<iUserWithoutPassword>;

export type iUserResultWithPassword = QueryResult<iDataEncrementIdActive>