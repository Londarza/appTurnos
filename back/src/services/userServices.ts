import userDTO from "../DTO/userDTO";
import { User } from "../entities/User";
import { createCredentialService } from "./credentialsServices";
import { UserRepository } from "../repositories.ts/UserRepository";
import { AppDataSource } from "../config/data-source";


export const getUsersService = async (): Promise<User[]> => {
    try {
        const users: User[] = await UserRepository.find({ relations: { credential: true, appointment: true } });
        if (!users) {
            throw Error ("No se pudieron encontrar los usuarios")
        }
       
        return users;
    } catch (error) {
        console.error("Error al buscar usuarios.", error);
        throw Error("No se pudieron encontrar los usuarios.");
    }
};

export const getUserByIdService = async (id: number): Promise<User | null> => {
    try {
        const userSearch = await UserRepository.findOne({
            where: { id },
            relations: ['credential','appointment']
        });
        if (!userSearch) { 
            throw Error('Error al encontrar un usuario con ese ID')
        }
        return userSearch;

    } catch (error) {
        console.error(`Error fetching user with ID ${id}:`, error);
        throw Error(`No se pudo encontrar un usuario con ID: ${id}`);
    }
};

export const createUserService = async (user: userDTO): Promise<User> => {
    const queryRunner = AppDataSource.createQueryRunner();

    try {
        await queryRunner.connect();
        await queryRunner.startTransaction();

        const credentials = await createCredentialService({
            username: user.username,
            password: user.password
        });
    
        const newUser: User = UserRepository.create({
            name: user.name,
            email: user.email,
            birthdate: user.birthdate,
            nDni: user.nDni,
            credential: credentials
        });

        await queryRunner.manager.save(newUser);
        await queryRunner.commitTransaction();
        return newUser;
    } catch (error) {
        console.error("Error inesperado al crear usuario:", error);
        await queryRunner.rollbackTransaction();
        throw Error("no se pudo crear el usuario");
    } finally {
        await queryRunner.release();
    }
};

