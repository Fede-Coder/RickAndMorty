const { User } = require('../db/DB_connection')

// function login(username, password) {
//     if(!username || !password) throw new Error('Usuario y/o contraseña requerida')

//     if(username !== user.username || password !== user.password) throw new Error('Usuario o contraseña incorrecta')

//     return {
//         message: 'Acceso concedido',
//         access: true,
//         userdate: {name: user.name},
//     };
// }

async function login(username, password) {
    if(!username || !password) throw new Error('Usuario y/o contraseña requerida')

    const user = await User.findOne({where: {username: username}})
    if(user === null) throw new Error('Usuario o contraseña incorrecta')
    else if(username !== user.username || password !== user.password) throw new Error('Usuario o contraseña incorrecta')

    return {
        message: 'Acceso concedido',
        access: true,
        userdate: {username: user.username, name: user.name},
    };
}

async function register(username, password, name) {
    if(!username) throw new Error('Username required')
    if(!password) throw new Error('Password required')
    if(!name) throw new Error('Name required')

    if(await User.findOne({where: {username: username}}) != null) throw new Error('Username already registered')

    await User.create({username, password, name})
    return {
        message: 'Successful registration',
        userdate: {username, name}
    }   
}

module.exports = { login, register }