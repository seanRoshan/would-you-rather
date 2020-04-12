import {QUESTIONS_ACTION_TYPES} from "../actions/questions.actions";

export default function questions(state = {}, action) {
    switch (action.type) {
        case QUESTIONS_ACTION_TYPES.RECEIVE_QUESTIONS: {
            return {
                ...state,
                ...action.questions
            }
        }
        case QUESTIONS_ACTION_TYPES.ADD_QUESTION: {
            const {question} = action;
            return {
                ...state,
                [question.id]: question
            }
        }
        case QUESTIONS_ACTION_TYPES.UPDATE_VOTES: {
            const {questionAnswer} = action;
            const {qid, authenticatedUser, answer} = questionAnswer;
            return {
                ...state,
                [qid]: {
                    ...state[qid],
                    [answer]: {
                        ...state[qid][answer],
                        votes: state[qid][answer].votes.concat([authenticatedUser])
                    }
                }
            }
        }
        case QUESTIONS_ACTION_TYPES.RESET_QUESTIONS: {
            return {}
        }
        default: {
            return state;
        }

    }
}
