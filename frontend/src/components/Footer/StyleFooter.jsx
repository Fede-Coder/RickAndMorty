import styled from "styled-components";

const FooterSvg = styled.svg`
    display: block;
    filter: drop-shadow(0 0 10px black);
    width: 100%;
    height: 100%;
`
const FooterDiv = styled.div`
    position: relative;
    background-color: #3e4551;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    gap: 2rem;
    justify-content: space-around;
    color:white
`

const FooterRickMorty = styled.div`
    margin-top: -5px;
    img {
        width: 200px;
    }
    p {
        width: 300px;
        text-align: justify;
    }
`

const FooterLinks = styled.div`
    text-align: start;
`

const FooterContact = styled.div`
    text-align: start;
    
`

const FooterCopyright = styled.div`
    background-color: #333842;
    h3 {
        margin: 0;
        padding: 20px 0;
        color:white
    }
`

export {
    FooterSvg,
    FooterDiv,
    FooterRickMorty,
    FooterLinks,
    FooterContact,
    FooterCopyright,
}