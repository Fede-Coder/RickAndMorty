import React from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import './App.css'
import Nav from './components/Nav/Nav'
import Cards from './components/Card/Cards'
import Detail from './components/Detail/Detail';
import About from './components/About/About'
import Favorites from './components/Favorites/Favorites';
import NotFound from './components/NotFound/NotFound';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import Login from './components/Login/Login';
import { AnimatePresence } from 'framer-motion';

function App () {

  const [characters, setCharacters] = React.useState([]);
  const [inputChar, setInputChar] = React.useState('');

  const navigate = useNavigate();
  const location = useLocation();
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

  const notify = (message, error = false) => {
    if(error) {
        toast.error(message, {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 3000
        })
    } else {
        toast.success(message, {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 3000
        })
    }
}

  function login(userData) {
    if(userData.password === password && userData.username === username) {
      setAccess(true);
      localStorage.setItem('access', JSON.stringify(true))
      navigate('/home');      
      notify('Has iniciado correctamente!')
    } else {
      notify('Error! Datos incorrectos', true)
    }
  }

  function logout() {
    setAccess(false);
    navigate('/')
  }

  React.useEffect(() => {
    !JSON.parse(localStorage.getItem('access')) && navigate('/')
  }, [access, navigate]);

  return (
    <div className='App'>
      <Nav handleAddChar={handleAddChar} handleChange={handleChange} logout={logout} />      
      <ToastContainer theme="dark" />
      <AnimatePresence>
        <Routes location={location} key={location.pathname} >
          <Route path='*' element={<NotFound />} />
          <Route path='/' element={<Login login={login} />} />
          <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
          <Route path='/detail/:detailId' element={<Detail />} />
          <Route path='/about' element={<About />} />
          <Route path='/favorites' element={<Favorites />} />
        </Routes>
      </AnimatePresence>
      
      
    </div>
  )
}

export default App