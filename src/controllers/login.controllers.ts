import {Request, Response } from "express";
import {createLoginService}from "../services/login/createLogin.service"

export const loginControllers=async(req:Request,res:Response):Promise<Response>=>{

  const token = await createLoginService(req.body)
  return res.json({token: token})
}