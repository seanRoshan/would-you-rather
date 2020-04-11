import {combineReducers} from "redux";
import {loadingBarReducer} from "react-redux-loading-bar";

import users from "./users.reducer";
import questions from "./questions.reducer";
import authenticatedUser from "./authenticatedUser.reducer";


export default combineReducers({
    users,
    questions,
    authenticatedUser,
    loadingBar: loadingBarReducer
});
