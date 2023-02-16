import { Router } from "express";
import { createLoginService } from "../services/login/createLogin.service";
import {ensureDataIsValidMiddleware}from  "../middlewares/ensureDataLoginIsValid"
import { createLoginSchema } from "../schemas/login.shema";
import{loginControllers} from "../controllers/login.controllers"

export const loginRoutes:Router=Router()

loginRoutes.post("",ensureDataIsValidMiddleware(createLoginSchema),loginControllers)