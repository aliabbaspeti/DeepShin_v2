// import React from 'react';
// import { createRoot } from 'react-dom/client';
// import App from './App';
// const container = document.getElementById('root');
// const root = createRoot(container);

// root.render(
//   <App />
// );

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ReactGA from 'react-ga4';

// Initialize GA4
ReactGA.initialize('G-TTE2P6LCE4');

// Optional: Send pageview on initial load
ReactGA.send({ hitType: "pageview", page: window.location.pathname });

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);