import React, {Component} from 'react';
import {Route} from "react-router-dom";
import ComposeComponent from "./compose/compose.component";
import LeaderboardComponent from "./leaderboard/leaderboard.component";
import LoginComponent from "./login/login.component";
import HomeComponent from "./home/home.component";

class DashboardComponent extends Component {
    render() {
        return (
            <React.Fragment>
                <Route path="/" exact component={HomeComponent}/>
                <Route path="/new" component={ComposeComponent}/>
                <Route path="/leaderboard" component={LeaderboardComponent}/>
                <Route path="/login" component={LoginComponent}/>
            </React.Fragment>
        );
    }
}

export default DashboardComponent;
