import React from 'react';
import {Icon, Image, Menu} from "semantic-ui-react";
import logo from "../../assets/logo.svg";
import {NavLink} from "react-router-dom";
import PropTypes from "prop-types";

function WideNavbarComponent(props) {

    const {isLoading, authenticatedUser, signOut} = props;

    return (
        <Menu size='large' secondary className="application-navbar">
            <Menu.Item>
                <Image src={logo}
                       size='mini'
                       alt="would you rather application logo"
                       className={isLoading ? "spin" : ""}
                />
            </Menu.Item>
            {!authenticatedUser && (
                <React.Fragment>
                    <Menu.Item header>Would you rather...</Menu.Item>
                    <Menu.Item
                        as={NavLink}
                        to="/"
                        exact
                        activeClassName='active'
                        name='home'
                    />
                </React.Fragment>
            )}
            {authenticatedUser && (
                <React.Fragment>
                    <Menu.Item header>
                        <Image src={authenticatedUser.avatarURL}
                               size='mini'
                               spaced={"right"}
                               avatar
                               alt={`avatar of ${authenticatedUser.name}`}
                        />
                        {`Hello, ${authenticatedUser.name}`}
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
                        to="/add"
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
                </React.Fragment>
            )}
            <Menu.Menu position='right'>
                {authenticatedUser && (
                    <Menu.Item
                        onClick={() => {
                            signOut()
                        }}
                        name='sign-out'>
                        <Icon name='sign-out'/>
                        Sign out
                    </Menu.Item>
                )}
                {!authenticatedUser && (
                    <Menu.Item as={NavLink}
                               to="/login"
                               exact
                               activeClassName='active'
                               name="sign-in"
                               icon='sign-in'
                               text='Sign In'/>
                )}
            </Menu.Menu>
        </Menu>
    );
}

export default WideNavbarComponent;

WideNavbarComponent.propTypes = {
    isLoading: PropTypes.number,
    authenticatedUser: PropTypes.object,
    signOut: PropTypes.func.isRequired
};
