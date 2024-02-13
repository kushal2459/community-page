import React from 'react'
import IssueCard from './IssueCard'
import Container from '@mui/material/Container'
// import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography'


const CommunityPage = () => {
  return (
    <>

      <Container>
        <Box  className='flex justify-between items-center px-10 py-5'>
        <Typography variant='h6' sx={{fontWeight:'bold'}}>Issues</Typography>
        <Box className='flex gap-5 items-center'>
        <button className='bg-blue-600 text-white py-2 px-4 rounded'>My Issues</button>
        <button className='bg-blue-600 text-white py-2 px-4 rounded'>New Issue</button>
        </Box>
        
        </Box>

        <hr className='mb-5 borger-gray-600 border-t-2'/>

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