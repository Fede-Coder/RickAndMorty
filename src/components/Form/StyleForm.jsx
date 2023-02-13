import styled from "styled-components";
import bg from '../../assets/img/rick-n-morty-wallpaper.jpg'

const FormDivContainer = styled.div`
    margin: 0 auto;
    width: 60%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-wrap: wrap;
`

const FormBoxLogin = styled.div`
    background-color: #eaeaea;
    width: 100%;
    display: flex;
`

const FormDivBG = styled.div`
    background: url(${bg}) 0% 0% no-repeat;
    height: 550px;
    width: 50%;
    background-size: cover;
    background-position: center;
    box-shadow: inset 0px 5px 40px 15px #282a2d;
`

const FormForm = styled.form`
    width: 50%;
    margin: auto;
`

const FormDivLogin = styled.div`
    margin: 15px 0;
`

const FormInput = styled.input`
    font-size: 20px;
    padding: 10px;
    border: none;
    background-color: #cccccc;
    color: #666;
    outline: none;
    font-family: 'Montserrat';
    font-weight: 600;
    transition: 0.1s all ease-out;
    border-radius: 10px;

    &:focus {
        box-shadow: 0px 3px #0db938;
    }
`

const FormButton = styled.button`
    background-color: #0db938;
    color: white;
    font-size: 25px;
    padding: 10px 50px;
    transition: 0.1s all ease-out;
    border: none;
    outline: none;
    border-radius: 10px;
    margin-top: 15px;
    font-family: 'Montserrat';
    font-weight: 600;
    text-transform: uppercase;

    &:hover {
        background-color: #242424;
    }
`

const FormDivError = styled.div`
    text-align: start;
    margin-top: 10px;
    width: 80%;
    margin: 15px auto;
    padding: 2px 10px;
    background-color: #ffcbc4;
`

const FormP = styled.li`
    color: #e92d2d;
    display: ${props => props.error === undefined ? 'none' : 'flow-root list-item'};
`

export {
    FormDivContainer,
    FormBoxLogin,
    FormDivBG,
    FormForm,
    FormDivLogin,
    FormInput,
    FormButton,
    FormDivError,
    FormP,
}