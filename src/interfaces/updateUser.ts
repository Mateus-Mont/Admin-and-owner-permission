import {updateLoginSchema}from "../schemas/update.schema"

import  {z} from "zod"


export type iDataUpdateUser=z.infer<typeof updateLoginSchema>
