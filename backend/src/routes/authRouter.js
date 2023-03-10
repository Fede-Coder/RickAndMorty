const { Router } = require('express')
const { login, register } = require('../controllers/auth')


const authRouter = Router();

authRouter.post('/login', async (req, res) => {
    const {username, password} = req.body
    try {
        const result = await login(username, password)
        res.status(200).json(result)
    } catch (error) {
        res.status(403).json({error: error.message})
    }
})

authRouter.post('/register', async (req, res) => {
    const {username, password, name} = req.body
    try {
        const result = await register(username, password, name)
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

module.exports = authRouter;