import { Player } from "@lottiefiles/react-lottie-player";
import styled from "styled-components";

const CardsDivMain = styled.div`
    min-height: 70vh;
`

const CardsDivBar = styled.div`
    width: 85%;
    margin: 0 auto;
    background-color: white;
    border-radius: 50px;
    display: flex;
    justify-content: space-evenly;
    padding: 10px;
    margin-bottom: 10px;
    border-bottom: 5px solid #b3b3b3;
    @media (max-width: 1290px) {
        width: 95%;
    }
    @media (max-width: 1120px) {
        width: 95%;
        border-radius: 10px;
    }
    @media (max-width: 600px) {
        flex-direction: column;
    }
`

const CardsDivAddChar = styled.div`
    @media (max-width: 600px) {
        margin-bottom: 15px;
    }
`

const CardsDivFilter = styled.div`
    @media (max-width: 600px) {
        margin-bottom: 15px;
    }
`

const CardsDivSearch = styled.div`
    @media (max-width: 600px) {
        margin-bottom: 15px;
    }
`

const CardsInput = styled.input`
    border-radius: 15px;
    font-size: 20px;
    border: none;
    background-color: #e7e7e7;
    outline: none;
    text-align: center;
    color: #707070;
    padding: 10px 15px;
    transition: 0.1s all linear;
    
    @media (max-width: 710px) {
        width: 150px;
    }
    
    &:focus {
        outline: 2px solid #379c35;
    }
`
const CardsDivButton = styled.div`
    display: inline-block;
    @media (max-width: 1150px) {
        margin-top: 10px;
    }
`

const CardsButton = styled.button`
    font-size: 20px;
    margin: 0 5px 0 5px;
    background-color: ${props => (props.bgRed && '#e92a2a') || '#3cc03a'};
    padding: 10px 12px;
    border: none;
    border-radius: 15px;
    cursor: pointer;
    transition: 0.1s all linear;

    i {
        color: white;
    }

    &:hover {
        background-color: #242424;
    }
`

const CardsSelect = styled.select`
    font-size: 20px;
    border-radius: 15px;
    border: none;
    background-color: #e7e7e7;
    text-align: center;
    color: #707070;
    padding: 10px 15px;
    transition: 0.1s all linear;
    margin-left: 5px;

    @media (max-width: 740px) {
        &:not(:first-child) {
            margin-top: 10px;
        } 
    }

    option {
        background-color: #e7e7e7;
        &:first-child {
            font-size: 16px;
            font-weight: bold;
            color: #999999
        }
    }
`

const CardsEmpty = styled.div`
    display: block;
    width: 50%;
    margin: 0 auto;
    background-color: #dfdfdf;
    padding: 0 10px;
    border-radius: 10px;
    border-bottom: 5px solid #a8a8a8;
    color: #757575;
`
const CardsSvg = styled(Player)`
    width: 500px;
   
    @media (max-width: 1110px) {
        max-width: 100%;
    }
    
`



export {
    CardsDivMain,
    CardsDivBar,
    CardsDivAddChar,
    CardsDivFilter,
    CardsDivSearch,
    CardsInput,
    CardsButton,
    CardsSelect,
    CardsDivButton,
    CardsEmpty,
    CardsSvg,
}