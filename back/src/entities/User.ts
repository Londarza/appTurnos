import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm"

import { Credential } from "./Credential"
import { Appointment } from "./Appointment"

@Entity({name:"users"})
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    email: string

    @Column({type:"date"})
    birthdate: Date

    @Column()
    nDni: number

    @OneToOne(()=> Credential)
    @JoinColumn()
    credential: Credential

    @OneToMany(()=>Appointment,(appointment)=>appointment.user)
    appointment: Appointment[]
}

