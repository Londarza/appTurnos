import createCredentialDTO from "../DTO/credentialsDTO";
import { Credential } from "../entities/Credential";

import { credentialRepository } from "../repositories.ts/CredentialRepository";

export const createCredentialService = async (  credentials: createCredentialDTO): Promise<Credential> => {
  const newCredentials: Credential = credentialRepository.create({
    username: credentials.username,
    password: credentials.password
  });
  await credentialRepository.save(newCredentials);

  return newCredentials;
};

export const validateCredentials = async (  credentials: createCredentialDTO): Promise<Credential> => {
  try {
    const foundCredentials: Credential | null = await credentialRepository.findOneBy({ username: credentials.username });

    if (foundCredentials?.password === credentials.password) {
      return foundCredentials
    } else {
      throw Error('Error al validar las credenciales');
    }
  } catch (error) {
    console.error('Error al validar las credenciales:', error);
    throw new Error('Error al validar las credenciales');
  }
};
