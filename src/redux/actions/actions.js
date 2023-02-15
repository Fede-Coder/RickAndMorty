import { ADD_FAVORITE, DEL_FAVORITE } from "./types";

const addFavorite = (card) => {
    return { type: ADD_FAVORITE, payload: card }
}

const delFavorite = (id) => {
    return { type: DEL_FAVORITE, payload: id }
}

export {
    addFavorite,
    delFavorite
}