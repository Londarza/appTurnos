
import { FooterContainer,FooterContent,FooterSection, SocialIcons, IconWrapper} from "./Footer.js";
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
const Footer = () => {
  return (
    <>
    <FooterContainer>
  <FooterContent>
    <FooterSection>
      <h2>Contacto`:</h2>
      <p>Dirección: Calle Falsa 123</p>
      <p>Teléfono: +123 456 7890</p>
      <p>Email: contacto@spaNamaste.com</p>
    </FooterSection>
    <FooterSection>
      <h2>Enlaces Útiles</h2>
      <ul>
        <li><a href="#inicio">Inicio</a></li>
        <li><a href="#servicios">Servicios</a></li>
        <li><a href="#registro">Registro</a></li>
        <li><a href="#login">Login</a></li>
      </ul>
    </FooterSection>
    <FooterSection>
      <h2>Síguenos</h2>
      <SocialIcons>
      <IconWrapper href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </IconWrapper>
            <IconWrapper href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </IconWrapper>
            <IconWrapper href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </IconWrapper>
      </SocialIcons>
    </FooterSection>
  </FooterContent>
</FooterContainer>
    </>
  )
  

};

export default Footer;