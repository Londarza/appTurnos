import { Request, Response } from "express";
import {
  createUserService,
  getUserByIdService,
  getUsersService
} from "../services/userServices";
import { validateCredentials } from "../services/credentialsServices";
import { UserRepository } from "../repositories.ts/UserRepository";
import { Credential } from "../entities/Credential";


export const getUsers = async (  req: Request,  res: Response): Promise<Response> => {
  try {
    const allUsers = await getUsersService();
    return res.status(200).json(allUsers);
  } catch (error) {
    return res
      .status(400)
      .json({ error: "Ocurrio un error al buscar los usuarios." });
  }
};
export const getUsersById = async (  req: Request,  res: Response): Promise<Response> => {
  const { id } = req.params;
  try {
    const getUserById = await getUserByIdService(+id);
    return res.status(200).json(getUserById);
  } catch (error) {
    return res.status(404).json({ error: "Usuario no encontrado." });
  }
};

export const registerUser = async (  req: Request,  res: Response): Promise<Response> => {
  const { username, password, name, email, birthdate, nDni } = req.body;

  if (!username) {
    return res.status(400).json({ error: "Falta el username" });
  }
  if (!password) {
    return res.status(400).json({ error: "Falta el password" });
  }
  if (!name) {
    return res.status(400).json({ error: "Falta el name" });
  }
  if (!email) {
    return res.status(400).json({ error: "Falta el email" });
  }
  if (!birthdate) {
    return res.status(400).json({ error: "Falta el birthdate" });
  }
  if (!nDni) {
    return res.status(400).json({ error: "Falta el nDni" });
  }

  try {
    const newUser = await createUserService({
      username,
      password,
      name,
      email,
      birthdate,
      nDni
    });
    return res.status(201).json(newUser);
  } catch (error) {
    console.error("No se pudo crear el usuario", error);
    return res.status(400).json({ error: "Error al crear un usuario" });
  }
};

export const loguinUser = async (  req: Request,  res: Response): Promise<Response> => {

  const {username, password} = req.body
try {
  const credenciales : Credential = await validateCredentials({username,password})
  const user = await UserRepository.findOne({    where: { credential:credenciales }});
  if (user) {
    return res.status(200).json({"login": true,user})
  }else {throw Error('Error al validar las credenciales')}
 
  
} catch (error) {
  return res.status(400).json({error: 'Error al validar las credenciales'})
}
};
