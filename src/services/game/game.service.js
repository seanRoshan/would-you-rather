import {GameBackend} from "../../backend/game/game.backend";

export class GameService {

    static getInitialData() {
        return Promise.all([
            GameBackend.getUsers(),
            GameBackend.getQuestions()
        ]).then(([users, questions]) => ({
            users,
            questions
        }));
    }

    static getUsers() {
        return GameBackend.getUsers();
    }

    static signIn(userId){
        return GameBackend.signIn(userId);
    }

    static getQuestions() {
        return GameBackend.getQuestions();
    }

    static generateQuestionBasicCardInfo(authenticatedUser, questionId, users, questions) {

        if (!(users
            && questions
            && questionId
            && questions[questionId]
            && questions[questionId]["optionOne"]
            && questions[questionId]["optionTwo"]
            && questions[questionId]["author"])) {
            return {}
        }

        const question = questions[questionId];
        const user = users[question.author];
        const authenticatedUserAnswer = questions[questionId][users[authenticatedUser]["answers"][questionId]];

        return {
            questionId,
            optionOne: question.optionOne.text,
            optionTwo: question.optionTwo.text,
            authenticatedUserAnswer: authenticatedUserAnswer ? authenticatedUserAnswer.text : "",
            authorId: question.author,
            authorName: user.name,
            authorAvatar: user.avatarURL
        }
    }


}
