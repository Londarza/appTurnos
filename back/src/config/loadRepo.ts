// repositorio.ts
import { AppDataSource } from "./data-source";
import { User } from "../entities/User";
import { Credential } from "../entities/Credential";
import { Appointment } from "../entities/Appointment";

export const userRepository = AppDataSource.getRepository(User);
export const credentialRepository = AppDataSource.getRepository(Credential);
export const appointmentRepository = AppDataSource.getRepository(Appointment);

// Función para inicializar todos los repositorios
export async function initializeRepositories() {
  try {
    await AppDataSource.initialize();
    console.log("Data Source initialized");
  } catch (error) {
    console.error("Error during Data Source initialization", error);
  }
}
