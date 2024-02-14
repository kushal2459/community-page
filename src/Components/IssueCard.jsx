import React from 'react';
import Paper from '@mui/material/Paper';
import user1 from '../img/bg1.png';
// import user2 from '../img/bg2.png';
import Box from '@mui/material/Box';
import '../index.css';
import Switch from '@mui/material/Switch';
import { useState } from 'react';
// import {styled} from '@mui/material';

// const Resolved = styled(Box)`
//         background : green;
//     ` 

const IssueCard = () => {

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

                <h4 className='ms-5'>Kushal Patel</h4>
            </div>
            <Box className={`  flex items-center gap-1 justify-between w-52 pe-2 rounded `}>
            <Switch checked={checked} onChange={handleChange} />
            <p>{checked ? 'Resolved' : 'Leave a comment'}</p>
            </Box>
        </Box>
        <Box className='ms-32 me-16 flex justify-between'>
            <div className='max-w-[780px]'>

            <p className='overflow-hidden'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti, odio deserunt possimus nihil at ipsum aspernatur soluta eveniet repellendus nisi inventore natus, adipisci voluptate beatae cupiditate commodi suscipit id aperiam?</p>
            
            </div>
            <div>

            <button className='border-[1px] px-4 py-2 my-5'>10 Replies</button>
            </div>
        </Box>
    </Paper>
  )
}

export default IssueCard