import React from 'react';
import SearchBar from '../SearchBar/SearchBar'
import { DivNav } from './StyleNav';
import { NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';

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

export default function Nav(props) {//props.handleAddChar  (funcion), props.handleChange
    return (
        <>
           <DivNav>
                <DivMenu>
                    <ANavLink to={'/'} >Inicio</ANavLink>
                    <ANavLink to={'/home'} >Home</ANavLink>
                    <ANavLink to={'/about'} >About</ANavLink>
                </DivMenu>
                <>
                    {useLocation().pathname === '/home' ? <SearchBar onSearch={props.handleAddChar}  handleChange={props.handleChange} /> : ''}
                </>
            </DivNav> 
        </>
    );
};