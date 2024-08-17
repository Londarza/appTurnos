
import { Nav, NavLink, Header, Logo } from "./NavBar";


const NavBar = () => {
    return (<>
    <Header>
        <Logo>
          <a href="/"><img src="/namasteLogo.png" alt="Logo" /></a>
        </Logo>
        <Nav>
          <NavLink to="/">Inicio</NavLink>
          <NavLink to="/servicios">Servicios</NavLink>
          <NavLink to="/register">Registro</NavLink>
          <NavLink to="/loguin">Loguin</NavLink>
        </Nav>
      </Header>
      </>
      
    );
  };
  
  export default NavBar;