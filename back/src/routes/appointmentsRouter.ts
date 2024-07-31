import { Router } from "express";
import { cancelAppointments, getappointmentById, getappointments, scheduleAppointments } from "../controllers/appointmentsController";
const appointmentsRouter : Router = Router()


appointmentsRouter.get('/', getappointments)
appointmentsRouter.get('/appointment/:id', getappointmentById)
appointmentsRouter.post('/schedule',scheduleAppointments )
appointmentsRouter.put('/cancel/:id', cancelAppointments)



export default appointmentsRouter