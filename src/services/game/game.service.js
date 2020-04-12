import {GameBackend} from "../../backend/game/game.backend";

const medalColors = ["yellow", "teal", "grey"];

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

    static signIn(userId) {
        return GameBackend.signIn(userId);
    }

    static getQuestions() {
        return GameBackend.getQuestions();
    }

    static saveQuestion(question) {
        return GameBackend.saveQuestion(question);
    }

    static saveQuestionAnswer(questionAnswer){
        return GameBackend.saveQuestionAnswer(questionAnswer);
    }

    static generateScoreBoardCards(users) {
        if (!users) return [];
        return Object.keys(users)
            .map((userId) => {
                const user = users[userId];
                const answered = Object.keys(user.answers).length;
                const asked = Object.keys(user.questions).length;
                return {
                    id: userId,
                    name: user.name,
                    avatar: user.avatarURL,
                    answered,
                    asked,
                    score: answered + asked,
                    medalColor: ""
                }
            })
            .sort((a, b) => b.score - a.score)
            .slice(0, 3)
            .map((userScoreCard, index) => ({
                ...userScoreCard,
                medalColor: medalColors[index]
            }));
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
            optionOneVotes: question.optionOne.votes ? question.optionOne.votes.length : 0,
            optionTwoVotes: question.optionTwo.votes ? question.optionTwo.votes.length : 0,
            authenticatedUserAnswer: authenticatedUserAnswer ? authenticatedUserAnswer.text : "",
            authorId: question.author,
            authorName: user.name,
            authorAvatar: user.avatarURL
        }
    }


}
