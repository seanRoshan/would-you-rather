import {hideLoading, showLoading} from "react-redux-loading-bar";
import {GameService} from "../services";

export const USERS_ACTION_TYPES = {
    RECEIVE_USERS: "RECEIVE_USERS",
    ASK_QUESTION: "ASK_QUESTION",
    UPDATE_ANSWERS: "UPDATE_ANSWERS"
};

export function receiveUsers(users) {
    return {
        type: USERS_ACTION_TYPES.RECEIVE_USERS,
        users
    }
}


export function handleReceiveUsers() {
    return (dispatch) => {
        dispatch(showLoading());
        GameService.getUsers().then((users) => {
            dispatch(receiveUsers(users));
            dispatch(hideLoading());
        });
    }
}

export function askQuestion(authenticatedUserId, questionId) {
    return {
        type: USERS_ACTION_TYPES.ASK_QUESTION,
        authenticatedUserId,
        questionId
    }
}

export function updateAnswers(questionAnswer) {
    return {
        type: USERS_ACTION_TYPES.UPDATE_ANSWERS,
        questionAnswer
    }
}
