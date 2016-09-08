import React from "react"
import ReactDOM from 'react-dom';
import Routes from './routes';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

let element = document.getElementById('root');
if (element)
    ReactDOM.render(<MuiThemeProvider><Routes /></MuiThemeProvider>, element);
else {
    throw `Element "#root" is not found! Check file "/index.html".`;
}