import styled from 'styled-components'
import {Link} from 'react-router-dom'
export const Header = styled.header`
  position: fixed; 
  top: 0; 
  left: 0; 
  width: 100%; 
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #9370DB; 
  color: #FFFFFF; 
  z-index: 1000; 
  display:flex;
`;

export const Logo = styled.div`
  img {
    transform: scale(2); /* Aumenta el tamaño del logo */
    height: 10vh
    
    }
  
`;

export const Nav = styled.nav`
  display: flex;
  gap: 1rem;
`;

export const NavLink = styled(Link)`
  color: #FFFFFF; /* Texto blanco */
  text-decoration: none;
  padding: 0.5rem 1rem;
  &:hover {
    color: #FFD700; /* Color de Resaltado - Dorado */
    background-color: rgba(255, 255, 255, 0.1); /* Añade un efecto de fondo */
    border-radius: 5px; /* Bordes redondeados para el efecto de fondo */
  }
`;
