const { Router } = require('express')
const {authentication} = require('../controllers/authentication')

const authRouter = Router();

authRouter.post('/login', (req, res) => {
    const {username, password} = req.body
    try {
        const result = authentication(username, password)
        res.status(200).json(result)
    } catch (error) {
        res.status(403).json({error: error.message})
    }
})

module.exports = authRouter;