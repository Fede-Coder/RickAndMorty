import React from 'react';
import { connect } from 'react-redux';
import { addCharacter, clearCharacter, filterGenderCharacters, orderCharacters, resetFilterCharacters, searchCharacters } from '../../redux/actions/CharacterAction';
import Card from './Card';
import { CardsDivMain, CardsDivBar, CardsDivAddChar, CardsDivFilter, CardsDivSearch, CardsInput, CardsButton, CardsSelect, CardsDivButton, CardsEmpty, CardsSvg } from './StyleCards';
import ohNo from '../../assets/img/ohNo.json'

export function Cards(props) {
   const [input, setInput] = React.useState({
      add: '',
      search: '',
   });

   const handleOnChange = (event) => {
      setInput({
         ...input,
         [event.target.name]: event.target.value,
      })
   }

   const handleOnClickAddChar = (id) => {
      if(id >= 1 && id <= 826) {
         props.characters.some(char => char.id === Number(id))
         ?
         alert('ya existe')
         :
         props.addCharacter(id)
      }
      
   }

   const handleOrder = (event) => {
      props.orderCharacters(event.target.value)
   }

   const handleFilter = (event) => {
      props.filterGenderCharacters(event.target.value)
   }

   const handleClearCharacter = () => {
      props.clearCharacter()
   }

   const handleResetFilter = () => {
      props.resetFilterCharacters();
   }

   const handleSearchCharacter = (words) => {
      props.searchCharacters(words)
   }

   const generateUniqueRandom = () => {
      let maxChar = 826;
      //Creo una variable random, que genere un numero cualquiera entre 1 y 826
      let randomId = Math.floor(Math.random() * maxChar)+1
      //Verifico si dentro array de characters existe igual al randomId
      if(!props.characters.some(char => char.id === randomId)) {
         //props.addCharacter(randomId);
         return randomId;
      } else {
         if(props.characters < maxChar) {
            return generateUniqueRandom()
         } else {
            alert('No se puede agregar mas personajes.')
            return false;
         }
      }
   }

   return (
      <CardsDivMain>
         <CardsDivBar>
            <CardsDivAddChar>
               <CardsInput placeholder={'Id'} name={'add'} onChange={handleOnChange}/>
               <CardsDivButton>
                  <CardsButton onClick={() => handleOnClickAddChar(input.add)} ><i className="fa-solid fa-user-plus"></i></CardsButton>
                  <CardsButton onClick={() => handleOnClickAddChar(generateUniqueRandom())}><i className="fa-solid fa-shuffle"></i></CardsButton>
                  <CardsButton bgRed onClick={() => handleClearCharacter()}><i className="fa-regular fa-trash-can"></i></CardsButton>
               </CardsDivButton>
            </CardsDivAddChar>
            <CardsDivFilter>
               <CardsSelect onChange={handleOrder}>
                  <option value={'order'} disabled>Ordenar por...</option>
                  <option value={'Ascendente'}>Ascendente</option>
                  <option value={'Descendente'}>Descendente</option>
               </CardsSelect>               
               <CardsSelect onChange={handleFilter}>
                  <option value={'filter'} disabled>Filtrar por...</option>
                  <option value={'Male'}>Masculino</option>
                  <option value={'Female'}>Femenino</option>
                  <option value={'Genderless'}>Sin género</option>
                  <option value={'Unknown'}>Desconocido</option>
               </CardsSelect>
               {/* <CardsButton><i className="fa-solid fa-filter"></i></CardsButton> */}
               <CardsDivButton>
                  <CardsButton onClick={() => handleResetFilter()}><i className="fa-solid fa-rotate"></i></CardsButton>
               </CardsDivButton>
            </CardsDivFilter>
            <CardsDivSearch>
               <CardsInput placeholder={'Buscar...'} name={'search'} onChange={handleOnChange}/>
               <CardsDivButton>                  
                  <CardsButton onClick={() => handleSearchCharacter(input.search)}><i className="fa-solid fa-magnifying-glass"></i></CardsButton>
               </CardsDivButton>
            </CardsDivSearch>
         </CardsDivBar>
         {
            props.characters.length > 0 ?
            props.characters.map((character, index) => 
               <Card key={index} id={character.id} name={character.name} species={character.species} gender={character.gender} image={character.image}/>
            )
            :
            <CardsEmpty>
               <h1>Oh no! No hay personajes añadidos.</h1>
               <CardsSvg play loop={0} animateData={ohNo}></CardsSvg>
            </CardsEmpty>
         }
      </CardsDivMain>
   );
}

export function mapStateToProps(state) {
   return {
      characters: state.characters.characters,
   }
}

export function mapDispatchToProps(dispatch) {
   return {
      addCharacter: (id) => dispatch(addCharacter(id)),
      clearCharacter: () => dispatch(clearCharacter()),
      filterGenderCharacters: (gender) => dispatch(filterGenderCharacters(gender)),
      orderCharacters: (id) => dispatch(orderCharacters(id)),
      resetFilterCharacters: () => dispatch(resetFilterCharacters()),
      searchCharacters: (words) => dispatch(searchCharacters(words))
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cards)