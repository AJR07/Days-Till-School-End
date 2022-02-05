import * as React from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

interface Props{
	value: number;
}

export default function LinearProgressWithLabel(props: Props) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress color={"success"} variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="greenyellow">{`${Math.round(
          props.value * 10000
        )/10000}%`}</Typography>
      </Box>
    </Box>
  );
}
