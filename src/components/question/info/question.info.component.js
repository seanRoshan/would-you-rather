import React, {Component} from 'react';
import {connect} from "react-redux";
import {Button, Card, CardContent, Divider, Grid, Header, Image} from "semantic-ui-react";
import {Link} from "react-router-dom";

class QuestionInfoComponent extends Component {

    render() {
        const {questionCard} = this.props;

        const {authorName, authorAvatar, optionOne, optionTwo, authenticatedUserAnswer} = questionCard;

        return (
            <Card fluid>
                <Card.Content header={`${authorName} asks:`}/>
                <CardContent>
                    <Grid celled columns={2}>
                        <Grid.Column verticalAlign='middle' textAlign={"center"}>
                            <Image src={authorAvatar} size='small' circular/>
                        </Grid.Column>
                        <Grid.Column verticalAlign='top'>
                            <Header textAlign={"left"} size={"medium"}>Would you rather...</Header>
                            <Header textAlign={"center"} size={"small"}>{`${optionOne}`}</Header>
                            <Divider horizontal>Or</Divider>
                            <Header textAlign={"center"} size={"small"}>{`${optionTwo}`}</Header>
                            {authenticatedUserAnswer && (<Header textAlign={"left"} size={"large"}
                                                                 color="teal">{`Your Answer: ${authenticatedUserAnswer}`}</Header>)}
                        </Grid.Column>
                    </Grid>
                </CardContent>
                <Button secondary attached='top' as={Link} to={`/questions/${questionCard.questionId}`}>View
                    Poll</Button>
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

export default connect(mapStateToProps)(QuestionInfoComponent);
