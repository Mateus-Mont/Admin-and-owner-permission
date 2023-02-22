import { Request, Response } from "express";
import { iDataUser } from "../interfaces/createUser";
import { createUsersService } from "../services/users/createUsers.service";
import { allUsers } from "../services/users/allUsers.service";
import { updateUserService } from "../services/users/updateUsers.service";
import {deleteUserService}from "../services/users/deleteUsers.service"
import{updateActiveUserService} from "../services/users/updateActiveUser.service"
import {getProfileUserService} from "../services/users/getProfileUser.service"

export const createUsersController = async (req: Request,res: Response):Promise<Response> => {
  const userData: iDataUser = req.body;
  const newUser = await createUsersService(userData);
  return res.status(201).json(newUser);
};

export const allUsersRegisteredController = async (req: Request,res: Response):Promise<Response> => {
  const allUsersR = await allUsers(res);
  return allUsersR;
};

export const getProfileUserController=async(req:Request,res:Response):Promise<Response>=>{
  const profileUser= await getProfileUserService(req,res)
  return profileUser
}
export const updataUserController = async (req: Request,res: Response):Promise<Response> => {
  const update = await updateUserService(req);
  return res.status(200).json(update);
};

export const deleteUserController=async(req:Request,res:Response):Promise<Response>=>{
 await deleteUserService(req,res)
 return res.status(204).json()
}

export const updataActiveUserController=async(req:Request,res:Response):Promise<Response>=>{
  const updateActive=await updateActiveUserService(req)
  return  res.status(200).json(updateActive)
}