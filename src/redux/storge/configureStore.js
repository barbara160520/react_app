import {applyMiddleware, combineReducers, createStore} from "redux";
import {messageReducer} from "../reducers/messagesReducer/messageReducer";
import {chatReducer} from "../reducers/chatsReducer/chatReducer";
import { photoReducer } from "../reducers/photosReducer/photoReducer";
import storage from 'redux-persist/lib/storage';
import {persistReducer,persistStore} from "redux-persist";
import thunk from "redux-thunk";

/*const logger = store => next => action =>{
    console.log('dispatching',action);
    console.log('before', store.getState());
    
    let result = next(action);

    console.log('after',store.getState())

    return result
}*/
const timeout = store => next => action =>{

    const delyMs =action?.meta?.delyMs
    if(!delyMs){
        return next(action)
    }
    
    const timeoutId = setTimeout(()=> next(action),delyMs);
    return () => {
        clearTimeout(timeoutId)
    }
}

/*const config = {
    key: 'root',
    storage
}*/

export const reducer = combineReducers({
    messages: messageReducer,
    chats: chatReducer,
    photos: photoReducer
})

//const persistedReducer = persistReducer(config, reducer)

export const store = createStore(reducer,applyMiddleware(thunk,timeout)); //persistedReducer
//export const persistor = persistStore(store);
