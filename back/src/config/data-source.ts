import { DataSource } from "typeorm"
import { DBNAME,DBPASSWORD,DBUSERNAME } from "./envs"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 8080,
    username: `${DBUSERNAME}`,
    password: `${DBPASSWORD}`,
    database: `${DBNAME}`,
    synchronize: true,
    logging: true,
    entities: [],
    subscribers: [],
    migrations: [],
})