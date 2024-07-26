import { AppDataSource } from "../config/data-source";
import { AppointmentDTO } from "../DTO/appointmentDTO";
import { Appointment } from "../entities/Appointment";
import { userModel } from "./userServices";
import AppointmentStatus from "../ENUMS/EAppointmentStatus";
export const appointmentsModel = AppDataSource.getRepository(Appointment)
export const getAppointmentsService = async (): Promise<Appointment[]> => {
  const allAppointments = appointmentsModel.find({relations:{user:true}});
  return allAppointments;
};

export const getAppointmentsByIdService = async (
  id: number
): Promise<Appointment | null> => {
  const appointmentSerch = appointmentsModel.findOneBy({ id });
  return appointmentSerch;
};
export const createAppointmentService = async (  appointment: AppointmentDTO): Promise<Appointment> => {
  const user = await userModel.findOneBy({ id: appointment.user });

  if (!user) {
    throw new Error("User not found");
  }
  const newAppointment: Appointment = appointmentsModel.create({
    date: appointment.date,
    time: appointment.time,
    status: AppointmentStatus.ACTIVE,
    user: user
  });
  await appointmentsModel.save(newAppointment);
  return newAppointment;
};

export const cancellAppointmentService = async (id: number): Promise<string> => {
  const appointment = await appointmentsModel.findOne({ where: { id } });

  if (!appointment) {
    return "no hay turnos con ese id";
  }

  appointment.status = AppointmentStatus.CANCELLED;
  await appointmentsModel.save(appointment);
  return "turno cancelado";
};

