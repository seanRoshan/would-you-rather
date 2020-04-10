import React from 'react';
import {Button, Image, Menu, MenuHeader} from "semantic-ui-react";
import logo from "../../assets/logo.svg";
import {NavLink} from "react-router-dom";

function WideNavbarComponent(props) {

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
                <Menu.Item>
                    <Button secondary>Login</Button>
                </Menu.Item>
            </Menu.Menu>
        </Menu>
    );
}

export default WideNavbarComponent;
