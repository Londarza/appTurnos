import { AppDataSource } from "../config/data-source";
import { userRepository } from "../config/loadRepo";
import userDTO from "../DTO/userDTO";
import { User } from "../entities/User";
export const userModel = AppDataSource.getRepository(User)
import { createCredentialService } from "./credentialsServices";


export const getUsersService = async (): Promise<User[]> => {
    const users :User[]= await userModel.find({relations:{credential:true, appointment:true}});
    return users;
};

export const getUserByIdService = async (id: number): Promise<User | null> => {
    const userSearch = await userRepository.findOne({
        where: { id },
        relations: ['credential', 'appointment']
    });
    return userSearch
};

export const createUserService = async (user: userDTO): Promise<User> => {
    const credentials = await createCredentialService({
        username: user.username,
        password: user.password
    });
    const newUser: User = await userModel.create({
        name: user.name,
        email: user.email,
        birthdate: user.birthdate,
        nDni: user.nDni,
        credential: credentials
    });
    await userModel.save(newUser);
    return newUser;
};
