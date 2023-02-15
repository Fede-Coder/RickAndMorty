import { Link } from "react-router-dom";
import styled from "styled-components";

const FavCardDiv = styled.div`
    display: inline-block;
    margin: 10px;
    background-color: #dfdfdf;
    padding: 0 10px;
    border-radius: 10px;
    border-bottom: 5px solid #a8a8a8;
    text-align: left;
    div#button {
        text-align: right;
    }
`

const FavCardLinkDetail = styled(Link)`
    display: inherit;
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

const FavCardDivAvatar = styled.div`
    position: relative;
    button {
        position: absolute;
        top: 10px;
        right: 10px;
        border: none;
        background-color: #b4b4b4;
        border-radius: 10px;
        padding: 1px 2px;
        font-size: 28px;
        cursor: pointer;
    }
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


export {
    FavCardDiv,
    FavCardLinkDetail,
    FavCardDivAvatar,
}