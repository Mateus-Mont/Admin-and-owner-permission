import { hashSync } from "bcryptjs"
import { z } from "zod"

export const createUsersSchema=z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().transform((pass)=>{
        return hashSync(pass,10)
    })
  
}) 
   
export const returnUserSchema=createUsersSchema.extend({
    id:z.number(),
    active:z.boolean(),
    admin: z.boolean()
})

export const returnSchemaWithoutPassword=returnUserSchema.omit({password:true})
  