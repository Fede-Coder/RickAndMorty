let http = require('http')
let characters = require('./utils/data')

const PORT = 3001;
const LOCALHOST = 'localhost'

let server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const splitURL = req.url.split('/')
    const rest = splitURL.slice(0, 3).join('/')
    if(rest === '/rickandmorty/character') {
        const id = splitURL[splitURL.length-1]
        if(!isNaN(id)) {
            res.writeHead(200, {'Content-Type': 'application/json'})
            let obj = characters.find(char => char.id === Number(id))
            if(obj) res.end(JSON.stringify(obj))
            else res.end(JSON.stringify({error:"Character not found"}))
        } else {
            res.writeHead(400, {'Content-Type': 'text/plain'})
            res.end('Id incorrecto')
        }
    } else if(req.url === '/rickandmorty/characters') {        
        res.writeHead(200, {'Content-Type': 'application/json'})
        res.end(JSON.stringify(characters))
    } else {
        res.writeHead(404, {'Content-Type': 'text/plain'})
        res.end('Route not found')
    }
}).listen(PORT, LOCALHOST)

module.exports = server;