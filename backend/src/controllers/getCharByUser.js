const { User } = require('../db/DB_connection')
const { Character } = require('../db/DB_connection')

async function getCharByUser(username) {
    if(!username) throw new Error('You need an account to do this.')

    const user = await User.findOne({ where: {username: username}, include: [{model: Character, through: { attributes: [] }}], attributes: {exclude: ['password']} });

    if(!user) throw new Error('Does not exist')

    return {
        message: 'Success',
        date: user.Characters
    }

}

module.exports = { getCharByUser }