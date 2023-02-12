import React from 'react';
import SearchBar from '../SearchBar/SearchBar'
import { DivNav, DivMenu, ANavLink } from './StyleNav';
import { useLocation } from 'react-router-dom';



export default function Nav(props) {//props.handleAddChar  (funcion), props.handleChange
    const location = useLocation().pathname
    return (
        <>
           {location !== '/' ?
           <DivNav>
                <DivMenu>
                    <ANavLink to={'/home'} >Home</ANavLink>
                    <ANavLink to={'/about'} >About</ANavLink>
                </DivMenu>
                {location === '/home' ? <SearchBar onSearch={props.handleAddChar}  handleChange={props.handleChange} /> : ''}
            </DivNav> 
           :
           ''}
        </>
    );
};