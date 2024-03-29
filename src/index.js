import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import MainPage from './pages/MainPage';
import Nav from './Components/Nav';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FAQ from './pages/FAQ';
import NewIssue from './pages/NewIssue';
import { Box, Typography, Container } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { store } from './app/store'
import { Provider } from 'react-redux'
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>

  <Router>
    <Nav />
    <Container>
      <Box className="flex justify-between items-center md:px-10 px-4 py-5 md:gap-2">
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Issues
        </Typography>
        <Box className="flex sm:gap-5 items-center">
          <NavLink to="/new-issue" className="py-2 md:px-4 px-2 rounded">
          New Issue  
          </NavLink>
          <NavLink to="/" className="py-2 md:px-4 px-2 rounded">
          All Issues
          </NavLink>
          <NavLink to="/faq" className="py-2 md:px-4 px-2 rounded">
          FAQs
          </NavLink>
        </Box>
      </Box>
    </Container>
    <hr className="mb-5 borger-gray-600 border-t-2" />

    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/new-issue" element={<NewIssue />} />
    </Routes>
  </Router>
  </Provider>
);
reportWebVitals();
