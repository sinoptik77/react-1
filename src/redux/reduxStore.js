import { combineReducers } from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import usersReducer from "./usersReducer";
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

let reducers = combineReducers({
  profileReducer,
  dialogsReducer,
  usersReducer,
});

const composeEnhancers = composeWithDevTools({
  // Specify here name, actionsBlacklist, actionsCreators and other options
});

const store = createStore(
    reducers,
    composeEnhancers(
        // other store enhancers if any
    )
);

export default store;
