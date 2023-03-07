import styled from "styled-components";
import { NavLink } from "react-router-dom";

const DivNav = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: white;
    margin-bottom: 20px;
    padding: 10px 0;
    border-radius: 0px 0px 15px 15px;
    border-bottom: 5px solid #b3b3b3;

`

const DivMenu = styled.div`
    margin: 0 auto;
    width: 90%;
    display: flex;
    justify-content: space-between;
`

const DivNavMain = styled.div`
    @media (max-width: 1000px) {
        display: none;
    }
    display: flex;
`

const ANavLink = styled(NavLink)`
    color: white;
    font-size: 25px;
    background-color: #868686;
    text-decoration: none;
    transition: 100ms all linear;
    position: relative;
    border-radius: 10px;
    padding: 8px;
    margin: 5px 5px;

    &.active {
        background-color: #0080ca;
        color: #ffffff;
    }

    &.active:after {
        transform: scaleX(1);
    }

    &:hover {        
        background-color: #cfcfcf;
        color: #252525;
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

const NavDivResponsive = styled.div`

    @media (min-width: 1000px) {
        display: none;
    }
`

const NavResponsiveBtn = styled.button`
    font-size: 25px;
    color: white;
    padding: 10px 12px;
    border: none;
    border-radius: 10px;
    background-color: #252525;
    cursor: pointer;
    transition: 0.1s all linear;
    
    &:focus {
        box-shadow: 0px 0px 5px #ffffffeb;
    }

    &:hover {
        box-shadow: 0px 0px 5px #ffffffeb;
    }
`

const NavMenuResponsive = styled.div`
    background-color: #575757;
    position: absolute;
    left: 0;
    top: calc(0% + 90px);
    border-radius: 0 0 10px 0;
    transition: ${props => props.active ? 'visibility 0s' : 'visibility 0.2s'}, opacity 0.2s linear;
    visibility: ${props => props.active ? 'visible' : 'hidden'};
    opacity: ${props => props.active ? '1' : '0'};
    z-index: 1000;
`

const NavLinkResponsive = styled(NavLink)`
    display: block;
    text-decoration: none;
    color: white;
    font-size: 25px;
    padding: 10px;
    margin-left: 2px;
    transition: 0.1s all linear;

    &.active {
        background-color: #cfcfcf;
        color: #252525;
        box-shadow: -2px 0px #0051fffb;
    }

    &:hover {        
        background-color: #cfcfcf;
        color: #252525;
        box-shadow: -2px 0px #0051fffb;
    }
    
    &:last-child {
        border-radius: 0 0 10px 0;
    }
`

export {
    DivNav,
    DivMenu,
    DivNavMain,
    ANavLink,
    NavButton,
    NavDivResponsive,
    NavResponsiveBtn,
    NavMenuResponsive,
    NavLinkResponsive,
}