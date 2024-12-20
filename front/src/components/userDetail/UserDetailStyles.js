// /views/userDetail/UserDetailStyles.js
import styled from 'styled-components';

export const UserDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const UserProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

export const ProfilePicture = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 10px;
  border: 2px solid #ddd;
`;

export const ChangePhotoButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

export const UserInfo = styled.div`
  width: 100%;
  max-width: 600px;
  margin-bottom: 30px;
  text-align: left;

  h2 {
    margin-bottom: 10px;
    font-size: 24px;
    color: #333;
  }

  p {
    margin: 5px 0;
    color: #666;
  }
`;

export const AppointmentsList = styled.div`
  width: 100%;
  max-width: 600px;
  margin-bottom: 30px;

  h3 {
    margin-bottom: 10px;
    font-size: 20px;
    color: #333;
    border-bottom: 2px solid #ddd;
    padding-bottom: 5px;
  }

  p {
    color: #666;
  }
`;

export const AppointmentItem = styled.div`
  padding: 10px;
  margin: 10px 0;
  border: 1px solid ${({ status }) => (status === 'cancelled' ? '#f00' : '#0a0')};
  border-radius: 5px;
  background-color: ${({ status }) => (status === 'cancelled' ? '#fee' : '#efe')};

  p {
    margin: 5px 0;
  }
`;
