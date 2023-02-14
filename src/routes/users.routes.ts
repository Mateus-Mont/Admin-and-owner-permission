import { Router } from 'express'
import { createUsersController } from '../controllers/users.controllers'

export const userRoutes: Router = Router()

userRoutes.post("", createUsersController)
userRoutes.get("")