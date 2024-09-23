import React from 'react';
import { Box, Typography } from '@mui/material';

const FormWithFieldset = ({ title, children }) => {
  return (
    <form>
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: '100%', // Set height to 100% to fill the container
          marginBottom: '20px', // Add margin if needed
          
        }}
      >
        {/* Small box with title */}
        <Box
          sx={{
            position: 'absolute',
            top: '-30px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '200px',
            height: '50px',
            backgroundColor: 'lightblue',
            border: '2px solid blue',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
            padding: 1,
            marginBottom:2,
            borderRadius:2
          }}
        >
          <Typography >{title}</Typography>
        </Box>

        {/* Large box for children */}
        <Box
          sx={{
            width: '100%',
            height: '100%', // Set to 100% to fill the container
            backgroundColor: 'white',
            border: '1px solid #0d6efd',
            padding: 2, // Optional padding for children
            marginTop: '40px', // Ensure the large box is below the small box
            boxSizing: 'border-box', // Include padding and border in width/height
            borderRadius:2
          }}
        >
          {children}
        </Box>
      </Box>
    </form>
  );
};

export default FormWithFieldset;
