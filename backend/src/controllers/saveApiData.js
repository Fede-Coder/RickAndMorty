const axios = require('axios')
async function getApiData() {
    let page = 1;
    let requests = [];
    let characters = []
    while(page <= 5) {
        requests.push(await axios(`https://rickandmortyapi.com/api/character?page=${page}`))
        page++;
    }
    
    return Promise.all(requests).then(response => {
        response.forEach(x => {
            x.data.results.forEach(y => {
                const {id, name, species, status, origin, gender, image} = y;
                const character = {id, name, species, image, gender, status, origin: origin.name}
                characters.push(character)
            })
        })
        return characters
    })
    .catch(error => {return {error: error.message}})
}

module.exports = {getApiData};