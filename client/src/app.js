import React from 'react';
import ReactDom from 'react-dom';

import { BrowserRouter as Router } from 'react-router-dom'
import routes from './routes.js';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from "react-tap-event-plugin";

injectTapEventPlugin();

import HomePage from './components/HomePage'

const App = () => (
    <MuiThemeProvider muiTheme={getMuiTheme()}>
        <Router routes={routes} />
    </MuiThemeProvider>
);
ReactDom.render(<App />, document.getElementById('react-app'));
