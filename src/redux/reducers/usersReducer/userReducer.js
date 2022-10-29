import { auth } from '../../../servise/firebase';
import * as types from '../../storge/actionTypes';
import {rgisterStart,rgisterError,rgisterSuccess,loginError,loginStart,loginSuccess,logoutError,logoutStart,logoutSuccess} from '../../storge/actions';


const initialState={
    loading: false,
    error: null,
    currentUser: null
}

export const userReducer = (state = initialState,action) =>{
    switch(action.type){
        case types.LOGOUT_START:
        case types.LOADING_LOGIN:
        case types.LOADING_REGISTER:
            return{
                ...state,
                loading: true
            }
        case types.ERROR_LOGOUT:
        case types.ERROR_LOGIN:
        case types.ERROR_REGISTER:
            return{
                ...state,
                error: action.payload,
                loading: false
            }
        case types.SUCCESS_LOGIN:
        case types.SUCCESS_REGISTER:
            return {
                ...state,
                currentUser: action.payload
            }
        case types.LOGOUT_SUCCESS:
            return{
                ...state,
                currentUser: state.currentUser = null,
                loading: false
            }
        default:
            return state
    }
}

export const registerInitial = (email,password,displayName) =>{
    return(dispatch) => {
        dispatch(rgisterStart())
        auth
            .createUserWithEmailAndPassword(email,password)
            .then(({user}) => {
                user.updateProfile({displayName})
                dispatch(rgisterSuccess(user))
            })
            .catch((e)=>dispatch(rgisterError(e.toString())))
    }
}

export const loginInitial = (email,password) =>{
    return(dispatch) => {
        dispatch(loginStart())
        auth
            .signInWithEmailAndPassword(email,password)
            .then(({user}) => {
                dispatch(loginSuccess(user))
            })
            .catch((e)=>dispatch(loginError(e.toString())))
    }
}

export const logoutInitial = () =>{
    return(dispatch) => {
        dispatch(logoutStart())
        auth
            .signOut()
            .then(() => 
                dispatch(logoutSuccess())
            )
            .catch((e)=>dispatch(logoutError(e.toString())))
    }
}