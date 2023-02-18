import { hashSync } from "bcryptjs"
import { z } from "zod"

export const updateLoginSchema = z.object({
    name:z.string(),
    email: z.string().email(),
    password: z.string().transform((pass)=>{
        return hashSync(pass,10)
    })
})
