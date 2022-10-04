const initialState = {
    messages: [
        {
            id:1,
            text:"I'll be in your neighborhood doing errands this morning",
            author:"Ali",
            chat_id: 1
        },
        {
            id:2,
            text:"Ok",
            author:"Scott",
            chat_id: 1
        },
        {
            id:3,
            text:"Do you have my recommendations? ",
            author:"Alex",
            chat_id: 2
        },        {
            id:4,
            text:"Yes",
            author:"Jennifer",
            chat_id: 2
        },        {
            id:5,
            text:"Wish I could come, but I'm out of town this.",
            author:"Sandra",
            chat_id: 3
        },        {
            id:6,
            text:"Clear",
            author:"Adam",
            chat_id: 3
        }

    ]
  }
  
export const messageReducer = (state = initialState, action) => {
    switch(action.type){
        case "delete":
            return {
                ...state,
                messages: state.messages.filter((item)=>item.id !== action.payload)
            }
        case "add":
            return {
                ...state,
                messages: [
                    ...state.messages,
                    action.payload
                ]
            }
      default:
        return state
    }
  }