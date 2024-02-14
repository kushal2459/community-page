import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import CommunityPage from './Components/CommunityPage';
import Nav from './Components/Nav';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FAQ from './Components/FAQ';
import NewIssue from './Components/NewIssue';
import { Box, Typography, Container } from '@mui/material';
import { NavLink } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Nav />
    <Container>
      <Box className="flex justify-between items-center px-10 py-5">
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Issues
        </Typography>
        <Box className="flex gap-5 items-center">
          <NavLink to="/" className="py-2 px-4 rounded">
            All Issues
          </NavLink>
          <NavLink to="/faq" className="py-2 px-4 rounded">
            FAQ
          </NavLink>
          <NavLink to="/new-issue" className="py-2 px-4 rounded">
            New Issue
          </NavLink>
        </Box>
      </Box>
    </Container>
    <hr className="mb-5 borger-gray-600 border-t-2" />

    <Routes>
      <Route path="/" element={<CommunityPage />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/new-issue" element={<NewIssue />} />
    </Routes>
  </Router>
);
reportWebVitals();
