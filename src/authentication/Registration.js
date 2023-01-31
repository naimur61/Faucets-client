import { Box, Button, FormControl, IconButton, Input, InputAdornment, InputLabel, TextField } from '@mui/material';
import React, { useState } from 'react';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useForm } from 'react-hook-form';
import Link from '@mui/material/Link';
import { useNavigate } from 'react-router-dom';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Stack } from '@mui/system';

const Registration = () => {
   const [showPassword, setShowPassword] = useState(false);
   const navigate = useNavigate();

   const { register, handleSubmit, formState: { errors } } = useForm();
   const onSubmit = data => console.log(data);

   const handleClickShowPassword = () => setShowPassword((show) => !show);

   const handleMouseDownPassword = (event) => {
      event.preventDefault();
   };

   return (
      <Box sx={{
         alignItems: 'center',
         display: 'flex',
         height: '80vh',
         justifyContent: 'center',
         background: '#EEF2FE'
      }}>

         <Box
            sx={{
               background: ' #fff',
               border: ' 1px solid #eee',
               borderRadius: ' 3px',
               boxShadow: ' 0 2px 5px -4px grey',
               margin: ' auto',
               padding: ' 20px',
               width: { xs: '75%', md: '60%', lg: '30%' }
            }}
         >

            <Box sx={{
               fontSize: '30px',
               fontWeight: '600',
               textAlign: 'center',
               mb: "20px"

            }}>Signup</Box>
            <Box
               component="form" onSubmit={handleSubmit(onSubmit)}
            >


               <TextField
                  sx={{
                     fontSize: 20,
                     fontWeight: '900'
                  }}
                  id="outlined-basic"
                  label="Email"
                  variant="standard"
                  size="small"
                  fullWidth
                  error={!!errors?.email}
                  helperText={errors?.email?.message}
                  {...register("email", { required: "Please enter your email." })}
               />

               <FormControl size="small" sx={{ my: '10px', display: 'block' }} variant="standard">
                  <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                  <Input
                     sx={{ width: '100%' }}
                     id="standard-adornment-password"
                     type={showPassword ? 'text' : 'password'}
                     endAdornment={
                        <InputAdornment position="end">
                           <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                           >
                              {showPassword ? <VisibilityOff /> : <Visibility />}
                           </IconButton>
                        </InputAdornment>
                     }
                  />

               </FormControl>


               <Button type="submit" fullWidth={true} variant="contained" sx={{ my: '20px' }}>Signup</Button>
            </Box>
            <Box sx={{
               textAlign: 'center', fontWeight: 600, fontSize: '13px'
            }}>
               Already have an account?  <Link sx={{ color: "#9B1FE9", cursor: "pointer", textDecorationLine: 'none' }} onClick={() => navigate("/login")}>Login</Link>
            </Box>
            <Box sx={{
               textAlign: 'center', fontWeight: 700, my: '20px'
            }}>
               or
            </Box>
            <Stack direction="row" spacing={2} justifyContent='center' sx={{ mt: 4, mb: 2 }}>
               <GoogleIcon />
               <FacebookIcon />
               <GitHubIcon />
            </Stack>


         </Box>
      </Box>
   );
};


export default Registration;