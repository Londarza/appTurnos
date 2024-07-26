import { initializeRepositories } from "./config/loadRepo";
import server from "./server";
import { PORT } from './config/envs'



initializeRepositories()
  .then(() => {
    console.log("Repositories initialized");
    server.listen(PORT, () => {
      console.log(`Servidor funcionando ok en puerto :${PORT}`);
    });
  })
  .catch(error => {
    console.error("Error during repository initialization", error);
  });