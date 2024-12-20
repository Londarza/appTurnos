import { Form, FormGroup, Label, Input, Button, StyledLink } from './loguinForm'
import { useState } from 'react';
import { setUserData } from '../../redux/features/users/usersSlice';
import { useLoguinUserMutation } from '../../redux/features/users/usersApi';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const LoginForm = () => {
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const [loginError, setLoginError] = useState('');
    const [loguinUser] = useLoguinUserMutation()
    const dispatch = useDispatch()
    const navigate = useNavigate()
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

            const userData = await loguinUser(credentials).unwrap()
            dispatch(setUserData(userData))
            console.log(userData);
            
            navigate('/')
            
            
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
