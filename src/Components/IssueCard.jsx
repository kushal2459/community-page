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
    <Paper className="py-5">
      {/* profile title leave a comment */}
      <Box className="flex flex-wrap items-center justify-between md:px-14 px-6">
        {/* profile */}
        <div className="flex items-center ">
          <Box className="h-[50px] w-[50px]">
            <img
              src={user1}
              alt="user"
              className="object-cover	w-full h-full rounded-full overflow-hidden"
            />
          </Box>
          {/* title */}
          <h6 className="mx-5 text-2xl font-semibold">{props.title}</h6>
        </div>
        {/* leave a comment */}
        <Box
          className={` items-center sm:gap-1 justify-between ml-auto w-52 pe-2 rounded sm:flex hidden`}
        >
          <Switch checked={checked} onChange={handleChange} />
          <p>{checked ? "Resolved" : "Leave a comment"}</p>
        </Box>
      </Box>
      {/* description  */}
      <Box className="sm:ms-32 sm:me-16 flex flex-col lg:flex-row items-center justify-between">
        <div className="max-w-[680px] lg:px-10 px-14 py-5 mr-auto">
          <Typography
            className="overflow-hidden m-auto break-all"
            variant="subtex1"
          >
            {props.description}
          </Typography>
        </div>
        <div className="flex flex-col sm:gap-0 gap-0 items-center justify-between overflow-x-auto px-5">
          {/* Leave a comment  */}
          <div className="sm:hidden my-3">
            <Box
              className={`flex items-center justify-between ml-auto w-[200px] rounded `}
            >
              <Switch checked={checked} onChange={handleChange} />
              <p>{checked ? "Resolved" : "Leave a comment"}</p>
            </Box>
          </div>
          <button className="border-[1px] text-wrap text-center p-2 sm:my-5 my-3 sm:mx-auto w-[100px] rounded">
            10 Replies
          </button>
        </div>
      </Box>
    </Paper>
  );
}

export default IssueCard