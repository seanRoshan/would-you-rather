import React, {Component} from 'react';
import {connect} from "react-redux";
import {Button, Image, Menu, Responsive} from "semantic-ui-react";

import logo from "../../assets/logo.svg";
import {NavLink} from "react-router-dom";
import LoadingBar from "react-redux-loading-bar";
import WideNavbarComponent from "./wide.navbar.component";
import MobileNavbarComponent from "./mobile.navbar.component";

class NavbarComponent extends Component {

    render() {
        const {isLoading, authenticatedUser} = this.props;

        console.log({isLoading, authenticatedUser});

        return (
            <React.Fragment>
                <LoadingBar style={{backgroundColor: 'rgb(97,218,251)'}}/>
                <Responsive minWidth={768}>
                    <WideNavbarComponent isLoading={isLoading}/>
                </Responsive>
                <Responsive maxWidth={767}>
                    <MobileNavbarComponent isLoading={isLoading}/>
                </Responsive>
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
