import {Request, Response } from "express";
import { iLoginRequest } from "../interfaces/loginData";
import {createLoginService}from "../services/login/createLogin.service"

export const loginControllers=async(req:Request,res:Response):Promise<Response>=>{

  await  createLoginService(req.body)
  return res.status(200).json()
}