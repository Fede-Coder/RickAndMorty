const URL = 'https://rickandmortyapi.com/api/character/'
const axios = require('axios')

function getCharById(req, res) {
    const { id } = req.params;

    axios(URL + id).then(
        (response) => {
            const {id, name, species, image, gender} = response.data
            const character = {id, name, species, image, gender}
            res.status(200).json(character)
        },
        (error) => {
            res.status(500).send(error.message)
        }
    ) 
}

module.exports = { getCharById }