import React from 'react'
import IssueCard from './IssueCard'
import Container from '@mui/material/Container'

const CommunityPage = () => {
  return (
    <>

      <Container>
        <div className='flex flex-col gap-16'>
        <IssueCard />
        <IssueCard />
        <IssueCard />
        <IssueCard />
        </div>
      </Container>
    </>
  )
}

export default CommunityPage
