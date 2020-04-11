import React from 'react';
import PropTypes from "prop-types";
import QuestionInfoComponent from "../info/question.info.component";
import {Message} from "semantic-ui-react";

function QuestionListComponent(props) {

    const {questionCards} = props;


    return (questionCards && questionCards.length)
        ? questionCards.map((questionCard) => (
            <QuestionInfoComponent key={questionCard.questionId} questionCard={questionCard}/>))
        : (<Message negative>
            <Message.Header>Empty list!</Message.Header>
        </Message>)


}

export default QuestionListComponent;

QuestionListComponent.propTypes = {
    questionCards: PropTypes.array
};
