import { ADD_CHAR_FAVORITE, DEL_CHAR_FAVORITE } from "../actions/types";

const initialState = {
    myFavorites: []
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_CHAR_FAVORITE:
            return {...state, myFavorites: [...state.myFavorites, action.payload]}
        case DEL_CHAR_FAVORITE:
            return {...state, myFavorites: state.myFavorites.filter(fav => fav.id !== action.payload)}
        default:
            return {...state}
    }
}

export default rootReducer;