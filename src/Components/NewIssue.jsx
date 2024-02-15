// import React from 'react';
// import { useState } from 'react';
// import { TextField, Box, Container, Button} from '@mui/material';
// import { addIssue } from '../service/api'; 
// import { useNavigate } from "react-router-dom";

// const initialValue = {
//   title : '',
//   description : '',
// }

// const NewIssue = () => {

//   const [ issue, setIssue] = useState(initialValue);
//   const navigation = useNavigate;

//   const onValueChange = (e) => {
//     setIssue({...issue, [e.target.name] : e.target.value});
//   }

//   const addIssueDetails = async () => {
//     await addIssue(issue);
//     setIssue(initialValue);
//     navigation('/all');
//   }

//   return (
    
//     <Container maxWidth="sm">
//     <Box
//       component="form"
//       sx={{
//         backgroundColor: '#f0f0f0',
//         padding: '30px',
//         borderRadius: '8px',
//         boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//       }}
//       noValidate
//       autoComplete="off"
//     >
//       <TextField
//         id="outlined-basic"
//         label="Title"
//         variant="outlined"
//         fullWidth
//         sx={{ marginBottom: '20px' }}
//         onChange={(e) => onValueChange(e)}
//         value={issue.title}
//         name='title'
//       />
//       <TextField
//         id="outlined-basic"
//         label="Description"
//         variant="outlined"
//         fullWidth
//         multiline
//         rows={4}
//         sx={{ marginBottom: '20px' }}
//         onChange={(e) => onValueChange(e)}
//         value = {issue.description}
//         name='description'
//       />

//       <Button variant='contained' color="primary" sx={{ marginRight: '10px' }}>Attach File</Button>
//       <Button variant='contained' color="primary" sx={{ marginRight: '10px' }} onClick={addIssueDetails}>Submit</Button>

//       <Button variant='contained' color='error'>Close</Button>
//     </Box>
//   </Container>
//   )
// }

// export default NewIssue


import React, { useState } from 'react';
import { TextField, Box, Container, Button } from '@mui/material';
import { addIssue } from '../service/api'; 
import { useNavigate } from "react-router-dom";

const initialValue = {
  title: '',
  description: '',
};

const NewIssue = () => {
  const [issue, setIssue] = useState(initialValue);
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

  }

  return (
    <Container maxWidth="sm">
      <Box
        component="form"
        sx={{
          backgroundColor: '#f0f0f0',
          padding: '30px',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
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

        <Button variant='contained' color="primary" sx={{ marginRight: '10px' }}>Attach File</Button>
        <Button variant='contained' color="primary" sx={{ marginRight: '10px' }} onClick={addIssueDetails}>Submit</Button>
        <Button variant='contained' color='error' onClick={closeNewIssue}>Close</Button>
      </Box>
    </Container>
  );
};

export default NewIssue;