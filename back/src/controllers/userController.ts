import { Request, Response } from "express"
import { createUserService, getUserByIdService, getUsersService } from "../services/userServices"

export const getUsers = async (req:Request,res:Response) =>{
    const allUsers = await getUsersService()
    res.status(200).json(allUsers)
}
export const getUsersById = async (req:Request,res:Response) =>{
    const {id} = req.params
    const getUserById = await getUserByIdService(+id)
    res.status(200).json(getUserById)
}

export const registerUser = async (req:Request,res:Response) =>{
    const {username, password, name, email, birthdate, nDni} = req.body
    const newUser = await createUserService({username,password,name,email,birthdate,nDni})
    res.status(200).json(newUser)
}
export const loguinUser = async (req:Request,res:Response) =>{
    res.send(' Login del usuario a la aplicación.')
}