
import services from '../../Helpers/servicesData';
import { 
    ListContainer, 
    ServiceCard, 
    ServiceImage, 
    ServiceInfo, 
    ServiceName, 
    ServiceDescription, 
    ServicePrice 
} from './ListServicesStyles';

const ListServices = () => {
  return (
    <ListContainer>
      {services.map(service => (
        <ServiceCard key={service.id}>
          <ServiceImage src={service.image} alt={service.name} />
          <ServiceInfo>
            <ServiceName>{service.name}</ServiceName>
            <ServiceDescription>{service.description}</ServiceDescription>
            <ServicePrice>{service.price}</ServicePrice>
            <p>Duración: {service.duration}</p>
          </ServiceInfo>
        </ServiceCard>
      ))}
    </ListContainer>
  );
};

export default ListServices;
