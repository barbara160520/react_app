import { errorPhotos,loadingPhotos } from "../../storge/actions";

const initialState = {
    photos: [],
    loading: false,
    error: null
  }
  
export const photoReducer = (state = initialState, action) => {
    switch(action.type){
        case 'loading':
            return{
                ...state,
                loading: true
            }
        case 'error':
            return{
                ...state,
                error: action.payload,
                loading: false
            }
        case 'getPhotos':
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
        dispatch(
            loadingPhotos()
           // type: 'loading'
        )
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await response.json();
            dispatch({
                type: 'getPhotos',
                payload: data
            })
        }catch(e){
            dispatch(
                errorPhotos(e.toString())
                /*type: 'error',
                payload: e.toString()*/
            )
        }finally{
            console.log("work it")
        }
    }
}