import { GET_PHOTOS, GET_PHOTOS_LOADING,GET_PHOTOS_ERROR } from "../../storge/actionTypes"

const initialState = {
    photos: [],
    loading: false,
    error: ''
  }
  
export const photoReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_PHOTOS_LOADING:
            return{
                ...state,
                loading: true
            }
        case GET_PHOTOS_ERROR:
            return{
                ...state,
                error: action.payload,
                loading: false
            }
        case GET_PHOTOS:
            return {
                ...state,
                photos: action.payload
            }
      default:
        return state
    }
  }

export const getData = () => {
    return async (dispatch) => {
        dispatch({
            type: GET_PHOTOS_LOADING
        })
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await response.json();
            dispatch({
                type: GET_PHOTOS,
                payload: data
            })
        }catch(error){
            dispatch({
                type: GET_PHOTOS_ERROR,
                payload: error.toString()
            })
        }finally{
            console.log("work it")
        }
    }
}