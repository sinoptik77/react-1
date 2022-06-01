const ADD_USER = "ADD-USER";
const STATE_FROM_LOCAL_STORAGE = "STATE-FROM-LOCAL-STORAGE";
const LOGIN = "LOGIN";

export const login = (user) => ({
  type: LOGIN,
  user: user,
});
export const registration = (user) => ({
  type: ADD_USER,
  user: user,
});
export const setStateUsersFromLS = (state) => ({
  type: STATE_FROM_LOCAL_STORAGE,
  state,
});

let initialState = {
  user: undefined,
  users: [
    {
      email: "tkk.vlad@gmail.com",
      username: "vt5496",
      password: "vt5496",
    },
  ],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN: {
      const userDB = state.users.filter(
        (item) => action.user.email === item.email
      )[0];
      if (userDB) {
        return {
          ...state,
          user: {
            ...userDB,
          },
        };
      } else {
        return;
      }
    }
    case ADD_USER:
      return {
        ...state,
        users: [...state.users, action.user],
      };
    case STATE_FROM_LOCAL_STORAGE:
      return {
        ...action.state,
      };
    default:
      return state;
  }
};

export default usersReducer;
