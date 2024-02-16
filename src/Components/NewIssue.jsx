import React, { useState } from 'react';
import { TextField, Box, Container, Button } from '@mui/material';
import { addIssue } from '../service/api'; 
import { useNavigate } from "react-router-dom";
// 
import axios from 'axios';

// 
const initialValue = {
  title: '',
  description: '',
};

const NewIssue = () => {
  const [issue, setIssue] = useState(initialValue);
  // 
  const [file, setFile] = useState(null);
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append('file', file);
      await axios.post('http://localhost:3000/files', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      alert('File uploaded successfully');
    } catch (error) {
      console.error('Error uploading file:', error);
      alert('Error uploading file');
    }
  };
  // 
  const navigation = useNavigate();

  const onValueChange = (e) => {
    setIssue({ ...issue, [e.target.name]: e.target.value });
  };

  const addIssueDetails = async () => {
    if (!issue.description) {
      // Display an alert if the description field is empty
      alert('Please enter a description');
      return;
    }
    
    // If the description is not empty, proceed with adding the issue
    await addIssue(issue);
    setIssue(initialValue); // Reset the issue state to clear the form fields
    navigation('/');
  };

  const closeNewIssue = () => {
    navigation('/');
  }

  return (
    <Container maxWidth="sm">
      <Box
        component="form"
        sx={{
          display:'flex',
          flexDirection:'column',
          margin:'auto',
          // alignItems:'center',
          backgroundColor: '#f0f0f0',
          padding: '50px',
          borderRadius: '8px',
          boxShadow: '0 5px 10px rgba(0, 0, 0, 0.1)',
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="Title"
          variant="outlined"
          fullWidth
          sx={{ marginBottom: '20px' }}
          onChange={(e) => onValueChange(e)}
          value={issue.title} // Set value to the corresponding state value
          name='title'
        />
        <TextField
          id="outlined-basic"
          label="Description"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          sx={{ marginBottom: '20px' }}
          onChange={(e) => onValueChange(e)}
          value={issue.description} // Set value to the corresponding state value
          name='description'
        />
        <Box sx={{display:'flex', flexDirection:'column', gap:'15px', alignItems:'center', justifyContent:'space-around', paddingX:'50px'}}>
        <input type="file" onChange={handleFileChange} />
        <Button variant='contained' type="submit" color="primary" sx={{width:'100%'}}>Attach File</Button> 
        <Button variant='contained' color="primary" onClick={addIssueDetails} sx={{width:'100%'}}>Submit</Button>
        <Button variant='contained' color='error' onClick={closeNewIssue} sx={{width:'100%'}}>Close</Button>
        </Box>
      </ Box >
    </Container>
  );
};

export default NewIssue;