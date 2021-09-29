import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalProvider } from './Context';
import { Auth0Provider } from '@auth0/auth0-react';

// dev-fjq3od11.us.auth0.com
// RtRMi5ffXltuCWNEJ9XiDcLROkNVKPgE

ReactDOM.render(
    // <React.StrictMode>
    <Auth0Provider
        domain='dev-fjq3od11.us.auth0.com'
        clientId='RtRMi5ffXltuCWNEJ9XiDcLROkNVKPgE'
        redirectUri={window.location.origin}
        cacheLocation='localstorage'>
        <GlobalProvider>
            <Router>
                <App />
            </Router>
        </GlobalProvider>
    </Auth0Provider>,
    // </React.StrictMode>,
    document.getElementById('root')
);
