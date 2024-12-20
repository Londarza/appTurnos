import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { NotFoundContainer, NotFoundMessage, NotFoundCountdown } from './notFoundStyles';

const NotFound = () => {
    const [countdown, setCountdown] = useState(5);
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown((prevCount) => prevCount - 1);
        }, 1000);

        if (countdown === 0) {
            navigate('/');
        }

        return () => clearInterval(timer);
    }, [countdown, navigate]);

    return (
        <NotFoundContainer>
            <NotFoundMessage>¡Ups! Página no encontrada.</NotFoundMessage>
            <NotFoundMessage>Error 404</NotFoundMessage>
            <NotFoundCountdown>Serás redirigido al inicio en {countdown} segundos...</NotFoundCountdown>
        </NotFoundContainer>
    );
};

export default NotFound;
