const ADD_POST = 'ADD-POST';
const POST_ON_CHANGE = 'UPDATE-NEW-POST-TEXT';
const MESSAGE_ON_CHANGE = 'MESSAGE-ON-CHANGE';
const ADD_MESSAGE = 'ADD-MESSAGE';

let store = {
    _state: {
        ProfilePage: {
            post: [
                {message: 'Hi, it\'s my first post!', likeCount: '12'},
                {message: 'What a wonderful world', likeCount: '21'}
            ],
            newPostText: 'Text',
            description: [
                {description: 'Hi, my name is Illya and i love JS. Follow and pm me!'}
            ],
        },
        DialogsPage: {
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
        },
    },
    _callSubscriber() {
        console.log('State changed');
    },
    getState () {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch (action) {
        if (action.type === ADD_POST) {
            let newPost = {
                message: this._state.ProfilePage.newPostText,
                likeCount: '0',
            }
            this._state.ProfilePage.post.push(newPost);
            this._state.ProfilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === POST_ON_CHANGE) {
            this._state.ProfilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === ADD_MESSAGE) {
            let newMessage = {
                message: this._state.DialogsPage.newMessageText,
            }
            this._state.DialogsPage.messageItem.push(newMessage);
            this._state.DialogsPage.newMessageText = '';
            this._callSubscriber(this._state);
        } else if (action.type === MESSAGE_ON_CHANGE) {
            this._state.DialogsPage.newMessageText = action.newText;
            this._callSubscriber(this._state);
        }
    },
}

export const messageOnChangeActionCreator = (text) => {
    return {
        type: MESSAGE_ON_CHANGE, newText: text
    }
}

export const addMessageActionCreator = () => {
    return {
        type: ADD_MESSAGE
    }
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}

export const postOnChangeActionCreator = (text) => {
    return {
        type: POST_ON_CHANGE, newText: text
    }
}

window.store = store;

export default store;