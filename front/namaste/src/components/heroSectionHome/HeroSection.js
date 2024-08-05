// components/heroSection/HeroSection.js
import styled from 'styled-components';

export const HeroContainer = styled.section`
  width: 100vw;
  height: 70vh; /* Ajusta la altura según sea necesario */
  background: url('/heroPhoto.jpg') no-repeat center center; /* Aplica la imagen como fondo */
  background-size: cover; /* Asegura que la imagen cubra todo el contenedor */
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const HeroContent = styled.div`
  color: #FFFFFF; /* Texto blanco */
  max-width: 80%;
  padding: 1rem; /* Añade algo de espacio alrededor del contenido */
  background: rgba(0, 0, 0, 0.5); /* Fondo semi-transparente para mejorar la legibilidad del texto */
  border-radius: 10px; /* Bordes redondeados para un estilo más suave */
`;

export const HeroButton = styled.a`
  display: inline-block;
  margin-top: 1rem;
  padding: 0.5rem 2rem;
  background-color: #FFD700; /* Color de Resaltado - Dorado */
  color: #FFFFFF; /* Texto blanco */
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  &:hover {
    background-color: #FFC107; /* Un tono dorado más oscuro para el hover */
  }
`;
