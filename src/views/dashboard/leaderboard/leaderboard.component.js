import React, {Component} from 'react';
import {connect} from "react-redux";
import {GameService} from "../../../services";
import {Message} from "semantic-ui-react";
import UserScoreboardComponent from "../../../components/user/scoreboard/user.scoreboard.component";

class LeaderboardComponent extends Component {
    render() {

        const {users} = this.props;
        const userScoreBoards = users && Object.keys(users)
            ? GameService.generateScoreBoardCards(users)
            : [];


        console.log(userScoreBoards);

        return (userScoreBoards && userScoreBoards.length)
            ? userScoreBoards.map((scoreBoardCard) => (
                <UserScoreboardComponent key={scoreBoardCard.id} scoreBoardCard={scoreBoardCard}/>))
            : (<Message negative>
                <Message.Header>Leaderboard is empty!</Message.Header>
            </Message>)
    }
}

function mapStateToPros({users}) {
    return {
        users
    }
}

export default connect(mapStateToPros)(LeaderboardComponent);
