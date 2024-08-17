import styled from 'styled-components';
import {Link} from 'react-router-dom'

export const Form = styled.form`
    background-color: #f8f9fa;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 300px;
`;

export const FormGroup = styled.div`
    margin-bottom: 15px;
`;

export const Label = styled.label`
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
    color: #6a5acd;
`;

export const Input = styled.input`
    width: 100%;
    padding: 8px;
    border: 1px solid #ced4da;
    border-radius: 4px;
    font-size: 16px;
    &:focus {
        outline: none;
        border-color: #6a5acd;
        box-shadow: 0 0 0 3px rgba(106, 90, 205, 0.2);
    }
`;

export const Button = styled.button`
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 4px;
    background-color: #6a5acd;
    color: white;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #483d8b;
    }

    &:disabled {
        background-color: #d3d3d3;
        cursor: not-allowed;
    }
`;

export const StyledLink = styled(Link)`
    display: block;
    margin-top: 10px;
    text-align: center;
    color: #6a5acd;
    text-decoration: none;
    font-size: 14px;
    &:hover {
        text-decoration: underline;
    }
`;
