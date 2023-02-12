const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexPassword =  /.*[0-9].*/

export function validation(inputs) {
    let errors = {}

    if(!inputs.username) {
        errors.username = 'Se requiere un nombre de usuario'
    }
    if(!regexEmail.test(inputs.username)) {
        errors.username = 'Debe ser un correo electrónico'
    }
    if(inputs.username.length > 35) {
        errors.username = 'Debe ser menos de 35 caracteres'
    }

    if(!regexPassword.test(inputs.password)){
        errors.password = 'Debe contener al menos un número'
    }
    if(inputs.password.length < 6 || inputs.password.length > 10) {
        errors.password = 'La contraseña debe tener entre 6 y 10 caracteres'
    }
    return errors;

}