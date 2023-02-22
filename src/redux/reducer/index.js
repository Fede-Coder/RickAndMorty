import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import CharacterReducer from "./CharacterReducer";

export default combineReducers({
    auth: AuthReducer,
    characters: CharacterReducer,
})