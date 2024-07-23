import server from "./server";
import { PORT } from './config/envs'

server.listen (PORT || 3000, ()=>{
    console.log(`servidor funcionando en puerto ${PORT} `);
    
})