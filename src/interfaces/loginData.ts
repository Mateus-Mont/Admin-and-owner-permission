import { createLoginSchema } from "../schemas/login.shema"
import { z } from 'zod'

export type iLoginRequest = z.infer<typeof createLoginSchema>

