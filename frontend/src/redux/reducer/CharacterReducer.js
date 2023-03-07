import { 
    ADD_CHARACTER,
    ADD_RANDOM_CHARACTER,
    DEL_CHARACTER,
    CLEAR_CHARACTER,
    FILTER_GENDER_CHARACTERS,
    ORDER_CHARACTERS,
    RESET_FILTER_CHARACTERS,
    SEARCH_CHARACTERS,
    GET_CHARACTER_DETAIL,
    CLEAR_CHARACTER_DETAIL,
    ADD_CHAR_FAVORITE,
    DEL_CHAR_FAVORITE,
    CLEAR_CHAR_FAVORITE,
} from "../actions/types";

const initialState = {
    characters: [],
    allCharacters: [],
    characterDetail: {},
    favorites: [],
}

const CharacterReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_CHARACTER:
            return {
                ...state,
                characters: [...state.characters, action.payload],
                allCharacters:[...state.characters, action.payload],
            }
        case ADD_RANDOM_CHARACTER:
            return {
                ...state,
                characters: [...state.characters, action.payload],
                allCharacters:[...state.characters, action.payload],
            }
        case DEL_CHARACTER:
            return {
                ...state,
                characters: state.characters.filter(char => char.id !== action.payload),
                allCharacters: state.allCharacters.filter(char => char.id !== action.payload),
            }
        case CLEAR_CHARACTER:
            return {
                ...state,
                characters: [],
                allCharacters: [],
                favorites: [],
            }
        case FILTER_GENDER_CHARACTERS:
            return {
                ...state,
                characters: state.allCharacters.filter(char => char.gender === action.payload),
            }
        case ORDER_CHARACTERS:
            return {
                ...state,
                characters: 
                    action.payload === "Ascendente" 
                    ? state.allCharacters.slice().sort((a, b) => a.id > b.id) 
                    : state.allCharacters.slice().sort((a, b) => a.id < b.id)
            }
        case RESET_FILTER_CHARACTERS:
            return {
                ...state,
                characters: state.allCharacters
            }
        case SEARCH_CHARACTERS:
            return {
                ...state,
                characters: state.allCharacters.filter(char => char.name.includes(action.payload))
            }
        case GET_CHARACTER_DETAIL:
            return {
                ...state,
                characterDetail: action.payload,
            }
        case CLEAR_CHARACTER_DETAIL:
            return {
                ...state,
                characterDetail: {}
            }
        case ADD_CHAR_FAVORITE:
            return {
                ...state,
                favorites: [...state.favorites, action.payload],
            }
        case DEL_CHAR_FAVORITE:
            return {
                ...state,
                favorites: state.favorites.filter(fav => fav.id !== action.payload),
            }
        case CLEAR_CHAR_FAVORITE:
            return {
                ...state,
                favorites: [],
            }
        default:
            return {
                ...state
            }
    }
}

export default CharacterReducer;