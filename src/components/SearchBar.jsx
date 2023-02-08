import styled from "styled-components";

const common = `
   font-size: 30px;
   margin: 0 10px;   
   border-radius: 5px;
   padding: 5px 10px;
`

const SearchDiv = styled.div`
`

const SearchInput = styled.input`
   ${common};
   border-bottom: 5px solid #a8a8a8;
   transition: 0.1s all linear;
   outline: none;
   &:focus {
      box-shadow: 0px 0px 5px #ffffffeb;
   };
   
`

const SearchButton = styled.button`
   ${common};
   background-color: #198754;
   cursor: pointer;
   outline: none;
   border: none;
   box-shadow: 0px 5px #0f5b38;
   color: white;
   transition: 0.05s linear;

   :hover {
      background-color: #1eac6a;
   }

   :active {
      box-shadow: 0 1px #0f5b38;
      transform: translateY(4px);
   }
`


export default function SearchBar(props) {
   return (
      <SearchDiv>
         <SearchInput type='search' />
         <SearchButton onClick={() => props.onSearch(document.querySelector('input').value)}><i className="fa-solid fa-plus"></i> Agregar</SearchButton>
      </SearchDiv>
   );
}
