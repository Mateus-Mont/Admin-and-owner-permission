import { hashSync } from "bcryptjs"
import { z } from "zod"

export const updateLoginSchema = z.object({
    name:z.string().min(3).max(20).optional(),
    email: z.string().email().max(100).optional(),
    password: z.string().max(120).transform((pass)=>{
        return hashSync(pass,10)
    }).optional(),
    
})
