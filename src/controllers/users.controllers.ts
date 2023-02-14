import { Request,Response } from "express"
import { iDataUser } from "../interfaces/createUser"
import {createUsersService} from "../services/users/createUsers.service"



export const createUsersController=async(req:Request,res:Response):Promise<Response>=>{
    const userData:iDataUser=req.body

    const newUser= await   createUsersService(userData)
    
    return res.status(201).json(newUser)
}