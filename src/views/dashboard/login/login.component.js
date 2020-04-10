import React, {Component} from 'react';
import {connect} from "react-redux";
import {handleReceiveUsers} from "../../../actions/users.actions";
import {Card, CardHeader, Dropdown, Header, Image, Responsive} from "semantic-ui-react";
import {handleSetAuthenticatedUser} from "../../../actions/authenticatedUser.action";

class LoginComponent extends Component {

    static initializeUserOptions(users) {
        if (!users) return [];
        return Object.keys(users).map((key) => {
            const user = users[key];
            return {
                key,
                text: user.name,
                value: user.id,
                image: {avatar: true, src: user.avatarURL}
            }
        });
    }

    componentDidMount() {
        const {dispatch, users} = this.props;
        dispatch(handleReceiveUsers(users));
    }

    signIn(userId) {
        const {dispatch} = this.props;
        dispatch(handleSetAuthenticatedUser(userId));
    }

    render() {

        const header = "Welcome to the Would You Rather App!";
        const subHeader = "Please sign in to continue";

        const {users} = this.props;

        let userOptions = LoginComponent.initializeUserOptions(users);

        return (
            <Card fluid color='grey'>
                <CardHeader textAlign="center" style={{backgroundColor: "rgba(220,220,220,0.5)", padding: "10px"}}>
                    <Responsive minWidth="401" as={Header} size="medium">{header}</Responsive>
                    <Responsive maxWidth="400" as={Header} size="small">{header}</Responsive>
                    <Header size="tiny">{subHeader}</Header>
                </CardHeader>
                <Card.Content textAlign={"center"}>
                    <Image
                        src="https://s3-us-west-2.amazonaws.com/asset.plexuss.com/news/images/would-you-rather-school-edition-lg.jpg"
                        size='large'
                        alt="would you rather login image"
                    />
                    <Header size="huge" color="black">Sign in</Header>
                    <Dropdown
                        text='Select User'
                        icon='user'
                        floating
                        labeled
                        button
                        className='icon'
                    >
                        <Dropdown.Menu>
                            <Dropdown.Header content='Please select a user to sign in'/>
                            {userOptions && userOptions.length && userOptions.map((option) => (
                                <Dropdown.Item key={option.value} onClick={() => this.signIn(option.key)} {...option} />
                            ))}
                        </Dropdown.Menu>
                    </Dropdown>
                </Card.Content>
            </Card>
        );
    }

}


function mapStateToProps({users}) {
    return {
        users
    }
}

export default connect(mapStateToProps)(LoginComponent);
