import React, {Component} from 'react';
import QuestionAnswerComponent from "../../../components/question/answer/question.answer.component";
import {connect} from "react-redux";
import QuestionResultComponent from "../../../components/question/result/question.result.component";
import {GameService} from "../../../services";
import {withRouter} from "react-router-dom";

class DetailComponent extends Component {

    render() {
        const {authenticatedUser, id, users, questions} = this.props;
        const activeUser = users[authenticatedUser];
        const isAnswered = Object.keys(activeUser.answers).includes(id);
        const questionCard = GameService.generateQuestionBasicCardInfo(authenticatedUser, id, users, questions);

        if (!questions.hasOwnProperty(id)) {
            this.props.history.push("/not-found")
        }

        return isAnswered
            ? (<QuestionResultComponent questionCard={questionCard}/>)
            : (<QuestionAnswerComponent questionCard={questionCard}/>)
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

export default withRouter(connect(mapStateToProps)(DetailComponent));

