import { Box, Button, TextField, Typography } from '@mui/material';
import React from 'react';
import WarningIcon from '@mui/icons-material/Warning';
import { Stack } from '@mui/system';
import { useForm } from 'react-hook-form';
import ReCAPTCHA from "react-google-recaptcha";
import { useState } from 'react';



const Home = () => {

   const { register, handleSubmit, formState: { errors } } = useForm();
   const onSubmit = data => console.log(data);
   const [verified, setVerified] = useState(false);

   const onChange = (value) => {
      // console.log("Captcha value:", value);
      setVerified(!verified)
   }

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

            {/* Form  */}
            <Box sx={{
               background: ' #fff',
               border: ' 1px solid #eee',
               padding: ' 25px 20px',
            }}>

               <Stack direction={{ xs: 'colum', md: 'row' }} spacing={2} alignItems='center' sx={{ background: '#eef2fe', padding: '10px' }}>
                  <WarningIcon color='primary' />
                  <Typography>Your wallet is connected to <strong>Ethereum Kovan</strong>, so you are requesting <strong>Ethereum Kovan</strong> Link/ETH.</Typography>
               </Stack>

               {/* Form Input  */}
               <Box
                  component="form" onSubmit={handleSubmit(onSubmit)} width={{ xs: '100%', md: '75%', lg: '50%' }}
               >

                  <Box marginY='10px'>
                     <Typography component='label' fontSize='13px' fontWeight='600' color='primary' >Wallet Address</Typography>
                     <TextField
                        id="address"
                        size="small"
                        focused={false}
                        fullWidth
                        error={!!errors?.address}
                        helperText={errors?.address?.message}
                        placeholder='Your wallet address...'
                        {...register("address", { required: "Please enter your wallet address." })}
                     />
                  </Box>

                  <Typography component='label' htmlFor='request' fontSize='13px' fontWeight='600' color='primary' >Wallet Address</Typography>
                  <Stack direction={{ xs: 'colum', md: 'row' }} justifyContent='space-between' spacing={2} marginBottom='15px'>
                     <TextField
                        id="request"
                        size="small"
                        focused={false}
                        disabled
                        fullWidth
                        defaultValue='20 Test Link'
                     />

                     <TextField
                        id="request"
                        size="small"
                        focused={false}
                        disabled
                        fullWidth
                        defaultValue='0.5 ETH'
                     />
                  </Stack>


                  <ReCAPTCHA
                     sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                     onChange={onChange}
                  />


                  <Button type="submit" variant="contained" sx={{ my: '20px' }} disabled={!verified}>Send Request</Button>
               </Box>


               {/* Request History  */}
               <Box marginTop='30px'>
                  <Typography fontWeight='600'>Request History</Typography>

                  <Stack direction='row' spacing={2} marginTop='10px'>
                     <Button variant="contained" color="success">ETH Transaction History</Button>
                     <Button variant="contained" color="secondary" sx={{ boxShadow: 'none', ":hover": { background: '#eef2fe' } }}>TestLink Transaction History</Button>
                  </Stack>


               </Box>


            </Box>
         </Box>
      </Box >
   );
};

export default Home;