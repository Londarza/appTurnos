import AppointmentStatus from "../ENUMS/EAppointmentStatus";


interface AppointmentDTO {
    date: Date,
    time: string,
    status: AppointmentStatus,
    user_id: number
}

export  {AppointmentDTO}

