import { Request,Response } from "express"
import { iDataUser } from "../interfaces/createUser"
import {createUsersService} from "../services/users/createUsers.service"
import  {allUsers} from  "../services/users/allUsers.service"
import {ensureUserExists} from "../middlewares/ensureUserExists"
import {updateUserService}from "../services/users/updateUsers.service"



export const createUsersController=async(req:Request,res:Response):Promise<Response>=>{
    const userData:iDataUser=req.body
    const newUser= await   createUsersService(userData)   
  
    return res.status(201).json(newUser)
}

export const allUsersRegisteredController=async(req:Request,res:Response):Promise<Response>=>{
    const allUsersR= await allUsers(res)
    return allUsersR
}
export const updataUserController=async(req:Request,res:Response):Promise<Response>=>{


const update=await updateUserService(req,res)

    return res.status(200).json(update)
}