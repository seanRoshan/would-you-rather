import React, {Component} from 'react';
import './styles/Application.scss';
import NavbarComponent from "./components/navbar/navbar.component";
import {Segment} from "semantic-ui-react";
import FooterComponent from "./components/footer/footer.component";
import {HashRouter} from "react-router-dom";
import DashboardComponent from "./views/dashboard/dashboard.component";
import {connect} from "react-redux";
import {getInitialData} from "./actions/shared.actions";

/**
 * @return {boolean}
 */
class App extends Component {

    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(getInitialData())
    }

    render() {
        return (
            <HashRouter basename="/">
                <div className="header">
                    <NavbarComponent/>
                </div>
                <Segment basic className="app-content-container">
                    <DashboardComponent/>
                </Segment>
                <div className="app-footer-container"><FooterComponent/></div>
            </HashRouter>
        );
    }

}


export default connect()(App);
