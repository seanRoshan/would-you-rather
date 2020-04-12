import React, {Component} from 'react';
import {Card, CardContent, Form, Grid, Header, Image, Radio} from "semantic-ui-react";
import {connect} from "react-redux";
import {handleSaveQuestionAnswer} from "../../../actions/shared.actions";

class QuestionAnswerComponent extends Component {


    constructor(props) {
        super(props);

        this.state = {
            answer: "optionOne"
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event, {value}) {
        this.setState({answer: value});
    }

    handleSubmit(event) {
        event.preventDefault();
        const {answer} = this.state;
        const {authenticatedUser, questionCard, dispatch} = this.props;
        const {questionId} = questionCard;
        const questionAnswer = {authenticatedUser, qid: questionId, answer};
        dispatch(handleSaveQuestionAnswer(questionAnswer));
    }

    render() {

        const {questionCard} = this.props;

        const {authorName, authorAvatar, optionOne, optionTwo} = questionCard;

        return (
            <Card fluid>
                <Card.Content textAlign={"left"} header={`${authorName} asks:`}/>
                <CardContent>
                    <Grid columns={2} divided>
                        <Grid.Row>
                            <Grid.Column textAlign={"center"} verticalAlign={"middle"}>
                                <Image src={authorAvatar} alt={`avatar of ${authorName}`} size={"small"} circular/>
                            </Grid.Column>
                            <Grid.Column textAlign={"left"} verticalAlign={"middle"}>
                                <Form onSubmit={this.handleSubmit} autoComplete="off">
                                    <Header size={"large"}>Would You Rather...</Header>
                                    <Form.Field>
                                        <Radio
                                            label={optionOne}
                                            name='answer'
                                            value='optionOne'
                                            checked={this.state.answer === 'optionOne'}
                                            onChange={this.handleChange}
                                        />
                                    </Form.Field>
                                    <Form.Field>
                                        <Radio
                                            label={optionTwo}
                                            name='answer'
                                            value='optionTwo'
                                            checked={this.state.answer === 'optionTwo'}
                                            onChange={this.handleChange}
                                        />
                                    </Form.Field>
                                    <Form.Button fluid color="teal" content='Submit'/>
                                </Form>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </CardContent>
            </Card>
        );
    }
}

function mapStateToProps({authenticatedUser}, {questionCard}) {
    return {
        authenticatedUser,
        questionCard
    }
}

export default connect(mapStateToProps)(QuestionAnswerComponent);
