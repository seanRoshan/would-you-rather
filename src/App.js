import React, {Component} from 'react';
import './styles/Application.scss';
import NavbarComponent from "./components/navbar/navbar.component";
import {Segment} from "semantic-ui-react";
import FooterComponent from "./components/footer/footer.component";
import {HashRouter} from "react-router-dom";
import DashboardComponent from "./views/dashboard/dashboard.component";

/**
 * @return {boolean}
 */
class App extends Component {

    render() {
        return (
            <HashRouter basename="/">
                <div className="header">
                    <NavbarComponent/>
                </div>
                <Segment className="app-content-container">
                    <DashboardComponent/>
                </Segment>
                <div className="app-footer-container"><FooterComponent/></div>
            </HashRouter>
        );
    }

}

export default App;
