import {hideLoading, showLoading} from "react-redux-loading-bar";
import {GameService} from "../services";

export const QUESTIONS_ACTION_TYPES = {
    RECEIVE_QUESTIONS: "RECEIVE_QUESTIONS"
};

export function receiveQuestions(questions) {
    return {
        type: QUESTIONS_ACTION_TYPES.RECEIVE_QUESTIONS,
        questions
    }
}


export function handleReceiveQuestions() {
    return (dispatch) => {
        dispatch(showLoading());
        GameService.getQuestions().then((questions) => {
            dispatch(receiveQuestions(questions));
            dispatch(hideLoading());
        });
    }
}
