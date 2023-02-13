import styled from "styled-components";
import { NavLink } from "react-router-dom";

const DivNav = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: #86868671;
    margin-bottom: 20px;
    padding: 10px 0;
`

const DivMenu = styled.div`
    margin: 10px 10px;
`

const ANavLink = styled(NavLink)`
    color: white;
    padding: 20px;
    font-size: 30px;
    background-color: #868686;
    text-decoration: none;
    transition: 100ms all linear;
    position: relative;

    &.active {
        background-color: #cfcfcf;
        color: #252525;
    }

    &.active:after {
        transform: scaleX(1);
    }

    &:hover {        
        background-color: #cfcfcf;
        color: #252525;
    }

    &:after {
        content: '';
        width: 100%;
        transform: scaleX(0);
        height: 4px;
        bottom: 0;
        left: 0;
        background-color: #0051fffb;
        transition: transform 0.5s cubic-bezier(.68,-0.55,.27,1.55);
        position: absolute;
    }

    &:hover:after {
        transform: scaleX(1);
    }
`

const NavButton = styled.button`
    margin-right: 10px;
    font-size: 25px;
    background-color: #ff4343;
    color: #fff;
    border: none;
    border-radius: 10px;
    padding: 0 20px;
    transition: 0.1s all ease-out;
    cursor: pointer;
    
    &:hover {
        background-color: #888888;
        transition: 0.1s all ease-out;
    }
`

export {
    DivNav,
    DivMenu,
    ANavLink,
    NavButton,
}