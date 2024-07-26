import { AppDataSource } from "../config/data-source";
import createCredentialDTO from "../DTO/credentialsDTO";
import { Credential } from "../entities/Credential";
export const credentialsModel = AppDataSource.getRepository(Credential)



export const createCredentialService = async (credentials : createCredentialDTO) :Promise<Credential> => {
  const newCredentials: Credential = credentialsModel.create({
    username: credentials.username,
    password: credentials.password,
  })
  await credentialsModel.save(newCredentials)
 
  return newCredentials;
};

export const validateCredentials = async (credentials : createCredentialDTO) :Promise<number> =>{
    const foundCredentials : Credential | null = await credentialsModel.findOneBy({username:credentials.username})
    
    if (foundCredentials) {
     if(foundCredentials.password === credentials.password){return foundCredentials.id} else {return 0}
    } else {return 0}
}

