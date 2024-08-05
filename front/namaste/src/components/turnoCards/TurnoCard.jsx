import { CardContainer, CardTitle, CardDetails , Button} from "./Turno.js";


const TurnoCard = ({appointment}) => {
    return (
    <>
        <CardContainer>
            <CardTitle>Usuario:{appointment.user.name} </CardTitle>
            <CardDetails>Fecha:{appointment.date}</CardDetails>
            <CardDetails>Hora: {appointment.time}</CardDetails>
            <CardDetails>Status: {appointment.status}</CardDetails>
            <Button>Detalles</Button>
        </CardContainer>
        
        
    </>);
};

export default TurnoCard;