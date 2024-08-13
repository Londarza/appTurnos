import styled from 'styled-components';

export const FooterContainer = styled.footer`
  width: 100vw;
  background-color: #9370DB;
  color: #333; /* Texto gris oscuro */
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  width: 100%;
`;

export const FooterSection = styled.div`
  flex: 1;
  padding: 0 1rem;

  h2 {
    margin-bottom: 0.5rem;
    color: #4A4A4A; /* Color del texto */
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      margin: 0.5rem 0;
    }

    a {
      color: #000000; /* Texto blanco */
      text-decoration: none;
      padding: 0.5rem 1rem;
      &:hover {
        color: #FFD700; /* Color de Resaltado - Dorado */
        background-color: rgba(255, 255, 255, 0.1); /* Añade un efecto de fondo */
        border-radius: 5px; /* Bordes redondeados para el efecto de fondo */
      }
    }
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

export const IconWrapper = styled.a`
  color: #4A4A4A; /* Color del icono */
  font-size: 1.5rem;

  &:hover {
    color: #FFD700; /* Cambia el color al hacer hover */
  }
`;
