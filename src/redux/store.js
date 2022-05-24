import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

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
        this._state.ProfilePage = profileReducer(this._state.ProfilePage, action);
        this._state.DialogsPage = dialogsReducer(this._state.DialogsPage, action);

        this._callSubscriber(this._state);
    },
}

window.store = store;

export default store;