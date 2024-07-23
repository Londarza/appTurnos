import { Router } from "express";
import { getUsers, getUsersById, loguinUser, registerUser } from "../controllers/userController";
const userRouter : Router = Router()


userRouter.get('/',getUsers)
userRouter.get('/:id',getUsersById)
userRouter.post('/register',registerUser)
userRouter.post('/loguin',loguinUser)

export default userRouter