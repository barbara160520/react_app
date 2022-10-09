import foto_1 from '/home/barbymak/React_GB/react_app/src/images/1.jpg';
import foto_2 from '/home/barbymak/React_GB/react_app/src/images/2.jpg';
import foto_3 from '/home/barbymak/React_GB/react_app/src/images/3.jpg';


const initialState = {
    chats: [
        {
            id: 1,
            img: foto_1,
            name: 'Weekend',
            user: 'Scott'
        },
        {
            id: 2,
            img: foto_2,
            name: 'Summer',
            user: 'Ali'
       },
        {
            id: 3,
            img: foto_3,
            name: 'Oui Oui',
            user: 'Sandra'
       }

    ]
  }

export const chatReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'delete':
            return {
                ...state,
                chats: state.chats.filter((item) => item.id !== action.payload.id)
            }
        case "add":
            return {
                ...state,
                chats: [
                    ...state.chats,
                    action.payload
                ]
            }
        default:
            return state
    }
}