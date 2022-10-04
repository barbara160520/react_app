import {combineReducers, createStore} from "redux";
import {messageReducer} from "./reducers/messageReducer/messageReducer";
import {chatReducer} from "./reducers/chatsReducer/chatReducer";

const reducer = combineReducers({
    messages: messageReducer,
    chats: chatReducer
})
export const store = createStore(reducer)