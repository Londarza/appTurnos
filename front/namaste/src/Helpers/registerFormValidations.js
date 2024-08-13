const registerFormValidations = (userData) => {
    const errors = {}

    // Validación para el nombre
    if (!userData.name) {
        errors.name = 'El nombre es un campo obligatorio'
    } else if (userData.name.length < 3) {
        errors.name = 'El nombre debe tener 3 caracteres por lo menos'
    } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(userData.name)) {
        errors.name = 'El nombre no debe contener caracteres especiales'
    }

    // Validación para el email
    if (!userData.email) {
        errors.email = 'El email es un campo obligatorio'
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(userData.email)) {
        errors.email = 'El email no tiene un formato válido'
    }

    // Validación para el número de documento
    if (!userData.nDni) {
        errors.nDni = 'El número de documento es un campo obligatorio'
    } else if (!/^\d{7,8}$/.test(userData.nDni)) {
        errors.nDni = 'El número de documento debe ser numérico y tener entre 7 y 8 caracteres'
    }

    // Validación para la fecha de nacimiento
    if (!userData.birthdate) {
        errors.birthdate = 'La fecha de nacimiento es un campo obligatorio'
    } else {
        const today = new Date()
        const birthdate = new Date(userData.birthdate)
        const age = today.getFullYear() - birthdate.getFullYear()
        const month = today.getMonth() - birthdate.getMonth()

        if (month < 0 || (month === 0 && today.getDate() < birthdate.getDate())) {
            // eslint-disable-next-line no-const-assign
            age--
        }

        if (age < 12) {
            errors.birthdate = 'Debes ser mayor de 12 años'
        }
    }

    // Validación para el username
    if (!userData.username) {
        errors.username = 'El username es un campo obligatorio'
    } else if (userData.username.length < 6) {
        errors.username = 'El username debe tener al menos 6 caracteres'
    } else if (!/^[a-zA-Z0-9]+$/.test(userData.username)) {
        errors.username = 'El username no debe contener caracteres especiales'
    }

    // Validación para la contraseña
    if (!userData.password) {
        errors.password = 'La contraseña es un campo obligatorio'
    } else if (userData.password.length < 8) {
        errors.password = 'La contraseña debe tener al menos 8 caracteres'
    } else if (!/(?=.*[A-Z])(?=.*\d)/.test(userData.password)) {
        errors.password = 'La contraseña debe contener al menos un número y una letra mayúscula'
    }

    // Validación para repetir contraseña
    if (!userData.repeatPassword) {
        errors.repeatPassword = 'Repetir la contraseña es un campo obligatorio'
    } else if (userData.repeatPassword !== userData.password) {
        errors.repeatPassword = 'Las contraseñas no coinciden'
    }

    return errors
}

export default registerFormValidations
