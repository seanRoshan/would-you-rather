import React from 'react';
import {Button, Dropdown, Icon, Image, Menu} from "semantic-ui-react";
import logo from "../../assets/logo.svg";
import {NavLink} from "react-router-dom";

function MobileNavbarComponent(props) {

    const {isLoading} = props;

    return (
        <Menu size='large' secondary>
            <Menu.Item>
                <Image src={logo}
                       size='mini'
                       alt="would you rather application logo"
                       className={isLoading ? "spin" : ""}
                />
            </Menu.Item>
            <Menu.Item header>Would you rather?</Menu.Item>
            <Menu.Menu position='right'>
                <Dropdown
                    icon='bars'
                    as={Button}
                    secondary
                    size="large"
                    className='icon'
                >
                    <Dropdown.Menu>
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
                        <Dropdown.Item as={NavLink}
                                       to="/login"
                                       exact
                                       activeClassName='active'
                                       name="Login"
                                       icon='sign-in'
                                       text='Login'/>
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Menu>
        </Menu>
    );
}

export default MobileNavbarComponent;
