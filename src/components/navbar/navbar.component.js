import React, {Component} from 'react';
import {connect} from "react-redux";
import {Responsive} from "semantic-ui-react";
import LoadingBar from "react-redux-loading-bar";
import WideNavbarComponent from "./wide.navbar.component";
import MobileNavbarComponent from "./mobile.navbar.component";
import {handleSignOut} from "../../actions/shared.actions";

class NavbarComponent extends Component {

    signOut() {
        const {dispatch} = this.props;
        dispatch(handleSignOut());
    }


    render() {
        const {isLoading, authenticatedUser} = this.props;

        return (
            <React.Fragment>
                <LoadingBar style={{backgroundColor: 'rgb(97,218,251)'}}/>
                <Responsive minWidth={768}>
                    <WideNavbarComponent authenticatedUser={authenticatedUser}
                                         isLoading={isLoading}
                                         signOut={this.signOut.bind(this)}/>
                </Responsive>
                <Responsive maxWidth={767}>
                    <MobileNavbarComponent authenticatedUser={authenticatedUser}
                                           isLoading={isLoading}
                                           signOut={this.signOut.bind(this)}/>
                </Responsive>
            </React.Fragment>
        )
    }
}

function mapStateToProps({authenticatedUser, users, loadingBar}) {
    return {
        authenticatedUser: users ? users[authenticatedUser] : null,
        isLoading: loadingBar.default
    }
}

export default connect(mapStateToProps)(NavbarComponent);
