import './App.css'
// import Card from './components/Card'
import Cards from './components/Cards'
import React from 'react'
import Nav from './components/Nav'

function App () {

  const [characters, setCharacters] = React.useState([]);
  const [inputChar, setInputChar] = React.useState('');

  const onSearch = (id) => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => res.json())
      .then((data) => 
        {
          data.name
          ?
          (characters.some(char => char.id === data.id))?alert('ya existe'):setCharacters([...characters, data])
          //(characters.includes(data.id))?alert('ya existe'):setCharacters([...characters, data])
          :
          alert('No hay personajes con ese ID')
        }
      );
  }

  const handleAddChar = () => {
    //setCharacters([...characters, ...chars.filter(char => char.id == inputChar)])
    //setCharacters(characters.concat(chars.filter(char => char.id == inputChar)))
    onSearch(inputChar)
  }

  const handleChange = (e) => {
    setInputChar(e.target.value)
  }

  const onClose = (e) => {
    setCharacters(characters.filter(char => char.id !== Number(e.currentTarget.value)))
  }

  return (
    <div className='App'>      
      <>
        <Nav handleAddChar={handleAddChar} handleChange={handleChange}/>
      </>
      <div id="cards">
        <Cards
          characters={characters}
          onClose={onClose}
        />
      </div>
    </div>
  )
}

export default App
