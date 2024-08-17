import { Form, FormGroup, Label, Input, Button, StyledLink } from './loguinForm'
import { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const [loginError, setLoginError] = useState('');


    const handleChange = (event) => {
        const { name, value } = event.target;
        setCredentials({
            ...credentials,
            [name]: value,
        });
    };


    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const loguin = await axios.post('http://localhost:3000/users/loguin', credentials);
            if (loguin.status === 200) {
                // Lógica después del inicio de sesión exitoso
                alert('Inicio de sesión exitoso');
                setCredentials({ username: '', password: '' })

            }
        } catch (error) {
            
            setLoginError('Usuario o contraseña incorrectos');
        }
    };

    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Label>Usuario</Label>
                <Input
                    type="text"
                    name="username"
                    value={credentials.username}
                    onChange={handleChange}
                    placeholder="Nombre de usuario"
                />
            </FormGroup>
            <FormGroup>
                <Label>Contraseña</Label>
                <Input
                    type="password"
                    name="password"
                    value={credentials.password}
                    onChange={handleChange}
                    placeholder="********"
                />
            </FormGroup>
            {loginError && <p style={{ color: 'red' }}>{loginError}</p>}
            <Button type="submit">Iniciar Sesión</Button>
            <StyledLink to="/register">¿No estás registrado? Haz clic aquí</StyledLink>
        </Form>
    );
};

export default LoginForm;
