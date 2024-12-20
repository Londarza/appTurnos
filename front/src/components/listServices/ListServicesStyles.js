// /components/listServices/ListServicesStyles.js
import styled from 'styled-components';

export const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

export const ServiceCard = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  overflow: hidden;
  width: 300px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

export const ServiceImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const ServiceInfo = styled.div`
  padding: 15px;
`;

export const ServiceName = styled.h2`
  font-size: 24px;
  color: #333;
  margin-bottom: 10px;
`;

export const ServiceDescription = styled.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 10px;
`;

export const ServicePrice = styled.p`
  font-size: 18px;
  color: #007bff;
  font-weight: bold;
`;
