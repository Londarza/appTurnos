
import { Nav, NavLink, Header, Logo } from "./NavBar";


const NavBar = () => {
    return (<>
    <Header>
        <Logo>
          <img src="/namasteLogo.png" alt="Logo" />
        </Logo>
        <Nav>
          <NavLink href="#inicio">Inicio</NavLink>
          <NavLink href="#servicios">Servicios</NavLink>
          <NavLink href="#registro">Registro</NavLink>
          <NavLink href="#login">Login</NavLink>
        </Nav>
      </Header>
      </>
      
    );
  };
  
  export default NavBar;