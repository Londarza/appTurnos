import userDTO from "../DTO/userDTO";
import IUser from "../interfaces/IUser";
import { createCredentialService } from "./credentialsServices";

const userList:IUser[] = []
let id = 1

export const getUsersService = async () :Promise<IUser[]>=> {
     return userList
    };


export const getUserByIdService = async (id:number):Promise<IUser | undefined> => {
    const userSerch = userList.find(user => user.id === id)
    if (userSerch) {
        return userSerch
    } else {return undefined}
};


export const createUserService = async (user:userDTO) :Promise<IUser> => {
    
    const credentialsID = await createCredentialService({username: user.username,password: user.password})
    const newUser :IUser= {
        id : id,
        name : user.name,
        email : user.email,
        birthdate : user.birthdate,
        nDni : user.nDni,
        credentialsId : credentialsID
    }
    userList.push(newUser)
    id ++

    return newUser
    
    
};
