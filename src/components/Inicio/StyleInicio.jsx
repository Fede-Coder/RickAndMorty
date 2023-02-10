import styled from "styled-components";
import bg from '../../assets/img/rick-n-morty-wallpaper.jpg'


const DivInicio = styled.div`
    margin: 0 auto;
    width: 80%;
    background-color: #939393b3;
    backdrop-filter: blur(2px);
`

const H1Titulo = styled.h1`
    font-size: 60px;
    color: black;
    margin: 0;
`

const DivBG = styled.div`
    background: url(${bg}) 0% 0% no-repeat;
    height: 550px;
    background-size: cover;
    background-position: center;
    box-shadow: inset 0px 5px 40px 15px #282a2d;
`

export {
    DivInicio,
    H1Titulo,
    DivBG,
}