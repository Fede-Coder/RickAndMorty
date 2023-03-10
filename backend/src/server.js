const express = require('express')
const server = express()
const cors = require('cors')
const PORT = 3001;
const router = require('./routes/index')
const favsRouter = require('./routes/favsRouter')
const authRouter = require('./routes/authentication');
const {sequelize} = require('./db/DB_connection');

server.use(express.json());
server.use(cors());
server.use('/rickandmorty', router);
server.use('/favs', favsRouter);
server.use('/auth', authRouter)


server.listen(PORT, () => {
    console.log('Server raised in port ' +  PORT);
    sequelize.sync({ force: false })
})