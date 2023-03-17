import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { sendToVercelAnalytics } from './vitals';
import Layout from './components/layout';
import './styles/globals.scss';

ReactDOM.render(
  <Layout />,
  document.getElementById('root')
);

reportWebVitals(sendToVercelAnalytics);
