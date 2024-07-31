import { Request, Response } from "express"
import { cancellAppointmentService, createAppointmentService, getAppointmentsByIdService, getAppointmentsService } from "../services/appointmentsServices"



export const getappointments = async (req:Request,res:Response) :Promise<Response>=>{
    try {
        const allAppointments = await getAppointmentsService()
    return res.status(200).json(allAppointments)
    } catch (error) {
        return res.status(404).json({error:"No se pudo acceder a la lista de turnos."})
    }
}

export const getappointmentById = async (req:Request,res:Response) :Promise<Response>=>{
    const {id} = req.params
    try {
        const appointmentById = await getAppointmentsByIdService(+id)
        return res.status(200).json(appointmentById)
    } catch (error) {
        return res.status(404).json({error:`Usuario con ID ${id} no encontrado `})
    }
}

export const scheduleAppointments = async (req:Request,res:Response):Promise<Response> =>{
   const {date,time,user} = req.body
   if (!date) {
    return res.status(400).json({ error: "Falta la fecha para agendar el turno" });
  }
  if (!time) {
    return res.status(400).json({ error: "Falta el horario para agendar el turno" });
  }
  if (!user) {
    return res.status(400).json({ error: "Falta el usuario para agendar el turno" });
  }
   try {
    const newAppointment = await createAppointmentService({date,time,user})
    return res.status(201).json(newAppointment)
   } catch (error) {
    console.error("No se pudo agendar el turno", error);
    return res.status(400).json({ error: "Error al agendar un turno" });
   }
   
}

export const cancelAppointments = async (req:Request,res:Response):Promise<Response> =>{
   const {id} = req.params
   try {
    const cancelAppointment = await cancellAppointmentService(+id)
    return res.status(200).json({message:cancelAppointment})
   } catch (error) {
    console.error("No se pudo cancelar el turno", error);
    return res.status(404).json({error: "No se pudo cancelar el turno"})
   }
}
