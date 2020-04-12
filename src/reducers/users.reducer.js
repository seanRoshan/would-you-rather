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
            console.warn({authenticatedUserId, questionId});
            return {
                ...state,
                [authenticatedUserId]: {
                    ...state[authenticatedUserId],
                    questions: state[authenticatedUserId].questions.concat(questionId)
                }
            }
        }
        default: {
            return state;
        }
    }
}
