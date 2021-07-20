import React from 'react';
import ReactDOM from 'react-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import './Styles/index.css'
import App from './Router/App'


ReactDOM.render(
<Auth0Provider domain="dev-bafp4zxd.eu.auth0.com" clientId="szddW3oocVOaVTliPY5NmkITg4d6t9bm" 
redirectUri={window.location.origin}>
<App />
</Auth0Provider>
,document.getElementById('root')
);

