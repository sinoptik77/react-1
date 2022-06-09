const ADD_POST = "ADD-POST";
const POST_ON_CHANGE = "UPDATE-NEW-POST-TEXT";
const ADD_LIKE = "ADD-LIKE";
const STATE_FROM_LOCAL_STORAGE_PROFILE = "STATE-FROM-LOCAL-STORAGE-PROFILE";
const DELETE_POST = "DELETE-POST";


export const addPostActionCreator = () => ({ type: ADD_POST });
export const postOnChangeActionCreator = (text) => ({
  type: POST_ON_CHANGE,
  newText: text,
});
export const deletePostActionCreator = (index) => ({type: DELETE_POST, id: index})
export const addLikeActionCreator = (index) => ({ type: ADD_LIKE, id: index });
export const setStateProfileFromLS = (state) => ({
  type: STATE_FROM_LOCAL_STORAGE_PROFILE,
  state,
});

let initialState = {
  post: [],
  newPostText: "",
  description: [
    { description: "Hi, my name is Illya and i love JS. Follow and pm me!" },
  ],
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_POST:
      const deletePost = state.post.filter((post, index) => index !== action.id)
      return {
        ...state,
        post: deletePost,
      }
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
    case STATE_FROM_LOCAL_STORAGE_PROFILE:
      return {
        ...action.state,
      };
    default:
      return state;
  }
};

export default profileReducer;
