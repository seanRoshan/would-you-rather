import {USERS_ACTION_TYPES} from "../actions/users.actions";

export default function users(state = {}, action) {
    switch (action.type) {
        case USERS_ACTION_TYPES.RECEIVE_USERS: {
            return {
                ...state,
                ...action.users
            }
        }
        case USERS_ACTION_TYPES.ASK_QUESTION: {
            const {authenticatedUserId, questionId} = action;
            return {
                ...state,
                [authenticatedUserId]: {
                    ...state[authenticatedUserId],
                    questions: state[authenticatedUserId].questions.concat(questionId)
                }
            }
        }
        case USERS_ACTION_TYPES.UPDATE_ANSWERS: {
            const {questionAnswer} = action;
            const {qid, authenticatedUser, answer} = questionAnswer;
            return {
                ...state,
                [authenticatedUser]: {
                    ...state[authenticatedUser],
                    answers: {
                        ...state[authenticatedUser].answers,
                        [qid]: answer
                    }
                }
            }
        }
        default: {
            return state;
        }
    }
}
