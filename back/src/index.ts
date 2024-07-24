import server from "./server";
import { PORT } from './config/envs'
import "reflect-metadata"
import { AppDataSource } from "./config/data-source";

AppDataSource.initialize()
.then((res)=>{
    res
    console.log(`namaste DB funcionando en puerto 8080`);
    server.listen (PORT || 3000, ()=>{
        console.log(`servidor funcionando en puerto ${PORT} `);
    })
})

