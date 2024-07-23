import { AppointmentDTO } from "../DTO/appointmentDTO"
import AppointmentStatus from "../ENUMS/EAppointmentStatus"
import { IAppointment } from "../interfaces/IAppointment"

const appointmentsList : IAppointment[] = []
let id = 1
export const getAppointmentsService = async () : Promise<IAppointment[]>=>{
    return appointmentsList
}

export const getAppointmentsByIdService = async (id : number) :Promise<IAppointment | undefined>=>{
    const appointmentSerch = appointmentsList.find(appointment => appointment.id === id)
    return appointmentSerch
    
}
export const createAppointmentService = async (appointment : AppointmentDTO):Promise<IAppointment> =>{
 const newAppointment = {
    id:id,
    date: appointment.date,
    time: appointment.time,
    status: AppointmentStatus.ACTIVE,
    user_id: appointment.user_id
 }
 appointmentsList.push(newAppointment)
 id ++
 return newAppointment
}

export const cancellAppointmentService = async (id : number) :Promise<string> =>{
    //futuras validaciones : si el usuario existe, si no tiene un turno agendado en ese horario, que el turno exista
    let correctID = false
    appointmentsList.forEach((appointment) => {
        if (appointment.id === id) {
            appointment.status = AppointmentStatus.CANCELLED
            correctID = true
        }
        
    });
    if (correctID) { 
        return 'turno cancelado'
    } else return 'no hay turnos con ese id'
}