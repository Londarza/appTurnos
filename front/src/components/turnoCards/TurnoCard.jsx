import { CardContainer, CardDetails, Button } from "./Turno.js";

const TurnoCard = ({ appointment, handleOnClick }) => {
    // Formatear la fecha de la cita a "día/mes/año"
    const formattedDate = new Date(appointment.date).toLocaleDateString('es-ES', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });

    return (
        <>
            <CardContainer className={appointment.status === 'cancelled' ? 'cancelled' : ''}>
                <CardDetails>Fecha: {formattedDate}</CardDetails>
                <CardDetails>Hora: {appointment.time}:00 Hs</CardDetails>
                <CardDetails>Status: <span style={{ color: appointment.status === 'cancelled' ? '#E57373' : '#81C784' }}>{appointment.status}</span></CardDetails>
                <Button onClick={() => handleOnClick(appointment.id)}>Detalles</Button>
            </CardContainer>
        </>
    );
};

export default TurnoCard;
