import React from 'react';
import ReactDom from 'react-dom';

import { 
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'


import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from "react-tap-event-plugin";

injectTapEventPlugin();

import Header from './components/Header'
import HomePage from './components/HomePage'
import DashboardPage from './containers/DashboardPage'
import LoginPage from './containers/LoginPage'
import SignUpPage from './containers/SignUpPage'
import Auth from './modules/Auth';


const App = () => (
    <MuiThemeProvider muiTheme={getMuiTheme()}>
        <Router>
            <div>
                <Header/>
                <Route 
                    path='/'
                    getComponent={
                        (location, callback) => {
                            console.log('RRRR')
                            if (Auth.isUserAuthenticated()) {
                                callback(null, DashboardPage);
                            } else {
                                callback(null, HomePage);
                            }
                        }
                    }
                />
                <Route
                    path='/login'
                    component={ LoginPage }
                />
                <Route 
                    path='/signup'
                    component={ SignUpPage }
                />
                <Route 
                    path='/logout'
                    onEnter = {
                        (nextState, replace) => {
                            Auth.deauthenticateUser();

                            // change the current URL to /
                            replace('/');
                        }
                    }
                />
            </div>
        </Router>
    </MuiThemeProvider>
);
ReactDom.render(<App />, document.getElementById('react-app'));
