import './App.css'
// import Card from './components/Card'
import Cards from './components/Cards'
import React from 'react'
import Nav from './components/Nav'

const chars = [
  {
    id: 1,
    name: "Rick Sanchez",
    species: "Human",
    gender: "Male",
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  },
  {
    id: 2,
    name: "Morty Smith",
    species: "Human",
    gender: "Male",
    image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
  },
  {
    id: 3,
    name: "Summer Smith",
    species: "Human",
    gender: "Female",
    image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
  },
  {
    id: 4,
    name: "Beth Smith",
    species: "Human",
    gender: "Female",
    image: "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
  },
];

function App () {

  const [characters, setCharacters] = React.useState([]);
  const [inputChar, setInputChar] = React.useState('');

  const handleAddChar = () => {
    setCharacters(characters.concat(chars.filter(char => char.id == inputChar)))
  }

  const handleChange = (e) => {
    setInputChar(e.target.value)
  }

  console.log(characters);

  return (
    <div className='App'>      
      <>
        <Nav handleAddChar={handleAddChar} handleChange={handleChange}/>
      </>
      <div id="cards">
        <Cards
          characters={characters}
        />
      </div>
    </div>
  )
}

export default App
