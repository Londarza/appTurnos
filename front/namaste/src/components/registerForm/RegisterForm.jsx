
import { Form, FormGroup, Label, Input, Button } from './registerform';
import { useState, useEffect } from 'react';
import registerFormValidations from '../../Helpers/registerFormValidations';
import axios from 'axios'

const RegisterForm = () => {
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        nDni: '',
        birthdate: '',
        username: '',
        password: '',
        repeatPassword: ''
    })
    const [userErrors, setUserErrors] = useState({})
    const [inputBlur, setInputBlur] = useState({})
    const [isSubmitDisabled, setIsSubmitDisabled] = useState(true)

    useEffect(() => {
        
        setIsSubmitDisabled(Object.keys(userErrors).length > 0);
    }, [userErrors]);

    const handleSubmit = async (event) => {
        event.preventDefault()
        if (Object.keys(userErrors).length) {
            return alert('Hay errores en el formulario')
        }

        try {
            const user = await axios.post('http://localhost:3000/users/register', userData)
            if (user.status === 201) {
                alert ('Usuario creado exitosamente')
                setUserData({
                    name: '',
                    email: '',
                    nDni: '',
                    birthdate: '',
                    username: '',
                    password: '',
                    repeatPassword: ''
                })
                setUserErrors({});
            }
        } catch (error) {
            alert ('Ocurrio un error: '+ error.message
                )
            console.log(error);
            
        }
        
        

    }
    const handleChange = (event) => {
        const { name, value } = event.target
        setUserData({
            ...userData,
            [name]: value
        })
        setUserErrors(registerFormValidations({ ...userData, [name]: value }))


    }
    const handleInputBlur = (event) => {
        const { name } = event.target
        setInputBlur({
            ...inputBlur,
            [name]: true
        })
    }

    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Label>Nombre</Label>
                <Input
                    type="text"
                    name="name"
                    value={userData.name}
                    onChange={handleChange}
                    placeholder="p. ej., Juan Juanes"
                    onBlur={handleInputBlur}
                />
                {inputBlur.name && userErrors.name && <p style={{ color: 'red' }}>*{userErrors.name}</p>}

            </FormGroup>
            <FormGroup>
                <Label>Email</Label>
                <Input
                    type="email"
                    name="email"
                    value={userData.email}
                    onChange={handleChange}
                    placeholder="p. ej., jjuanes@mail.com"
                    onBlur={handleInputBlur}
                />
                {inputBlur.email && userErrors.email && <p style={{ color: 'red' }}>*{userErrors.email}</p>}
            </FormGroup>
            <FormGroup>
                <Label>Número de Documento</Label>
                <Input
                    type="text"
                    name="nDni"
                    value={userData.nDni}
                    onChange={handleChange}
                    placeholder="p. ej., 12121313"
                    onBlur={handleInputBlur}
                />
                {inputBlur.nDni && userErrors.nDni && <p style={{ color: 'red' }}>*{userErrors.nDni}</p>}
            </FormGroup>
            <FormGroup>
                <Label>Fecha de Nacimiento</Label>
                <Input
                    type="date"
                    name="birthdate"
                    value={userData.birthdate}
                    onChange={handleChange}
                    onBlur={handleInputBlur}

                />
                {inputBlur.birthdate && userErrors.birthdate && <p style={{ color: 'red' }}>*{userErrors.birthdate}</p>}
            </FormGroup>
            <FormGroup>
                <Label>Username</Label>
                <Input
                    type="text"
                    name="username"
                    value={userData.username}
                    onChange={handleChange}
                    placeholder="p. ej., jjuanes"
                    onBlur={handleInputBlur}
                />
                {inputBlur.username && userErrors.username && <p style={{ color: 'red' }}>*{userErrors.username}</p>}
            </FormGroup>
            <FormGroup>
                <Label>Password</Label>
                <Input
                    type="password"
                    name="password"
                    value={userData.password}
                    onChange={handleChange}
                    placeholder="********"
                    onBlur={handleInputBlur}
                />
                {inputBlur.password && userErrors.password && <p style={{ color: 'red' }}>*{userErrors.password}</p>}
            </FormGroup>
            <FormGroup>
                <Label>Repetir Password</Label>
                <Input
                    type="password"
                    name="repeatPassword"
                    value={userData.repeatPassword}
                    onChange={handleChange}
                    placeholder="********"
                    onBlur={handleInputBlur}
                />
                {inputBlur.repeatPassword && userErrors.repeatPassword && <p style={{ color: 'red' }}>*{userErrors.repeatPassword}</p>}
            </FormGroup>
            <Button type="submit" disabled={isSubmitDisabled} >Registrarse</Button>
        </Form>
    );
};

export default RegisterForm;
