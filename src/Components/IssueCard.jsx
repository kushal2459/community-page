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
        <Box className='flex flex-wrap items-center justify-between px-14'>
            <div className='flex items-center '>
                <Box className='h-[50px] w-[50px]'>
                    <img src={user1} alt="user" className='object-cover	w-full h-full rounded-full overflow-hidden'/>   
                </Box>

                <Typography variant='h6' sx={{margin:'0 25px'}}>{props.title}</Typography>
            </div>
            <Box className={`  flex items-center gap-1 justify-between w-52 pe-2 rounded `}>
            <Switch checked={checked} onChange={handleChange} />
            <p>{checked ? 'Resolved' : 'Leave a comment'}</p>
            </Box>
        </Box>
        <Box className='ms-32 me-16 flex justify-between'>
            <div className='max-w-[780px]'>
            
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