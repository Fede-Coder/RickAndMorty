import { LOGGED_IN_SUCCESS, LOGGED_IN_FAIL } from "../actions/types";

const initialState = {
    access: false,
    user: null,
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGGED_IN_SUCCESS:
            return {...state, access: action.payload.access, user: action.payload.user}
        case LOGGED_IN_FAIL:
            return {...state, access: action.payload.access, user: action.payload.user}
        default:
            return {...state}
    }
}

export default rootReducer;