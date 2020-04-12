import {hideLoading, showLoading} from "react-redux-loading-bar";
import {GameService} from "../services";

export const QUESTIONS_ACTION_TYPES = {
    RECEIVE_QUESTIONS: "RECEIVE_QUESTIONS",
    ADD_QUESTION: "ADD_QUESTION",
    RESET_QUESTIONS: "RESET_QUESTIONS",
};

export function receiveQuestions(questions) {
    return {
        type: QUESTIONS_ACTION_TYPES.RECEIVE_QUESTIONS,
        questions
    }
}


export function resetQuestions() {
    return {
        type: QUESTIONS_ACTION_TYPES.RESET_QUESTIONS
    }
}


export function handleReceiveQuestions() {
    return (dispatch) => {
        dispatch(showLoading());
        GameService.getQuestions()
            .then((questions) => {
                dispatch(receiveQuestions(questions));
                dispatch(hideLoading());
            });
    }
}


export function addQuestion(question) {
    return {
        type: QUESTIONS_ACTION_TYPES.ADD_QUESTION,
        question
    }
}

