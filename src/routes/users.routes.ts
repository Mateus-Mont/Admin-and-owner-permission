import { Router } from "express";
import {
  createUsersController,
  allUsersRegisteredController,
  deleteUserController,
} from "../controllers/users.controllers";
import { ensureUserExists } from "../middlewares/ensureUserExists";
import { ensureValidBody } from "../middlewares/ensureValidBody";
import { createUsersSchema } from "../schemas/users.schema";
import { ensureIdUserExists } from "../middlewares/ensureIdUserExists";
import { ensureTokenIsValid } from "../middlewares/ensureTokenIsValid";
import { ensureTokenIsAdmin } from "../middlewares/ensureTokenIsAdmin";
import { updataUserController } from "../controllers/users.controllers";
import { ensureValidUpdate } from "../middlewares/ensureValidUpadate";
import { updateLoginSchema } from "../schemas/update.schema";
import {updataActiveUserController} from "../controllers/users.controllers"
import {getProfileUserController} from "../controllers/users.controllers"

export const userRoutes: Router = Router();

userRoutes.post("",ensureValidBody(createUsersSchema),ensureUserExists,createUsersController);
userRoutes.get("", ensureTokenIsAdmin, allUsersRegisteredController);
userRoutes.get("/profile",ensureTokenIsValid,getProfileUserController)
userRoutes.patch("/:id",ensureIdUserExists,ensureUserExists,ensureValidUpdate(updateLoginSchema),ensureTokenIsValid,updataUserController);
userRoutes.delete("/:id", ensureIdUserExists,ensureTokenIsValid,deleteUserController);
userRoutes.put("/:id/recover",ensureIdUserExists,ensureTokenIsAdmin,updataActiveUserController)
