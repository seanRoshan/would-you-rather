import {hideLoading, showLoading} from "react-redux-loading-bar";
import {receiveUsers} from "./users.actions";
import {receiveQuestions} from "./questions.actions";
import {GameService} from "../services";

export function handleInitialData() {
    return (dispatch) => {
        dispatch(showLoading());
        GameService.getInitialData().then(({users, questions}) => {
            dispatch(receiveUsers(users));
            dispatch(receiveQuestions(questions));
            dispatch(hideLoading());
        });
    }
}
