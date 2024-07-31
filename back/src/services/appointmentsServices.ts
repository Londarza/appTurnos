
import { AppointmentDTO } from "../DTO/appointmentDTO";
import { Appointment } from "../entities/Appointment";

import AppointmentStatus from "../ENUMS/EAppointmentStatus";

import { UserRepository } from "../repositories.ts/UserRepository";
import { appointmentRepository } from "../repositories.ts/AppointmentRepository";
import { AppDataSource } from "../config/data-source";


export const getAppointmentsService = async (): Promise<Appointment[]> => {
  try {
    const allAppointments = await appointmentRepository.find({relations:{user:true}});
    if (!allAppointments) {
      throw Error("No se pudo traer la lista de turnos.")
    }
  return allAppointments;
  } catch (error) {
    console.error(error)
    throw Error ("No se pudo trar la lista de turnos.")
  }
  
};

export const getAppointmentsByIdService = async (  id: number): Promise<Appointment | null> => {
 try {
  const appointmentSerch = await appointmentRepository.findOne({    where: { id },    relations: { user: true }  });
  if (!appointmentSerch) {
    throw Error (`No se en contro el turno con el ID:${id}`)
  }
  return appointmentSerch;
 } catch (error) {
  console.error(error)
  throw Error (`No se en contro el turno con el ID:${id}`)
 }
};


export const createAppointmentService = async (  appointment: AppointmentDTO): Promise<Appointment> => {
  const queryRunner = AppDataSource.createQueryRunner();
  try {
    await queryRunner.connect();
    await queryRunner.startTransaction();

  const user = await UserRepository.findOneBy({ id: appointment.user });

  if (!user) {
    throw new Error(`Se intento agendar el turno al usuario con id ${appointment.user}, pero no se encontro ninguno`);
  }
  const newAppointment: Appointment = appointmentRepository.create({
    date: appointment.date,
    time: appointment.time,
    status: AppointmentStatus.ACTIVE,
    user: user
  });
  await queryRunner.manager.save(newAppointment);
  await queryRunner.commitTransaction();
  return newAppointment;
 } catch (error) {
  console.error("Error inesperado al crear turno:", error);
        await queryRunner.rollbackTransaction();
        throw Error("No se pudo agendar el turno.");
 }finally{
  await queryRunner.release();
 }
  
};

export const cancellAppointmentService = async (id: number): Promise<string> => {
  const queryRunner = AppDataSource.createQueryRunner();
  try {
    await queryRunner.connect();
    await queryRunner.startTransaction();

    const appointment = await appointmentRepository.findOne({ where: { id } });
  if (!appointment) {
    throw Error ('No se encontro un turno con ese ID')
  }
  if(appointment.status === AppointmentStatus.CANCELLED){
    return 'No se puede cancelar un turno que ya esta cancelado.'
  }

  appointment.status = AppointmentStatus.CANCELLED;
  await queryRunner.manager.save(appointment);
  return "turno cancelado";
  } catch (error) {
    console.error("Error al cancelar turno", error);
    await queryRunner.rollbackTransaction();
    throw Error("No se pudo cancelar el turno.");
  } finally {
    await queryRunner.release()
  }
  
};

