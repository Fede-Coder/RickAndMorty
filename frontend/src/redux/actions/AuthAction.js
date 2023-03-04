import axios from "axios"
import { LOGGED_IN_SUCCESS, LOGGED_IN_FAIL, LOGIN_REQUEST } from "./types"

function loginRequest() {
    return {
        type: LOGIN_REQUEST,
    }
}

function loginSuccess(userdata) {
    return {
        type: LOGGED_IN_SUCCESS,
        payload: userdata,
    }
}

function loginFailed() {
    return {
        type: LOGGED_IN_FAIL
    }
}

export function loginAuth(userdata) {
    return async function(dispatch) {
        dispatch(loginRequest())
        setTimeout( async function() {
            await axios.post('http://localhost:3001/auth/login', userdata)
            .then(res => {
                dispatch(loginSuccess(res.data))
            })
            .catch(error => dispatch(loginFailed()))
        }, 2000)
    }
}