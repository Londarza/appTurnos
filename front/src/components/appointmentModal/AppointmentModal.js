import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background-color: #fff;
  border-radius: 10px;
  width: 90%;
  max-width: 500px;
  padding: 20px;
  position: relative;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: none;
  font-size: 16px;
  color: #7E57C2;
  cursor: pointer;

  &:hover {
    color: #5E35B1;
  }
`;

export const CancelButton = styled.button`
  background-color: #E57373;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  display: block;
  margin: 20px auto 0;
  font-size: 16px;

  &:hover {
    background-color: #EF5350;
  }
`;

export const ModalHeader = styled.div`
  margin-bottom: 20px;
  text-align: center;

  h2 {
    color: #7E57C2;
  }
`;

export const ModalBody = styled.div`
  margin-bottom: 20px;

  h3 {
    color: #424242;
    margin: 10px 0;
  }
`;
