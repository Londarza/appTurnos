import { MisTurnosContainer, CardWrapper } from "./misturnos";
import TurnoCard from "../../components/turnoCards/TurnoCard";
import myAppointments from "../../Helpers/myAppointments";
import { useState } from "react";

const MisTurnos = () => {
  const [appointments, setAppointments] = useState(myAppointments)


    return (
        <MisTurnosContainer>
        <h1>Mis Turnos</h1>
        <CardWrapper>
          {appointments.map((appointment) => (
            <TurnoCard key={appointment.id} appointment={appointment} />
          ))}
        </CardWrapper>
      </MisTurnosContainer>
    );
};

export default MisTurnos;