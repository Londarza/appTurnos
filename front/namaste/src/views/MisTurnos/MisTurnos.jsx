import { MisTurnosContainer, CardWrapper } from "./misturnos";
import TurnoCard from "../../components/turnoCards/TurnoCard";
import { useState, useEffect } from "react";
import axios from 'axios'
import AppointmentModal from "../../components/appointmentModal/AppointmentModal.jsx";

const MisTurnos = () => {
  const [appointments, setAppointments] = useState([])
  const [appointmentId,setAppointmentId] = useState(0)
  const [appointmentDetail, setAppointmentDetail] = useState(false)
 
  const handleOnClick = (id)=>{
    setAppointmentId(id)
    setAppointmentDetail(true)
      }
  const handleOnClose = ()=>{
    setAppointmentDetail(false)
  }

     
  useEffect(()=>{
    const fetchAppointments = async () => {
      try {
        const response = await axios.get('http://localhost:3000/appointments');
        setAppointments(response.data); 
      } catch (error) {
        console.error("Error al obtener los turnos:", error); // Manejo de errores
      }
    };

    fetchAppointments();
  },[])

 

    return (<><MisTurnosContainer>
        <h1>Turnos de usuarios</h1>
        <CardWrapper>
          {appointments?.map((appointment) => (
            <TurnoCard key={appointment.id} appointment={appointment} handleOnClick={handleOnClick}/>
          ))}
        </CardWrapper>
      </MisTurnosContainer>
      {appointmentDetail && <AppointmentModal handleOnClose={handleOnClose} id={appointmentId} />}
      </>
        
      
    );
};

export default MisTurnos;