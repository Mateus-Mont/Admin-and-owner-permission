import { hashSync } from "bcryptjs"
import { z } from "zod"


export const createUsersSchema=z.object({
    name: z.string().min(3).max(20),
    email: z.string().email().max(100),
    password: z.string().max(120).transform((pass)=>{
        return hashSync(pass,10)
    }),
    admin: z.boolean().optional()
  
}) 
   
export const returnUserSchema=createUsersSchema.extend({
    id:z.number(),
    active:z.boolean()
   
})

export const returnSchemaWithoutPassword=returnUserSchema.omit({password:true})
  