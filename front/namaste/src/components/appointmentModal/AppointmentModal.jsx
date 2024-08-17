import { useState, useEffect } from 'react';
import { ModalOverlay, ModalContent, CloseButton, CancelButton, ModalHeader, ModalBody } from './AppointmentModal';
import axios from 'axios';

const AppointmentModal = ({ id, handleOnClose }) => {
  const [appointment, setAppointment] = useState(null); // Cambié el estado inicial a null

  useEffect(() => {
    const fetchAppointment = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/appointments/appointment/${id}`);
        setAppointment(response.data);
      } catch (error) {
        console.error("Error al obtener detalle del turno:", error);
      }
    };

    fetchAppointment();
    return () => {
        setAppointment(null)}
  }, [id]);
  console.log(appointment);
  
  const handleOnClickCancel = async (id) => {
    try {
        const response = await axios.put(`http://localhost:3000/appointments/cancel/${id}`);
        const message = response.data.message;

        console.log('mensaje del serv: '+ message);
        

        if (message === "No se puede cancelar un turno que ya esta cancelado.") {
            alert("No se puede cancelar un turno que ya está cancelado.");
        } else if (message === "turno cancelado") {
            alert("El turno ha sido cancelado con éxito.");
            // Actualizar el estado del turno
            setAppointment((prevAppointment) => ({
                ...prevAppointment,
                status: 'cancelled',
            }));
        }
    } catch (error) {
        console.error("Error al cancelar el turno:", error);
        alert("Ocurrió un error al cancelar el turno. Por favor, inténtelo de nuevo.");
    }
};

return (
  <ModalOverlay>
      <ModalContent>
          <CloseButton onClick={handleOnClose}>Cerrar</CloseButton>
          <ModalHeader>
              <h2>Detalles del Turno</h2>
          </ModalHeader>
          <ModalBody>
              {!appointment ? (
                  <h3>Cargando ...</h3>
              ) : (
                  <>
                      <h3>Nombre del Usuario: {appointment.user?.name}</h3>
                      <h3>Email: {appointment.user?.email}</h3>
                      <h3>DNI: {appointment.user?.nDni}</h3>
                      <h3>Fecha Nac: {appointment.user?.birthdate}</h3>
                      <h3>Fecha turno: {appointment.date}</h3>
                      <h3>Hora: {appointment.time}:00 Hs</h3>
                      <h3>Estado: <span style={{ color: appointment.status === 'cancelled' ? '#E57373' : '#81C784' }}>{appointment.status}</span></h3>
                  </>
              )}
          </ModalBody>
          <CancelButton onClick={() => { handleOnClickCancel(appointment.id) }}>Cancelar turno</CancelButton>
      </ModalContent>
  </ModalOverlay>
);
};

export default AppointmentModal;
