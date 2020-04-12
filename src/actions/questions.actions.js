export const QUESTIONS_ACTION_TYPES = {
    RECEIVE_QUESTIONS: "RECEIVE_QUESTIONS",
    ADD_QUESTION: "ADD_QUESTION",
    RESET_QUESTIONS: "RESET_QUESTIONS",
    UPDATE_VOTES: "UPDATE_VOTES"
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

export function updateVotes(questionAnswer) {
    return {
        type: QUESTIONS_ACTION_TYPES.UPDATE_VOTES,
        questionAnswer
    }
}

export function addQuestion(question) {
    return {
        type: QUESTIONS_ACTION_TYPES.ADD_QUESTION,
        question
    }
}

