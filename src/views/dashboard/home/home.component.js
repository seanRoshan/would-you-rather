import React, {Component} from 'react';
import {handleInitialData} from "../../../actions/shared.actions";
import {connect} from "react-redux";
import QuestionListComponent from "../../../components/question/list/question.list.component";
import {Tab} from "semantic-ui-react";
import {GameService} from "../../../services";

class HomeComponent extends Component {

    componentDidMount() {
        this.props.dispatch(handleInitialData())
    }

    render() {

        const {questions, users, authenticatedUser, loading} = this.props;

        const questionCards =
            questions ?
                Object.keys(questions)
                    .sort((a, b) => questions[b].timestamp - questions[a].timestamp)
                    .map((questionId) => (GameService.generateQuestionBasicCardInfo(authenticatedUser, questionId, users, questions)))
                : [];

        const answeredList = questionCards.filter((questionCard) => questionCard.authenticatedUserAnswer);
        const unAnsweredList = questionCards.filter((questionCard) => !questionCard.authenticatedUserAnswer);

        const panes = [
            {
                menuItem: 'Unanswered Questions',
                key: "unansweredList",
                render: () => <Tab.Pane loading={loading}><QuestionListComponent
                    questionCards={unAnsweredList}/></Tab.Pane>
            },
            {
                menuItem: 'Answered Questions',
                key: "answeredList",
                render: () => <Tab.Pane loading={loading}><QuestionListComponent
                    questionCards={answeredList}/></Tab.Pane>
            },
        ];

        return (
            <Tab panes={panes}/>
        );
    }
}

function mapStateToProps({authenticatedUser, users, questions, loadingBar}) {
    return {
        loading: !!loadingBar.default,
        questions,
        authenticatedUser,
        users
    }
}

export default connect(mapStateToProps)(HomeComponent);
