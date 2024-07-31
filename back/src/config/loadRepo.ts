// repositorio.ts
import { AppDataSource } from "./data-source";


// Función para inicializar todos los repositorios
export async function initializeRepositories() {
  try {
    await AppDataSource.initialize();
    console.log("Data Source initialized");
  } catch (error) {
    console.error("Error during Data Source initialization", error);
  }
}

