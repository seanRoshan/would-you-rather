import React, {Component} from 'react';
import {connect} from "react-redux";
import {Card, CardContent, Grid, Header, Image} from "semantic-ui-react";
import UserVoteComponent from "../../user/vote/user.vote.component";

class QuestionResultComponent extends Component {
    render() {
        const {questionCard} = this.props;

        const {optionOne, optionTwo, optionOneVotes, optionTwoVotes, authenticatedUserAnswer, authorName, authorAvatar} = questionCard;


        const optionOneUserVoteCard = {
            isUserVote: authenticatedUserAnswer === optionOne,
            text: optionOne,
            votes: optionOneVotes,
            total: optionOneVotes + optionTwoVotes
        };

        const optionTwoUserVoteCard = {
            isUserVote: authenticatedUserAnswer === optionTwo,
            text: optionTwo,
            votes: optionTwoVotes,
            total: optionOneVotes + optionTwoVotes
        };


        return (
            <Card fluid>
                <Card.Content header={`Asked by ${authorName}`}/>
                <CardContent >
                    <Grid columns={2} divided>
                        <Grid.Row>
                            <Grid.Column textAlign={"center"} verticalAlign={"middle"}>
                                <Image src={authorAvatar} alt={`avatar of ${authorName}`} size={"large"} circular/>
                            </Grid.Column>
                            <Grid.Column>
                                <Header size={"large"}>Result:</Header>
                                <UserVoteComponent userVoteCard={optionOneUserVoteCard}/>
                                <UserVoteComponent userVoteCard={optionTwoUserVoteCard}/>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </CardContent>
            </Card>
        );
    }
}

function mapStateToProps({authenticatedUser}, {id, questionCard}) {
    return {
        id,
        questionCard,
        authenticatedUser
    }
}

export default connect(mapStateToProps)(QuestionResultComponent);
