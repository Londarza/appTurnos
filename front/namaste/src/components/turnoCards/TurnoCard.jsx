import { CardContainer, CardTitle, CardDetails , Button} from "./Turno.js";


const TurnoCard = ({appointment, handleOnClick}) => {
    return (
    <>
        <CardContainer className={appointment.status === 'cancelled'? 'cancelled':''}>
            <CardTitle>{appointment.user.name} </CardTitle>
            <CardDetails>{appointment.user.email}</CardDetails>
            <CardDetails></CardDetails>
            <CardDetails>Fecha: {appointment.date}</CardDetails>
            <CardDetails>Hora: {appointment.time}:00 Hs</CardDetails>
            <CardDetails >Status: <span style={{ color: appointment.status === 'cancelled' ? '#E57373' : '#81C784' }}>{appointment.status}</span></CardDetails>
            <Button onClick={() => handleOnClick(appointment.id)}>Detalles</Button>
        </CardContainer>
        
        
    </>);
};

export default TurnoCard;