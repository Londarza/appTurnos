import { DataSource } from "typeorm"
import { DBNAME,DBPASSWORD,DBUSERNAME,DBPORT, DBHOST } from "./envs"
import { User } from "../entities/User"
import { Credential } from "../entities/Credential"
import { Appointment } from "../entities/Appointment"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: `${DBHOST}`,
    port: Number(DBPORT),
    username: `${DBUSERNAME}`,
    password: `${DBPASSWORD}`,
    database: `${DBNAME}`,
    synchronize: true,
    logging: true,
    entities: [User,Credential,Appointment],
    subscribers: [],
    migrations: [],
    //dropSchema : true
})
export const dbInitialice = async()=>{
try {
    const conection =  await AppDataSource.initialize()
    if (conection.isInitialized) {
        console.log('NamasteDB is conected correctly');
        
    }
} catch (error) {
    console.log(error);
    
}
}