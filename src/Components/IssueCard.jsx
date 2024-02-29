import { useState } from 'react';
import { Paper, Box, Switch, Typography } from '@mui/material';
import user1 from '../img/bg1.png';
import '../index.css';

const IssueCard = (props) => {

    const [checked, setChecked] = useState(false);

    const handleChange = () => {
        setChecked(!checked);
       
    };  

  return (
    <Paper className='py-5'>
        {/* profile title leave a comment */}
        <Box className='flex flex-wrap items-center justify-between md:px-14 px-6'>
            {/* profile */}
            <div className='flex items-center '>
                <Box className='h-[50px] w-[50px]'>
                    <img src={user1} alt="user" className='object-cover	w-full h-full rounded-full overflow-hidden'/>   
                </Box>
                {/* title */}
                <h6 className='mx-5 text-2xl font-semibold'>{props.title}</h6>
            </div>
            {/* leave a comment */}
            <Box className={` items-center sm:gap-1 justify-between ml-auto w-52 pe-2 rounded sm:flex hidden`}>
            <Switch checked={checked} onChange={handleChange} />
            <p>{checked ? 'Resolved' : 'Leave a comment'}</p>
            </Box>
        </Box>
        <Box className='lg:ms-32 lg:me-16 flex flex-col md:flex-row items-center justify-center md:justify-between '>
            <div className='max-w-[780px] bg-red-200 md:p-0 p-5 mr-auto'>
            
            <Typography className='overflow-hidden' variant='subtex1' sx={{marginY : '8px', marginX:'8px'}}>{props.description}</Typography>
            
            </div>
            <div>

            <button className='border-[1px] px-4 py-2 my-5'>10 Replies</button>
            </div>
        </Box>
    </Paper>
  )
}

export default IssueCard