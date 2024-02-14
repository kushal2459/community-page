import React from 'react';
import { useState } from 'react';
import { TextField, Box, Container, Button} from '@mui/material';
import { addIssue } from '../service/api'; 
const initialValue = {
  title : '',
  description : '',
}

const NewIssue = () => {

  const [ issue, setIssue] = useState(initialValue);

  const onValueChange = (e) => {
    setIssue({...issue, [e.target.name] : e.target.value});
    console.log(issue);
  }

  const addIssueDetails = async () => {
    await addIssue(issue);
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
        name='description'
      />
      <Button variant='contained' color="primary" sx={{ marginRight: '10px' }}>Attach File</Button>
      <Button variant='contained' color="primary" sx={{ marginRight: '10px' }} onClick={addIssueDetails()}>Submit</Button>
      <Button variant='contained' color='error'>Close</Button>
    </Box>
  </Container>
  )
}

export default NewIssue