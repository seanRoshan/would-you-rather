import React, {Component} from 'react';
import QuestionAnswerComponent from "../../../components/question/answer/question.answer.component";
import {connect} from "react-redux";
import QuestionResultComponent from "../../../components/question/result/question.result.component";
import {GameService} from "../../../services";

class DetailComponent extends Component {

    render() {
        const {authenticatedUser, id, users, questions} = this.props;
        const activeUser = users[authenticatedUser];
        const isAnswered = Object.keys(activeUser.answers).includes(id);
        const questionCard = GameService.generateQuestionBasicCardInfo(authenticatedUser, id, users, questions);

        return isAnswered
            ? (<QuestionResultComponent id={id} questionCard={questionCard}/>)
            : (<QuestionAnswerComponent id={id}/>)
    }

}

function mapStateToProps({authenticatedUser, users, questions}, {match}) {
    const {id} = match.params;
    return {
        authenticatedUser,
        users,
        questions,
        id
    }
}

export default connect(mapStateToProps)(DetailComponent);

