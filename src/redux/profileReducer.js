const ADD_POST = "ADD-POST";
const POST_ON_CHANGE = "UPDATE-NEW-POST-TEXT";
const ADD_LIKE = "ADD-LIKE";
const STATE_FROM_LOCAL_STORAGE = "STATE-FROM-LOCAL-STORAGE";

export const addPostActionCreator = () => ({ type: ADD_POST });
export const postOnChangeActionCreator = (text) => ({
  type: POST_ON_CHANGE,
  newText: text,
});
export const addLikeActionCreator = (index) => ({ type: ADD_LIKE, id: index });
export const setStateProfileFromLS = (state) => ({
  type: STATE_FROM_LOCAL_STORAGE,
  state,
});

let initialState = {
  post: [
    { message: "Hi, it's my first post!", likeCount: true },
    { message: "What a wonderful world", likeCount: false },
  ],
  newPostText: "",
  description: [
    { description: "Hi, my name is Illya and i love JS. Follow and pm me!" },
  ],
};

const profileReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_LIKE:
      const addLikes = [...state.post];
      addLikes[action.id].likeCount = !addLikes[action.id].likeCount;
      return {
        ...state,
        post: addLikes,
      };
    case ADD_POST:
      if (state.newPostText === "") {
        break;
      } else {
        let newPost = {
          message: state.newPostText,
          likeCount: false,
        };
        const newPosts = [...state.post, newPost];
        return {
          ...state,
          newPostText: "",
          post: newPosts,
        };
      }
    case POST_ON_CHANGE:
      return {
        ...state,
        newPostText: action.newText,
      };
    case STATE_FROM_LOCAL_STORAGE:
      return {
        ...action.state,
      };
    default:
      return state;
  }
};

export default profileReducer;
