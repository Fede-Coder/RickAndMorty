const URL = 'https://rickandmortyapi.com/api/character/'
const axios = require('axios')

function getCharDetail(req, res) {
    const { detailId } = req.params;

    axios(URL + detailId).then(
        (response) => {
            const {id, name, species, image, gender, status, origin} = response.data
            const character = {id, name, species, image, gender, status, origin}
            res.status(200).json(character)
        },
        (error) => {
            res.status(500).send(error.message)
        }
    ) 
}

module.exports = { getCharDetail }