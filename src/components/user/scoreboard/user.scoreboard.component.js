import React from 'react';

import PropTypes from 'prop-types';
import {Card, CardContent, Grid, Header, Image, Label, Segment} from "semantic-ui-react";

function UserScoreboardComponent(props) {

    const {scoreBoardCard} = props;

    const {name, avatar, answered, asked, score, medalColor} = scoreBoardCard;

    return (
        <Segment color={medalColor} raised>
            <Label as='a' color={medalColor} ribbon icon='trophy'/>
            <Grid columns={3} verticalAlign={"middle"}>
                <Grid.Row>
                    <Grid.Column>
                        <Image src={avatar} alt={`Avatar of ${name}`} circular/>
                    </Grid.Column>
                    <Grid.Column>
                        <Header textAlign="left" size="large">{name}</Header>
                        <Grid verticalAlign={"middle"}>
                            <Grid.Row>
                                <Grid.Column width={12} textAlign="left">
                                    <Header textAlign="left" size="medium">Answered questions</Header>
                                </Grid.Column>
                                <Grid.Column width={1} textAlign="right">
                                    <Header textAlign="right" size="medium">{answered}</Header>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column width={12} textAlign="left">
                                    <Header textAlign="left" size="medium">Created questions</Header>
                                </Grid.Column>
                                <Grid.Column width={1} textAlign="right">
                                    <Header textAlign="right" size="medium">{asked}</Header>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Grid.Column>
                    <Grid.Column>
                        <Card>
                            <Card.Content textAlign={"center"} header='Score'/>
                            <CardContent textAlign={"center"}>
                                <Label circular color={medalColor} key={medalColor}>
                                    {score}
                                </Label>
                            </CardContent>
                        </Card>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    );
}

export default UserScoreboardComponent;

UserScoreboardComponent.propTypes = {
    scoreBoardCard: PropTypes.object.isRequired
};
