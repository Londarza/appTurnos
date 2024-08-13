import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  padding: 20px;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

export const FormGroup = styled.div`
  margin-bottom: 15px;
`;

export const Label = styled.label`
  font-size: 1.2rem;
  color: #4b3a51; /* Color principal */
  margin-bottom: 5px;
  display: block;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  color: #333;

  &:focus {
    border-color: #4b3a51; /* Color principal */
    outline: none;
  }
`;

export const Button = styled.button`
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    background-color: #6a5acd;
    color: white;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #483d8b; 
    }

    &:disabled {
        background-color: #d3d3d3; 
        cursor: not-allowed;
        color: #7a7a7a; 
    }
`;
