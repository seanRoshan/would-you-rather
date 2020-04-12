import React from 'react';
import {Header, Label, Progress, Segment} from "semantic-ui-react";

function UserVoteComponent(props) {

    const {userVoteCard} = props;

    const {isUserVote, text, votes, total} = userVoteCard;
    const percentage = (votes * 100) / total;

    return (
        <Segment tertiary={isUserVote} color={isUserVote ? "green" : "black"} raised={isUserVote}>
            {isUserVote && (
                <Label as='a' color='yellow' ribbon='right'>
                    Your Vote
                </Label>
            )}
            <Header
                className="vote_header"
                size={"medium"}
                color={isUserVote ? "green" : "black"}>
                {`Would you rather ${text}?`}
            </Header>
            <Progress percent={percentage} progress color={"green"} className="vote_progress_bar"/>
            <Header
                className="vote_header"
                color={"black"}
                textAlign={"center"}
                size={"small"}>{`${votes} out of ${total} votes`}
            </Header>
        </Segment>
    );
}

export default UserVoteComponent;
