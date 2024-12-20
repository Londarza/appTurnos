import { useEffect } from "react";
import { MisTurnosContainer, CardWrapper } from "./misturnos";
import TurnoCard from "../../components/turnoCards/TurnoCard";
import AppointmentModal from "../../components/appointmentModal/AppointmentModal.jsx";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useGetUserByIdQuery } from "../../redux/features/users/usersApi.js";

const MisTurnos = () => {
  const idUserLog = useSelector((state) => state.userSlice.user.id);
  const { data, error, isLoading, refetch } = useGetUserByIdQuery(idUserLog);
  const [appointmentId, setAppointmentId] = useState(0);
  const [appointmentDetail, setAppointmentDetail] = useState(false);

  useEffect(() => {
    refetch(); 
  }, [idUserLog, refetch]);

  const handleOnClick = (id) => {
    setAppointmentId(id);
    setAppointmentDetail(true);
  };

  const handleOnClose = () => {
    setAppointmentDetail(false);
    refetch(); 
  };

  // Ordena los turnos por fecha descendente
  const sortedAppointments = data?.appointment?.slice().sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });

  if (isLoading) return <p>Cargando...</p>;
  if (error) return <p>Error al cargar los datos</p>;

  return (
    <>
      <MisTurnosContainer>
        <h1>Mis Turnos</h1>
        <CardWrapper>
          {idUserLog ? (
            sortedAppointments?.length > 0 ? (
              sortedAppointments.map((appointment) => (
                <TurnoCard key={appointment.id} appointment={appointment} handleOnClick={handleOnClick} />
              ))
            ) : (
              <p>No tienes turnos agendados.</p>
            )
          ) : (
            <p>No hay nadie en sesión.</p>
          )}
        </CardWrapper>
      </MisTurnosContainer>
      {appointmentDetail && (
        <AppointmentModal handleOnClose={handleOnClose} id={appointmentId} />
      )}
    </>
  );
};

export default MisTurnos;
