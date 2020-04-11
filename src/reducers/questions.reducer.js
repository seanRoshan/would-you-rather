import {QUESTIONS_ACTION_TYPES} from "../actions/questions.actions";

export default function questions(state = {}, action) {
    switch (action.type) {
        case QUESTIONS_ACTION_TYPES.RECEIVE_QUESTIONS: {
            return {
                ...state,
                ...action.questions
            }
        }
        default: {
            return state;
        }

    }
}
