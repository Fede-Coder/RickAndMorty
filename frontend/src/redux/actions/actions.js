import { ADD_CHAR_FAVORITE, DEL_CHAR_FAVORITE } from "./types";

const addFavorite = (card) => {
    return { type: ADD_CHAR_FAVORITE, payload: card }
}

const delFavorite = (id) => {
    return { type: DEL_CHAR_FAVORITE, payload: id }
}

export {
    addFavorite,
    delFavorite
}