import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  
    <Auth0Provider
    domain="dev-bhyxx1omm76xi7t5.us.auth0.com"
    clientId="PFqOseTmSHPyyinT3D0cgaLN5dEsJQCP"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <React.StrictMode>
    <App />
  </React.StrictMode>
  </Auth0Provider>,
  document.getElementById('root')
);
