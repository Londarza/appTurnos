import styled from 'styled-components';

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #FFFFFF;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
    width: 200px;
`;

export const Avatar = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin-bottom: 15px;
`;

export const UserInfo = styled.div`
    text-align: center;
    margin-bottom: 15px;

    h3 {
        margin: 0;
        color: #333333;
    }

    p {
        margin: 5px 0 0;
        color: #777777;
    }
`;

export const UserButton = styled.button`
    padding: 10px 20px;
    background-color: #4CAF50;
    color: #FFFFFF;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    text-decoration: none;
    font-weight: bold;

    &:hover {
        background-color: #45A049;
    }
`;
