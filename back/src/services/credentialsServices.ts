import createCredentialDTO from "../DTO/credentialsDTO";
import ICredentials from "../interfaces/ICredentials";
const listCredentials: ICredentials[] = [];
let id = 1;`

`
export const createCredentialService = async (credentials : createCredentialDTO) :Promise<number> => {
  const newCredentials: ICredentials = {
    id: id,
    username: credentials.username,
    password: credentials.password,
  };
  listCredentials.push(newCredentials);
  id++;
  return newCredentials.id;
};

export const validateCredentials = async (credentials : createCredentialDTO) :Promise<number> =>{
    const busqueda :ICredentials | undefined = listCredentials.find(credential => credential.username === credentials.username)
    if (busqueda) {
     if(busqueda.password === credentials.password){return busqueda.id} else {return 0}
    } else {return 0}
}

