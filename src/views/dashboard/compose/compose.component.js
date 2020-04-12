import React, {Component} from 'react';
import {Card, CardContent, Divider, Form, Header} from "semantic-ui-react";
import {connect} from "react-redux";
import {handleAddNewQuestion} from "../../../actions/shared.actions";
import {withRouter} from "react-router-dom";

class ComposeComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            optionOneText: '',
            optionTwoText: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(event) {
        const {name, value} = event.target;
        this.setState({[name]: value});
    }

    handleSubmit(event) {
        event.preventDefault();
        const {optionOneText, optionTwoText} = this.state;
        const {authenticatedUser, dispatch} = this.props;
        const question = {author: authenticatedUser, optionOneText, optionTwoText};
        dispatch(handleAddNewQuestion(question));
        this.setState(() => ({
            optionOneText: '',
            optionTwoText: ''
        }));
        this.toHome();
    }

    toHome() {
        this.props.history.push('/');
    }


    render() {
        const {optionOneText, optionTwoText} = this.state;
        return (
            <Card fluid>
                <Card.Content textAlign={"center"} header='Create New Question'/>
                <CardContent>
                    <Form onSubmit={this.handleSubmit} autoComplete="off">
                        <Header size='small'>Complete the question:</Header>
                        <Header size='large'>Would you rather...</Header>
                        <Form.Input fluid
                                    placeholder='Enter Option One Text Here'
                                    value={optionOneText}
                                    name="optionOneText"
                                    onChange={this.handleChange}/>
                        <Divider horizontal>Or</Divider>
                        <Form.Input fluid
                                    placeholder='Enter Option Two Text Here'
                                    value={optionTwoText}
                                    name="optionTwoText"
                                    onChange={this.handleChange}/>
                        <Form.Button fluid color="teal" content='Submit'/>
                    </Form>
                </CardContent>
            </Card>
        );
    }
}


function mapStateToProps({authenticatedUser}) {
    return {
        authenticatedUser
    }
}

export default withRouter(connect(mapStateToProps)(ComposeComponent));
