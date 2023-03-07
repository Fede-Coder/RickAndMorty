import { Player } from "@lottiefiles/react-lottie-player";
import styled from "styled-components";
import notFound from '../../assets/img/notFound1.json'

const NotFoundDiv = styled.div`
    background: #7777777a;
    border-radius: 10px;
    width: 50%;
    margin: 0 auto;
    margin-bottom: 10px;
   
   @media (max-width: 600px) {
       width: 80%;
   }
   
   @media (max-width: 1000px) {
        width: 70%;
   }
`

const NotFoundH1 = styled.h1`
    color: white;
    margin-bottom: -30px;
`

const NotFoundPlayer = styled(Player)`
    width: 500px;
   
    @media (max-width: 1110px) {
        max-width: 100%;
    }
    
`

export default function NotFound() {
    return(
        <NotFoundDiv>
            <NotFoundH1>OH NOOOO! <p>Lo que estas buscando no existe, lo siento!</p></NotFoundH1>
            <NotFoundPlayer autoplay loop src={notFound}></NotFoundPlayer>
        </NotFoundDiv>
    )
}