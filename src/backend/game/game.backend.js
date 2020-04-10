import {questions, users} from "./data";

export class GameBackend {

    static generateUID() {
        return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    }

    static getUsers() {
        return new Promise((res, rej) => {
            setTimeout(() => res({...users}), 1000)
        })
    }

    static getQuestions() {
        return new Promise((res, rej) => {
            setTimeout(() => res({...questions}), 1000)
        })
    }

    static signIn(userId) {
        return new Promise(((resolve, reject) => {
            for (let userKey in users) {
                if (userKey === userId) {
                    setTimeout(() => resolve(userId), 1000);
                    return;
                }
            }
            reject("Invalid user!");
        }));
    }

    static formatQuestion({optionOneText, optionTwoText, author}) {
        return {
            id: GameBackend.generateUID(),
            timestamp: Date.now(),
            author,
            optionOne: {
                votes: [],
                text: optionOneText,
            },
            optionTwo: {
                votes: [],
                text: optionTwoText,
            }
        }
    }

    static saveQuestion(question) {
        return new Promise((res, rej) => {
            try {
                const authenticatedUser = question.author;
                const formattedQuestion = GameBackend.formatQuestion(question);
                setTimeout(() => {
                    questions[formattedQuestion.id] = formattedQuestion;
                    users[authenticatedUser].questions.concat([formattedQuestion.id]);
                    res(formattedQuestion)
                }, 1000)
            } catch (e) {
                rej(e);
            }
        })
    }

    static saveQuestionAnswer({authenticatedUser, qid, answer}) {
        return new Promise((res, rej) => {
            try {
                setTimeout(() => {
                    users[authenticatedUser].answers[qid] = answer;
                    questions[qid][answer].votes.concat([authenticatedUser]);
                    res()
                }, 500)
            } catch (e) {
                rej(e);
            }
        })
    }

}
