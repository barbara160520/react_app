import * as types from './actionTypes';

export const loadingPhotos = () => ({
    type: 'getPhotos',
})

export const errorPhotos = (e) => ({
    type: 'getPhotos',
    payload: e
})

export const rgisterStart = () => ({
    type: types.LOADING_REGISTER,
})

export const rgisterError = (e) => ({
    type: types.ERROR_REGISTER,
    payload: e.toString()
})

export const rgisterSuccess = (user) => ({
    type: types.SUCCESS_REGISTER,
    payload: user
})

export const loginStart = () => ({
    type: types.LOADING_LOGIN,
})

export const loginError = (e) => ({
    type: types.ERROR_LOGIN,
    payload: e.toString()
})

export const loginSuccess = (user) => ({
    type: types.SUCCESS_LOGIN,
    payload: user
})
export const logoutStart = () => ({
    type: types.LOGOUT_START,
})

export const logoutError = (e) => ({
    type: types.LOGOUT_ERROR,
    payload: e.toString()
})

export const logoutSuccess = () => ({
    type: types.LOGOUT_SUCCESS,
})