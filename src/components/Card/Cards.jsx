import Card from './Card';
import { CardsDivMain, CardsDivBar, CardsDivAddChar, CardsDivFilter, CardsDivSearch, CardsInput, CardsButton, CardsSelect } from './StyleCards';

export default function Cards(props) {
   const { characters } = props;
   return (
      <CardsDivMain>
         <CardsDivBar>
            <CardsDivAddChar>
               <CardsInput placeholder={'Id'} />
               <CardsButton><i className="fa-solid fa-user-plus"></i></CardsButton>
               <CardsButton><i className="fa-solid fa-shuffle"></i></CardsButton>
            </CardsDivAddChar>
            <CardsDivFilter>
               <CardsSelect>
                  <option value={''} selected disabled>Ordenar...</option>
                  <option value={'1'}>Ascendente</option>
                  <option value={'2'}>Descendente</option>
               </CardsSelect>               
               <CardsSelect>
                  <option value={''} selected disabled>Genero</option>
                  <option>Masculino</option>
                  <option>Femenino</option>
               </CardsSelect>
               <CardsButton><i className="fa-solid fa-filter"></i></CardsButton>
               <CardsButton><i className="fa-solid fa-rotate"></i></CardsButton>
            </CardsDivFilter>
            <CardsDivSearch>
               <CardsInput placeholder={'Buscar...'}/>
               <CardsButton><i className="fa-solid fa-magnifying-glass"></i></CardsButton>
            </CardsDivSearch>
         </CardsDivBar>
         {
            characters.map((character, index) => 
               <Card key={index} id={character.id} name={character.name} species={character.species} gender={character.gender} image={character.image} onClose={props.onClose} />
            )
         }
      </CardsDivMain>
   );
}