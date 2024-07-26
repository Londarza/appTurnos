import { Request, Response } from "express"
import { cancellAppointmentService, createAppointmentService, getAppointmentsByIdService, getAppointmentsService } from "../services/appointmentsServices"

export const getappointments = async (req:Request,res:Response) =>{
    const allAppointments = await getAppointmentsService()
    res.status(200).json(allAppointments)
}
export const getappointmentById = async (req:Request,res:Response) =>{
    const {id} = req.body
    const appointmentById = await getAppointmentsByIdService(id)
    res.status(200).json(appointmentById)
}

export const scheduleAppointments = async (req:Request,res:Response) =>{
   const {date,time,user} = req.body
   const newAppointment = await createAppointmentService({date,time,user})
    res.status(200).json(newAppointment)
}

export const cancelAppointments = async (req:Request,res:Response) =>{
   const {id} = req.body
   const cancelAppointment = await cancellAppointmentService(id)
    res.status(200).json({message:cancelAppointment})
}
