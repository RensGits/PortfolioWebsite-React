import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {HashRouter as Router, } from 'react-router-dom';

import ScrollToTop from './Pages/ScrollToTop';



ReactDOM.render(
  <React.StrictMode>
    <Router>
    <ScrollToTop />
    <App />
    </Router>
    
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
