import AppointmentStatus from "../ENUMS/EAppointmentStatus";


interface IAppointment {
    id: number,
    date: Date,
    time: string,
    user_id: number,
    status: AppointmentStatus,
}

export  {IAppointment}

