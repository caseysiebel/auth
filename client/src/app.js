import React from 'react';
import ReactDom from 'react-dom';

import { 
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

import routes from './routes.js';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from "react-tap-event-plugin";

injectTapEventPlugin();

import HomePage from './components/HomePage'
import LoginPage from './containers/LoginPage'
import SignUpPage from './containers/SignUpPage'

const App = () => (
    <MuiThemeProvider muiTheme={getMuiTheme()}>
        <Router>
            <div>
                <div className="top-bar">
                    <div className="top-bar-left">
                        <Link to="/">React App</Link>
                    </div>

                    <div className="top-bar-right">
                        <Link to="/login">Log in</Link>
                        <Link to="/signup">Sign up</Link>
                    </div>

                </div>
                <Route 
                    path='/'
                    component={ HomePage }
                />
                <Route
                    path='/login'
                    component={ LoginPage }
                />
                <Route 
                    path='/signup'
                    component={ SignUpPage }
                />
            </div>
        </Router>
    </MuiThemeProvider>
);
ReactDom.render(<App />, document.getElementById('react-app'));
