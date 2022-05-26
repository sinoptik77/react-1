const ADD_POST = 'ADD-POST';
const POST_ON_CHANGE = 'UPDATE-NEW-POST-TEXT';

export const addPostActionCreator = () => ({type: ADD_POST})
export const postOnChangeActionCreator = (text) => ({type: POST_ON_CHANGE, newText: text})

let initialState = {
    post: [
        {message: 'Hi, it\'s my first post!', likeCount: '12'},
        {message: 'What a wonderful world', likeCount: '21'}
    ],
    newPostText: 'Text',
    description: [
        {description: 'Hi, my name is Illya and i love JS. Follow and pm me!'}
    ],
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                message: state.newPostText,
                likeCount: '0',
            }
            const newPosts = [...state.post, newPost]
            return {
                ...state,
                newPostText: "",
                post: newPosts
            }
        case POST_ON_CHANGE:
            return {
                ...state,
                newPostText: action.newText
            }
        default:
            return state
    }
}

export default profileReducer;