import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import CommunityPage from './Components/CommunityPage';
import Nav from './Components/Nav';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Nav />
    <CommunityPage />
  </React.StrictMode>
);
reportWebVitals();
