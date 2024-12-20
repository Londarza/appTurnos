// /views/Services/Services.jsx

import { ServicesContainer, ServicesTitle } from './ServicesStyles';
import ListServices from '../../components/listServices/ListServices';

const Services = () => {
  return (
    <ServicesContainer>
      <ServicesTitle>Nuestros Servicios</ServicesTitle>
      <ListServices />
    </ServicesContainer>
  );
};

export default Services;
