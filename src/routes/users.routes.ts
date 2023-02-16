import { Router } from 'express'
import { createUsersController,allUsersRegisteredController } from '../controllers/users.controllers'
import { ensureUserExists } from '../middlewares/ensureUserExists'
import {ensureValidBody}from "../middlewares/ensureValidBody"
import {createUsersSchema} from "../schemas/users.schema"
import {ensureIdUserExists} from "../middlewares/ensureIdUserExists"

export const userRoutes: Router = Router()

userRoutes.post("",ensureValidBody(createUsersSchema),ensureUserExists, createUsersController)
userRoutes.get("",allUsersRegisteredController)
userRoutes.get(":id/",ensureIdUserExists)