import React from 'react';
import { Container, Box, Typography, Accordion, AccordionSummary, AccordionDetails, styled } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Questions = styled(Box)`
  & > div{
    margin : '200px',
    backgroundColor : 'red',
  }
`

const FAQ = () => {
  // Sample data - randomly generated question and answer pairs
  const faqData = [
    { id: '1', question: 'What is Lorem Ipsum?', answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
    { id: '2', question: 'Why do we use it?', answer: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.' },
    { id: '3', question: 'Where does it come from?', answer: 'Contrary to popular belief, Lorem Ipsum is not simply random text.' },
    { id: '4', question: 'Where can I get some?', answer: 'There are many variations of passages of Lorem Ipsum available.' },
    { id: '5', question: 'What is Lorem Ipsum?', answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
    { id: '6', question: 'Why do we use it?', answer: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.' },
    { id: '7', question: 'Where does it come from?', answer: 'Contrary to popular belief, Lorem Ipsum is not simply random text.' },
    { id: '8', question: 'Where can I get some?', answer: 'There are many variations of passages of Lorem Ipsum available.' },
  ];

  return (
    <Container maxWidth="md">
    <Questions mt={5} mb={5}>
      <Typography variant="h4" align="center" gutterBottom>
        Frequently Asked Questions
      </Typography>
      {faqData.map((item) => (
        <Accordion key={item.id}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{marginY:'20px'}}>
            <Typography variant="h6">{item.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{item.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Questions>
  </Container>
  );
};

export default FAQ

