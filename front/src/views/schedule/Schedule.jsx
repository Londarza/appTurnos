import { useState } from 'react';
import { ScheduleContainer, FormField, Label, Input, Select, Button } from './ScheduleStyles';
import services from '../../Helpers/servicesData';
import { useNewAppointmentMutation } from '../../redux/features/appointments/appointmentsApi';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const Schedule = () => {
  const idUserLog = useSelector((state) => state.userSlice.user.id);
  const [appointment, setAppointment] = useState({
    date:'',
    time:'',
    user: idUserLog
  });
  
  const [service, setService] = useState('');
  const [newAppointment] = useNewAppointmentMutation()
  
  const navigate = useNavigate()
  console.log(appointment);
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const scheduleapp = await newAppointment(appointment)
    if (scheduleapp.error) {
      alert('Error al crear el turno')
    }else{
      alert('Turno agendado con éxito')
      setAppointment({
        date:'',
        time:'',
        user:0
      })
      navigate('/appointments')
    }
   
  };
  console.log(appointment.date , appointment.time);
  const getTomorrowDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

  return (
    <ScheduleContainer>
      <h2>Agendar un nuevo turno</h2>
      <form onSubmit={handleSubmit}>
        <FormField>
          <Label htmlFor="date">Fecha:</Label>
          <Input
            type="date"
            id="date"
            min={getTomorrowDate()}
            value={appointment.date}
            onChange={(e) => setAppointment({...appointment, date : e.target.value})}
            required
          />
        </FormField>
        <FormField>
  <Label htmlFor="time">Hora:</Label>
  <Select
    id="time"
    value={appointment.time}
    onChange={(e) => setAppointment({ ...appointment, time: e.target.value })} // Cambiado `date` por `time`
    required
  >
    <option value="">Seleccione una hora</option>
    {[...Array(8)].map((_, index) => {
      const hour = 9 + index;
      return (
        <option key={hour} value={hour}>
          {`${hour}:00`}
        </option>
      );
    })}
  </Select>
</FormField>
        <FormField>
          <Label htmlFor="service">Servicio:</Label>
          <Select
            id="service"
            value={service}
            onChange={(e) => setService(e.target.value)}
            required
          >
            <option value="">Seleccione un servicio</option>
            {services.map((service) => (
              <option key={service.id} value={service.name}>
                {service.name}
              </option>
            ))}
          </Select>
        </FormField>
        <Button type="submit">Agendar Turno</Button>
      </form>
    </ScheduleContainer>
  );
};

export default Schedule;
