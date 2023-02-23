import styled from "styled-components";

const common = `
   font-size: 30px;
   margin: 0 10px;   
   border-radius: 5px;
   padding: 5px 10px;
   @media (max-width: 1180px) {
      font-size: 20px;
   }
`

const SearchDiv = styled.div`
   display: flex;
`

const SearchInput = styled.input`
   ${common};
   border-bottom: 5px solid #a8a8a8;
   transition: 0.1s all linear;
   outline: none;
   &:focus {
      box-shadow: 0px 0px 5px #ffffffeb;
   };
   @media (max-width: 500px) {
      width: 50%;
   }
   
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
   @media (max-width: 500px) {
      width: 50%;
   }
`

export {
    SearchDiv,
    SearchInput,
    SearchButton
}