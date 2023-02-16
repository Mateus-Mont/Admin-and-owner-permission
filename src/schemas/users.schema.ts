import { z } from "zod"

export const createUsersSchema=z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string(),
    admin: z.boolean()
}) 
   
export const returnUserSchema=createUsersSchema.extend({
    id:z.number(),
    active:z.boolean()
})

export const returnSchemaWithoutPassword=returnUserSchema.omit({password:true})
  