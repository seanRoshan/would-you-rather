import React from 'react';

import PropTypes from 'prop-types';
import {Grid, Header, Icon, Segment} from "semantic-ui-react";

function ErrorComponent(props) {
    const {message} = props;
    return (
        <Segment  raised inverted color='red'>
            <Grid columns={2}>
                <Grid.Row>
                    <Grid.Column textAlign={"center"} verticalAlign={"middle"}>
                        <Icon name='warning sign' size='massive'/>
                    </Grid.Column>
                    <Grid.Column textAlign={"left"} verticalAlign={"middle"}>
                        <Header inverted size={"large"}>{message}</Header>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    );
}

export default ErrorComponent;

ErrorComponent.propTypes = {
    message: PropTypes.string.isRequired
};
