import {combineReducers} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import {legacy_createStore as createStore} from "redux";

let reducers = combineReducers({
        profileReducer,
        dialogsReducer
    }
)

let store = createStore(reducers);

export default store;