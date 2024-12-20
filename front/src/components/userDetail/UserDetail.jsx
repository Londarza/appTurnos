// /views/userDetail/UserDetail.jsx
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { 
    UserDetailContainer, 
    UserInfo, 
    UserProfile, 
    ProfilePicture, 
    AppointmentsList, 
    AppointmentItem, 
    ChangePhotoButton 
} from './UserDetailStyles';

const UserDetail = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/users/${id}`);
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    fetchUserDetails();
  }, [id]);

  if (!user) {
    return <p>Cargando detalles del usuario...</p>;
  }

  // Filtrar turnos según su estado
  const activeAppointments = user.appointment.filter(appointment => appointment.status === 'active');
  const cancelledAppointments = user.appointment.filter(appointment => appointment.status === 'cancelled');

  return (
    <UserDetailContainer>
      <UserProfile>
        <ProfilePicture src={'/defaultAvatar.jpg'} alt="Foto de perfil" />
        <ChangePhotoButton>Cambiar Foto</ChangePhotoButton>
      </UserProfile>

      <UserInfo>
        <h2>{user.name}</h2>
        <p>Email: {user.email}</p>
        <p>Fecha de Nacimiento: {user.birthdate}</p>
        <p>DNI: {user.nDni}</p>
        <p>Nombre de Usuario: {user.credential.username}</p>
      </UserInfo>
      
      <AppointmentsList>
        <h3>Turnos Vigentes</h3>
        {activeAppointments.length > 0 ? (
          activeAppointments.map((appointment) => (
            <AppointmentItem key={appointment.id} status={appointment.status}>
              <p>Fecha: {new Date(appointment.date).toLocaleDateString()}</p>
              <p>Hora: {appointment.time}:00 Hs</p>
              <p>Estado: {appointment.status}</p>
            </AppointmentItem>
          ))
        ) : (
          <p>No hay turnos vigentes.</p>
        )}
      </AppointmentsList>
      
      <AppointmentsList>
        <h3>Turnos Cancelados</h3>
        {cancelledAppointments.length > 0 ? (
          cancelledAppointments.map((appointment) => (
            <AppointmentItem key={appointment.id} status={appointment.status}>
              <p>Fecha: {new Date(appointment.date).toLocaleDateString()}</p>
              <p>Hora: {appointment.time}:00 Hs</p>
              <p>Estado: {appointment.status}</p>
            </AppointmentItem>
          ))
        ) : (
          <p>No hay turnos cancelados.</p>
        )}
      </AppointmentsList>
    </UserDetailContainer>
  );
};

export default UserDetail;
