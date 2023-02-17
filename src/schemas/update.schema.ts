import { z } from "zod"

export const updateLoginSchema = z.object({
    name:z.string(),
    email: z.string().email(),
    password: z.string()
})
