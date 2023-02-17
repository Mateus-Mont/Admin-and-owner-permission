import { Router } from "express"
import { createUsersController,allUsersRegisteredController } from "../controllers/users.controllers"
import { ensureUserExists } from "../middlewares/ensureUserExists"
import {ensureValidBody}from "../middlewares/ensureValidBody"
import {createUsersSchema} from "../schemas/users.schema"
import {ensureIdUserExists} from "../middlewares/ensureIdUserExists"
import { ensureTokenIsValid } from "../middlewares/ensureTokenIsValid"
import {ensureTokenIsAdmin} from "../middlewares/ensureTokenIsAdmin"
import {updataUserController} from "../controllers/users.controllers"

export const userRoutes: Router = Router()

userRoutes.post("",ensureValidBody(createUsersSchema),ensureUserExists, createUsersController)
userRoutes.get("",ensureTokenIsAdmin,allUsersRegisteredController)

userRoutes.patch("/:id",ensureIdUserExists,updataUserController)
