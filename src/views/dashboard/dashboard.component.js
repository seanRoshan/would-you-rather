import React, {Component} from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import ComposeComponent from "./compose/compose.component";
import LeaderboardComponent from "./leaderboard/leaderboard.component";
import LoginComponent from "./login/login.component";
import {connect} from "react-redux";
import HomeComponent from "./home/home.component";
import DetailComponent from "./detail/detail.component";
import NotfoundComponent from "./notfound/notfound.component";

class DashboardComponent extends Component {

    render() {

        const {authenticatedUser} = this.props;

        const PrivateRoute = ({component: Component, ...rest}) => (
            <Route {...rest} render={(props) => {
                return authenticatedUser
                    ? <Component {...props}/>
                    : <Redirect to={{
                        pathname: '/login',
                        state: {from: props.location}
                    }}/>
            }}/>
        );

        return (
            <React.Fragment>
                <Switch>
                    <Route path="/" exact component={HomeComponent}/>
                    <Route path="/login" exact component={LoginComponent}/>
                    <PrivateRoute path="/add" component={ComposeComponent}/>
                    <PrivateRoute path="/leaderboard" component={LeaderboardComponent}/>
                    <PrivateRoute path="/questions/:id" component={DetailComponent}/>
                    <Route path="*" component={NotfoundComponent}/>
                </Switch>
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
