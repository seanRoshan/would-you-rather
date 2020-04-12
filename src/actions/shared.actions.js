import {hideLoading, showLoading} from "react-redux-loading-bar";
import {askQuestion} from "./users.actions";
import {addQuestion, receiveQuestions, resetQuestions} from "./questions.actions";
import {GameService} from "../services";
import {setAuthenticatedUser} from "./authenticatedUser.action";


export function handleAddNewQuestion(question) {
    return (dispatch) => {
        dispatch(showLoading());
        GameService.saveQuestion(question)
            .then((formattedQuestion) => dispatch(addQuestion(formattedQuestion)))
            .then((action) => dispatch(askQuestion(question.author, action.question.id)))
            .then(() => dispatch(hideLoading()))
    }
}

export function handleSignIn(authenticatedUser) {
    return (dispatch) => {
        dispatch(showLoading());
        GameService.signIn(authenticatedUser)
            .then(() => {
                dispatch(setAuthenticatedUser(authenticatedUser));
                GameService.getQuestions().then((questions) => {
                    dispatch(receiveQuestions(questions));
                    dispatch(hideLoading());
                })
            }).catch((error) => {
            dispatch(hideLoading());
        });
    }
}


export function handleSignOut() {
    return (dispatch) => {
        dispatch(resetQuestions());
        dispatch(setAuthenticatedUser(null));
    }
}
