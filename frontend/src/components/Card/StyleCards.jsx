import styled from "styled-components";

const CardsDivMain = styled.div`
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
`

const CardsDivAddChar = styled.div`
`

const CardsDivFilter = styled.div`
`

const CardsDivSearch = styled.div`
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
    
    &:focus {
        outline: 2px solid #379c35;
        //box-shadow: 0 0 0px 2px #379c35;
        //box-shadow: 0px 2px #379c35;
    }
`

const CardsButton = styled.button`
    font-size: 20px;
    margin: 0 5px 0 5px;
    //#3cc03a
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

    option {
        background-color: #e7e7e7;
        &:first-child {
            font-size: 16px;
            font-weight: bold;
            color: #999999
        }
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
}