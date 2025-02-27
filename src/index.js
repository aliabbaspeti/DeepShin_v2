import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
// import ReactGA from 'react-ga4';

// Initialize GA4 with your Measurement ID(
// ReactGA.initialize('G-XXXXXXXXXX'); 
// );
// ReactGA.send('pageview'); // Send pageview when the app loads

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <App />
);