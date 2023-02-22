import { 
    ADD_CHARACTER,
    DEL_CHARACTER,
    CLEAR_CHARACTER,
    GET_CHARACTER_DETAIL,
    CLEAR_CHARACTER_DETAIL,
    ADD_CHAR_FAVORITE,
    DEL_CHAR_FAVORITE,
    CLEAR_CHAR_FAVORITE,
} from "../actions/types";

const initialState = {
    characters: [],
    characterDetail: {},
    favorites: [],
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_CHARACTER:
            return {...state, characters: [...state.characters, action.payload]}
        case DEL_CHARACTER:
            return {...state, characters: state.characters.filter(char => char.id !== action.payload)}
        case CLEAR_CHARACTER:
            return {...state, characters: []}
        case GET_CHARACTER_DETAIL:
            return {...state, characterDetail: action.payload}
        case CLEAR_CHARACTER_DETAIL:
            return {...state, characterDetail: {}}
        case ADD_CHAR_FAVORITE:
            return {...state, favorites: [...state.favorites, action.payload]}
        case DEL_CHAR_FAVORITE:
            return {...state, favorites: state.favorites.filter(fav => fav.id !== action.payload)}
        case CLEAR_CHAR_FAVORITE:
            return {...state, favorites: []}
        default:
            return {...state}
    }
}

export default rootReducer;