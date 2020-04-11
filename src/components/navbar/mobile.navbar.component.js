import React from 'react';
import {Button, Dropdown, Image, Menu} from "semantic-ui-react";
import logo from "../../assets/logo.svg";
import {NavLink} from "react-router-dom";
import PropTypes from 'prop-types';

function MobileNavbarComponent(props) {

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
            {!authenticatedUser && (<Menu.Item header>Would you rather?</Menu.Item>)}
            {authenticatedUser && (<Menu.Item header>
                <Image src={authenticatedUser.avatarURL}
                       size='mini'
                       spaced={"right"}
                       avatar
                       alt={`avatar of ${authenticatedUser.name}`}
                />
                {`Hello, ${authenticatedUser.name}`}
            </Menu.Item>)}
            <Menu.Menu position='right'>
                <Dropdown
                    icon='bars'
                    as={Button}
                    secondary
                    size="large"
                    className='icon'
                >
                    <Dropdown.Menu>
                        {authenticatedUser && (
                            <React.Fragment>
                                <Dropdown.Item as={NavLink}
                                               to="/"
                                               exact
                                               activeClassName='active'
                                               name='home'>
                                    Home</Dropdown.Item>
                                <Dropdown.Item as={NavLink}
                                               to="/new"
                                               exact
                                               activeClassName='active'
                                               name='New Question'>
                                    New Question</Dropdown.Item>
                                <Dropdown.Item as={NavLink}
                                               to="/leaderboard"
                                               exact
                                               activeClassName='active'
                                               name='Leader Board'>
                                    Leader Board</Dropdown.Item>
                                <Dropdown.Divider/>
                                <Dropdown.Item onClick={() => {
                                                   signOut()
                                               }}
                                               icon='sign-out'
                                               text='Sign Out'/>
                            </React.Fragment>
                        )}
                        {!authenticatedUser && (
                            <Dropdown.Item as={NavLink}
                                           to="/login"
                                           exact
                                           activeClassName='active'
                                           name="sign-in"
                                           icon='sign-in'
                                           text='Sign In'/>
                        )}
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Menu>
        </Menu>
    );
}

export default MobileNavbarComponent;

MobileNavbarComponent.propTypes = {
    isLoading: PropTypes.number,
    authenticatedUser: PropTypes.object,
    signOut: PropTypes.func.isRequired
};
