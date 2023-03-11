const { Router } = require('express');
const { getCharByUser } = require('../controllers/getCharByUser');
const { getApiData } = require('../controllers/saveApiData')
const { User } = require('../db/DB_connection')
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
    const { username } = req.body
    try {
        const result = await getCharByUser(username);
        return res.json(result)
    } catch (error) {
        return res.json({error: error.message})
    }
})

module.exports = rmRouter;