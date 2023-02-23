import { LOGGED_IN_SUCCESS, LOGGED_IN_FAIL } from "./types"

function loginSuccess(username, password) {
    return {
        type: LOGGED_IN_SUCCESS,
        payload: {
            access: true,
            user: {username: username, password: password},
        },
    }
}

function loginFailed() {
    return {
        type: LOGGED_IN_FAIL,
        payload: {
            access: false,
            user: null,
        },
    }
}

export function login(username, password) {
    const user = "ejemplo@gmail.com"
    const pass = "1password"
    return username === user && password === pass ? loginSuccess(username, password) : loginFailed();
}