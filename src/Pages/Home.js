import { Box, Typography } from '@mui/material';
import React from 'react';

const Home = () => {
   return (
      <Box sx={{
         background: '#EEF2FE',
         paddingBottom: '10px'
      }}>
         <Typography sx={{
            color: ' #fff',
            fontSize: ' 16px',
            textAlign: ' center',
            background: ' #9b1fe9',
            padding: ' 25px 0',
         }}>Notice here</Typography>

         <Box sx={{
            margin: ' auto',
            maxWidth: ' 1340px',
            padding: ' 0 30px',
         }}>

            <Box marginY='48px'>
               <Typography variant='h4' component='h2' color='primary'>
                  Request testnet LINK
               </Typography>

               <Typography sx={{
                  color: ' #6d7380',
                  fontSize: ' 16px',
                  lineHeight: ' 25px',
                  width: ' 680px',
                  mt: '20px'
               }}>Get testnet LINK for an account on one of the supported blockchain testnets so you can create and test your own oracle and Chainlinked smart contract</Typography>

            </Box>



         </Box>
      </Box >
   );
};

export default Home;