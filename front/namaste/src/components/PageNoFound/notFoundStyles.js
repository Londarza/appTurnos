import styled from 'styled-components';

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
  text-align: center;
  color: #4A4A4A; /* Un tono suave de gris */
  background-color: #F0F0F0; /* Fondo neutro */
`;

export const NotFoundMessage = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #6A1B9A; /* Un tono suave de púrpura */
`;

export const NotFoundCountdown = styled.p`
  font-size: 1.2rem;
  color: #FF8A80; /* Un tono suave de rojo */
`;
