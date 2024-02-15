import React from 'react'
import IssueCard from './IssueCard'
import Container from '@mui/material/Container'
import { useEffect, useState } from 'react';
import { getIssue } from '../service/api';

const CommunityPage = () => {

  const [ issues, setIssues ] = useState([]);

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
        <div className='flex flex-col gap-16'>

        {issues.map(issue => (
          <IssueCard key={issue.id} description={issue.description} title={issue.title}/>
        ))}
        </div>
      </Container>
    </>
  )
}

export default CommunityPage
