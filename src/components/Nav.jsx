import React from 'react';
import SearchBar from './SearchBar'
import { DivNav } from '../assets/css/StyleNav';

export default function Nav(props) {//props.handleAddChar  (funcion), props.handleChange
    return (
        <>
            <DivNav>
                <SearchBar onSearch={props.handleAddChar}  handleChange={props.handleChange} />
            </DivNav>
        </>
    );
};