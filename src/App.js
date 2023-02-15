import React from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css'
import Nav from './components/Nav/Nav'
import Form from './components/Form/Form'
import Cards from './components/Cards'
import Detail from './components/Detail/Detail';
import About from './components/About/About'
import Favorites from './components/Favorites/Favorites';

function App () {

  const [characters, setCharacters] = React.useState([]);
  const [inputChar, setInputChar] = React.useState('');

  const navigate = useNavigate();
  const [access, setAccess] = React.useState(false);
  const username = 'ejemplo@gmail.com';
  const password = '1password';


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
    onSearch(inputChar)
  }

  const handleChange = (e) => {
    setInputChar(e.target.value)
  }

  const onClose = (e) => {
    setCharacters(characters.filter(char => char.id !== Number(e.currentTarget.value)))
  }

  function login(userData) {
    if(userData.password === password && userData.username === username) {
      setAccess(true);
      navigate('/home');
    } else {
      alert('Error login')
    }
  }

  function logout() {
    setAccess(false);
    navigate('/')
  }

  React.useEffect(() => {
    !access && navigate('/')
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [access]);

  return (
    <div className='App'>
      <Nav handleAddChar={handleAddChar} handleChange={handleChange} logout={logout} />
      <Routes>
        <Route path='/' element={<Form login={login} />} />
        <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
        <Route path='/detail/:detailId' element={<Detail />} />
        <Route path='/about' element={<About />} />
        <Route path='/favorites' element={<Favorites />} />
      </Routes>
    </div>
  )
}

export default App