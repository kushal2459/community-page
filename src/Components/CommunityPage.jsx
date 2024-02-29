import React from 'react'
import IssueCard from './IssueCard'
import Container from '@mui/material/Container'
import { useEffect, useState } from 'react';
import { getIssue } from '../service/api';
import axios from 'axios';

const CommunityPage = () => {

  const [ issues, setIssues ] = useState([]);
const [files, setFiles] = useState([]);
useEffect(() => {
  const fetchFiles = async () => {
    try {
      const response = await axios.get('http://localhost:3000/files');
      setFiles(response.data);
    } catch (error) {
      console.error('Error fetching files:', error);
    }
  };
  fetchFiles();
}, []);

  useEffect(() => {
    getIssueDetails();
  }, []);

  const getIssueDetails = async () => {
    let response = await getIssue();
    setIssues(response.data);
  };

  return (
    <>
      <Container>
        <div className='flex flex-col md:gap-16 gap-8'>

        {issues.map(issue => (
          <IssueCard key={issue.id} description={issue.description} title={issue.title}/>
        ))}
        {files.map((file, index) => (
          <li key={index}>{file.name}</li>
        ))}
        </div>
      </Container>
    </>
  )
}

export default CommunityPage
