import { Router } from 'express'
import { createUsersController,allUsersRegisteredController } from '../controllers/users.controllers'
import { ensureUserExists } from '../middlewares/ensureUserExists'

export const userRoutes: Router = Router()

userRoutes.post("",ensureUserExists, createUsersController)
userRoutes.get("",allUsersRegisteredController)