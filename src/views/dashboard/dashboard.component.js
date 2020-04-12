import React, {Component} from 'react';
import {Redirect, Route} from "react-router-dom";
import ComposeComponent from "./compose/compose.component";
import LeaderboardComponent from "./leaderboard/leaderboard.component";
import LoginComponent from "./login/login.component";
import {connect} from "react-redux";
import HomeComponent from "./home/home.component";
import DetailComponent from "./detail/detail.component";

class DashboardComponent extends Component {

    render() {

        const {authenticatedUser} = this.props;

        return (
            <React.Fragment>
                <Route path="/" exact render={() => {
                    return authenticatedUser
                        ? <HomeComponent/>
                        : <Redirect to="/login"/>;
                }}/>
                <Route path="/add" render={() => {
                    return authenticatedUser
                        ? <ComposeComponent/>
                        : <Redirect to="/login"/>;
                }}/>
                <Route path="/leaderboard" render={() => {
                    return authenticatedUser
                        ? <LeaderboardComponent/>
                        : <Redirect to="/login"/>;
                }}/>
                <Route path="/questions/:id" render={({match}) => {
                    return authenticatedUser
                        ? <DetailComponent match={match}/>
                        : <Redirect to="/login"/>;
                }}/>
                <Route path="/login" render={() => {
                    return authenticatedUser
                        ? <Redirect to="/"/>
                        : <LoginComponent/>;
                }}/>
            </React.Fragment>
        );
    }
}


function mapStateToProps({authenticatedUser}) {
    return {
        authenticatedUser
    }
}

export default connect(mapStateToProps)(DashboardComponent);
