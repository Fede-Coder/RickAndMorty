const { Router } = require('express')
const { getApiData } = require('../controllers/saveApiData')
const { User } = require('../db/DB_connection')
const { User_Char } = require('../db/DB_connection')
const { Character } = require('../db/DB_connection')

const rmRouter = Router();

rmRouter.get('/all', async (req, res) => {
    try {
        const allCharacters = await getApiData()
        await Character.bulkCreate(allCharacters)
        return res.json(allCharacters)
    } catch (error) {
        return res.send(error);
    }
})
rmRouter.get('/alldb', async (req, res) => {
    try {
        const info = await Character.findAll();
        return res.json(info);
    } catch (error) {
        return res.send(error);
    }
})
rmRouter.post('/getCharByUser', async (req, res) => {
    try {
        const result = await User.findAll({ where: {username: 'email@email.com'}, include: Character });
        return res.json(result)
    } catch (error) {
        return res.send(error)
    }
})

module.exports = rmRouter;