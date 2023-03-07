import {SearchDiv, SearchInput, SearchButton} from './StyleSearchBar'


export default function SearchBar(props) {//props.onSearch (funcion de handleAddChar), props.handleChange
   return (
      <SearchDiv>
         <SearchInput type='search' onChange={props.handleChange}/>
         <SearchButton onClick={props.onSearch}><i className="fa-solid fa-plus"></i> Agregar</SearchButton>
      </SearchDiv>
   );
}
