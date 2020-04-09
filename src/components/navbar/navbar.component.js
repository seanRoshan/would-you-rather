import React, {Component} from 'react';
import {connect} from "react-redux";
import {Header, Menu} from "semantic-ui-react";

import logo from "../../assets/logo.svg";
import {NavLink} from "react-router-dom";
import LoadingBar from "react-redux-loading-bar";

class NavbarComponent extends Component {

    render() {
        const {isLoading, authenticatedUser} = this.props;

        console.log({isLoading, authenticatedUser});

        return (
            <React.Fragment>
                <LoadingBar style={{backgroundColor: 'rgb(97,218,251)'}}/>
                <Menu pointing secondary>
                    <Menu.Item>
                        <img src={logo}
                             alt="would you rather application logo"
                             className={isLoading ? "spin" : ""}
                        />
                    </Menu.Item>
                    <Menu.Item>
                        <Header>Would You Rather</Header>
                    </Menu.Item>
                    <Menu.Item
                        as={NavLink}
                        to="/"
                        exact
                        activeClassName='active'
                        name='home'
                    />
                    <Menu.Item
                        as={NavLink}
                        to="/new"
                        exact
                        activeClassName='active'
                        name='New Question'
                    />
                    <Menu.Item
                        as={NavLink}
                        to="/leaderboard"
                        exact
                        activeClassName='active'
                        name='Leader Board'
                    />
                    <Menu.Menu position='right'>
                        <Menu.Item
                            as={NavLink}
                            to="/login"
                            exact
                            activeClassName='active'
                            name='Login'
                        />
                    </Menu.Menu>
                </Menu>
            </React.Fragment>
        )
    }
}

function mapStateToProps({authenticatedUser, loadingBar}) {
    return {
        authenticatedUser,
        isLoading: loadingBar.default
    }
}

export default connect(mapStateToProps)(NavbarComponent);
