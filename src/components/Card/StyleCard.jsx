import { Link } from "react-router-dom";
import styled from "styled-components";

const DivCard = styled.div`
   display: inline-block;
   margin: 10px;
   background-color: #dfdfdf;
   padding: 0 10px;
   border-radius: 10px;
   border-bottom: 5px solid #a8a8a8;

   div#button {
      text-align: right;
   }
`

const LinkDetail = styled(Link)`
   float: left;
   padding: 6px 15px;
   margin: 5px 0 10px 0;
   background-color: #2780f5;
   border-bottom: 5px solid #206dd1;
   border-radius: 10px;
   color: white;
   transition: 0.2s all ease-out;

   &:hover {      
      background-color: #4797ff;
      border-bottom: 5px solid #3e82db;
   }
`

const ButtonCard = styled.button`
   background-color: #e70000;
   padding: 6px 10px;
   margin: 5px 0 10px 0;
   cursor: pointer;
   outline: none;
   border: none;
   box-shadow: 0px 5px #d20000;
   transition: 0.05s linear;
   border-radius: 10px;

   :active {
      box-shadow: 0 1px #d20000;
      transform: translateY(4px);
   }

   i {
      color: white;
      font-size: 20px;
   }
`

const DivAvatar = styled.div`
   position: relative;
   h2 {
      position: absolute;
      bottom: 0;
      color: white;
      background-color: #000000c4;
      padding: 0 5px;
   }
   img {
      box-shadow: 0px 0px 5px #7d7d7d;     
   }
`
const COLOR_GENDER = {
   MALE: {MAIN:'#64bfe3', BORDER:'#4e94af', SEPARATOR: '#519cb9'},
   FEMALE: {MAIN:'#b73377', BORDER:'#862256', SEPARATOR: '#9b2160'}
}

const COLOR_SPECIES = {
   HUMAN: {MAIN:'#0096f0', BORDER:'#007dcc', SEPARATOR: '#007dcc'},
   ALIEN: {MAIN: '#03af1a', BORDER:'#058115', SEPARATOR: '#1b8d2a'}
}

const DivInfo = styled.div`
   float: ${props => props.left ? "left" : "right"};
   h2 {
      padding: 5px 10px;
      background: ${props => props.left ? (props.species === "Human" ? COLOR_SPECIES.HUMAN.MAIN : COLOR_SPECIES.ALIEN.MAIN) : (props.gender === "Male" ? COLOR_GENDER.MALE.MAIN : COLOR_GENDER.FEMALE.MAIN)};
      color: white;
      border-radius: 5px;
      border-bottom: 3px solid ${props => props.left ? (props.species === "Human" ? COLOR_SPECIES.HUMAN.BORDER : COLOR_SPECIES.ALIEN.BORDER) : (props.gender === "Male" ? COLOR_GENDER.MALE.BORDER : COLOR_GENDER.FEMALE.BORDER)};
   }
   span {
      position: relative;
      &:after {
         content: "";
         background-color: ${props => props.left ? (props.species === "Human" ? COLOR_SPECIES.HUMAN.SEPARATOR : COLOR_SPECIES.ALIEN.SEPARATOR) : (props.gender === "Male" ? COLOR_GENDER.MALE.SEPARATOR : COLOR_GENDER.FEMALE.SEPARATOR)};
         width: 2px;
         height: 70%;
         position: absolute;
         top: 15%;
         right: -5px;
      }
   }
`
const person = function(props) {return props.species === 'Human' ? <i className="fa-solid fa-person"></i> : <i className="fa-solid fa-spaghetti-monster-flying"></i>}

const gender = function(props)  {return props.gender === 'Male' ? <i className="fa-solid fa-mars"></i> : <i className="fa-solid fa-venus"></i>}

export {
    DivCard,
    LinkDetail,
    ButtonCard,
    DivAvatar,
    DivInfo,
    person,
    gender
}