import { Nav, NavLink, Header, Logo , NavButton } from "./NavBar";
import { useSelector, useDispatch } from "react-redux";
import { logOut } from "../../redux/features/users/usersSlice";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const idUserLog = useSelector((state) => state.userSlice.user.id);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleLogOutClick = ()=>{
    dispatch(logOut());
    navigate("/");
  }


    return (<>
    <Header>
        <Logo>
          <a href="/"><img src="/namasteLogo.png" alt="Logo" /></a>
        </Logo>
        <Nav>
          <NavLink to="/">Inicio</NavLink>
          <NavLink to="/services">Servicios</NavLink>
          {!idUserLog && (
            <>
              <NavLink to="/register">Registro</NavLink>
              <NavLink to="/loguin">Loguin</NavLink>
            </>
          )}
          {idUserLog && (
            <>
              <NavLink to="/appointments">Mis Turnos</NavLink>
              <NavLink to={`/users/${idUserLog}`}>Mi Perfil</NavLink>

              <NavButton onClick={handleLogOutClick} >Salir</NavButton>
            </>
          )}

        </Nav>
      </Header>
      </>
      
    );
  };
  
  export default NavBar;