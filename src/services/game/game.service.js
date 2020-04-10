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

}
