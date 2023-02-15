import React from 'react';
import SearchBar from '../SearchBar/SearchBar'
import { DivNav, DivMenu, ANavLink, NavButton } from './StyleNav';
import { useLocation } from 'react-router-dom';



export default function Nav(props) {//props.handleAddChar  (funcion), props.handleChange
    const location = useLocation().pathname
    return (
        <>
           {location !== '/' ?
           <DivNav>
                <DivMenu>
                    <ANavLink to={'/home'} >Home</ANavLink>
                    <ANavLink to={'/favorites'}>My Favorites</ANavLink>
                    <ANavLink to={'/about'} >About</ANavLink>
                </DivMenu>
                {location === '/home' ? <SearchBar onSearch={props.handleAddChar}  handleChange={props.handleChange} /> : ''}
                <NavButton onClick={props.logout}>Logout</NavButton>
            </DivNav> 
           :
           ''}
        </>
    );
};