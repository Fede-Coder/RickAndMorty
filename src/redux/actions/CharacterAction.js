import axios from "axios";
import {
    ADD_CHARACTER,
    DEL_CHARACTER,
    CLEAR_CHARACTER,
    GET_CHARACTER_DETAIL,
    CLEAR_CHARACTER_DETAIL,
    ADD_CHAR_FAVORITE,
    DEL_CHAR_FAVORITE,
    CLEAR_CHAR_FAVORITE,
} from "./types";

function addCharacter(id) {
    return async function(dispatch) {
        let res = await axios.get(`https://rickandmortyapi.com/api/character/${id}`).then(response => response.data)
        dispatch({type: ADD_CHARACTER, payload: res })
    }
}

const delCharacter = (id) => {
    return { type: DEL_CHARACTER, payload: id }
}

const clearCharacter = () => {
    return { type: CLEAR_CHARACTER }
}

const getCharacterDetail = (char) => {
    return { type: GET_CHARACTER_DETAIL, payload: char }
}

const clearCharacterDetail = () => {
    return { type: CLEAR_CHARACTER_DETAIL }
}

const addCharFavorite = (char) => {
    return { type: ADD_CHAR_FAVORITE, payload: char }
}

const delCharFavorite = (id) => {
    return { type: DEL_CHAR_FAVORITE, payload: id }
}

const clearCharFavorite = () => {
    return { type: CLEAR_CHAR_FAVORITE }
}

export {
    addCharacter,
    delCharacter,
    clearCharacter,
    getCharacterDetail,
    clearCharacterDetail,
    addCharFavorite,
    delCharFavorite,
    clearCharFavorite,
}