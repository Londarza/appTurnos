import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import AppointmentStatus from "../ENUMS/EAppointmentStatus"

import { User } from "./User"
@Entity({name:"appointments"})
export class Appointment {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    date: Date

    @Column()
    time: string

    @Column({
        type:"enum",
        enum:AppointmentStatus,
        default:AppointmentStatus.ACTIVE
    })
    status: AppointmentStatus

    @ManyToOne(()=>User,(user)=>user.appointment)
    user: User
}
