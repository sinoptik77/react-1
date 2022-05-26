const MESSAGE_ON_CHANGE = 'MESSAGE-ON-CHANGE';
const ADD_MESSAGE = 'ADD-MESSAGE';

export const messageOnChangeActionCreator = (text) => ({type: MESSAGE_ON_CHANGE, newText: text})
export const addMessageActionCreator = () => ({type: ADD_MESSAGE})

let initialState = {
    dialogItem: [
        {id: 1, name: 'Nastya'},
        {id: 2, name: 'Vlad'},
        {id: 3, name: 'Zhenya'},
        {id: 4, name: 'Misha'},
        {id: 5, name: 'Sasha'},
    ],
    messageItem: [
        {message: 'Yo'},
        {message: 'Hi, how a u?'},
        {message: 'Wasup'},
    ],
    newMessageText: 'Text',
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                message: state.newMessageText,
            }
            const newMessages = [...state.messageItem, newMessage]
            return {
                ...state,
                newMessageText: '',
                messageItem: newMessages
            }
        case MESSAGE_ON_CHANGE:
            return {
                ...state,
                newMessageText: action.newText
            }
        default:
            return state
    }
}

export default dialogsReducer;