const user = require('../utils/user')

function authentication(username, password) {
    if(!username || !password) throw new Error('Usuario y/o contraseña requerida')

    if(username !== user.username || password !== user.password) throw new Error('Usuario o contraseña incorrecta')

    return {
        message: 'Acceso concedido',
        access: true,
        userdate: {name: user.name},
    };
}

module.exports = { authentication }