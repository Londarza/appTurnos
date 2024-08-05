import styled from 'styled-components';

export const CardContainer = styled.div`
  background-color: #FFF; /* Fondo blanco */
  border: 1px solid #E0E0E0; /* Borde gris claro */
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  margin: 1rem 0;
  width: 100%;
  max-width: 400px;
  transition: box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
`;

export const CardTitle = styled.h2`
  color: #4A4A4A; /* Color del texto */
  margin-bottom: 0.5rem;
`;

export const CardDetails = styled.p`
  color: #707070; /* Color del texto */
  margin: 0.25rem 0;
`;

export const Button = styled.button`
  
  bottom: 1rem;
  display: block;
  padding: 0.5rem 1rem;
  background-color: #FFD700; /* Color de Resaltado - Dorado */
  color: #FFFFFF; /* Texto blanco */
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  text-align: center;

  &:hover {
    background-color: #FFC107; /* Un tono dorado más oscuro para el hover */
  }
`;
