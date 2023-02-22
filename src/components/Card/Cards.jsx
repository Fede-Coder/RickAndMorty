import React from 'react';
import { connect } from 'react-redux';
import { addCharacter, clearCharacter, filterGenderCharacters, orderCharacters } from '../../redux/actions/CharacterAction';
import Card from './Card';
import { CardsDivMain, CardsDivBar, CardsDivAddChar, CardsDivFilter, CardsDivSearch, CardsInput, CardsButton, CardsSelect } from './StyleCards';

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
      props.characters.some(char => char.id === Number(id))
      ?
      alert('ya existe')
      :
      props.addCharacter(id)
   }

   const handleOrder = (event) => {
      props.orderCharacters(event.target.value)
   }

   const handleFilter = (event) => {
      props.filterGenderCharacters(event.target.value)
   }

   return (
      <CardsDivMain>
         <CardsDivBar>
            <CardsDivAddChar>
               <CardsInput placeholder={'Id'} name={'add'} onChange={handleOnChange}/>
               <CardsButton onClick={() => handleOnClickAddChar(input.add)} ><i className="fa-solid fa-user-plus"></i></CardsButton>
               <CardsButton><i className="fa-solid fa-shuffle"></i></CardsButton>
            </CardsDivAddChar>
            <CardsDivFilter>
               <CardsSelect onChange={handleOrder}>
                  <option value={'order'} selected disabled>Ordenar por...</option>
                  <option value={'Ascendente'}>Ascendente</option>
                  <option value={'Descendente'}>Descendente</option>
               </CardsSelect>               
               <CardsSelect onChange={handleFilter}>
                  <option value={'filter'} selected disabled>Filtrar por...</option>
                  <option value={'Male'}>Masculino</option>
                  <option value={'Female'}>Femenino</option>
                  <option value={'Genderless'}>Sin género</option>
                  <option value={'Unknown'}>Desconocido</option>
               </CardsSelect>
               <CardsButton><i className="fa-solid fa-filter"></i></CardsButton>
               <CardsButton><i className="fa-solid fa-rotate"></i></CardsButton>
            </CardsDivFilter>
            <CardsDivSearch>
               <CardsInput placeholder={'Buscar...'} name={'search'} onChange={handleOnChange}/>
               <CardsButton><i className="fa-solid fa-magnifying-glass"></i></CardsButton>
            </CardsDivSearch>
         </CardsDivBar>
         {
            props.characters && props.characters.map((character, index) => 
               <Card key={index} id={character.id} name={character.name} species={character.species} gender={character.gender} image={character.image}/>
            )
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
      orderCharacters: (id) => dispatch(dispatch(orderCharacters(id))),
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cards)