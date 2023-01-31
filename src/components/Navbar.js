import { Box, FormControl, MenuItem, Select, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React, { useState } from 'react';
import Arbitrum from '../assets/select_icon/arbitrum.svg'
import avalanche from '../assets/select_icon/avalanche.png'
import bnb from '../assets/select_icon/bnb.png'
import ethereum from '../assets/select_icon/ethereum.svg'
import fantom from '../assets/select_icon/fantom.png'
import harmony from '../assets/select_icon/harmony.jpeg'
import poa from '../assets/select_icon/poa.png'
import polygon from '../assets/select_icon/polygon.png'




const Navbar = () => {
   const [age, setAge] = useState('');

   const handleChange = (event) => {
      setAge(event.target.value);
   };

   return (
      <Box sx={{
         borderBottom: '1px solid #eee',
         padding: '18px 0',
      }}>
         <Stack direction='row' justifyContent='space-between' alignItems='center' sx={{
            margin: 'auto',
            maxWidth: '1470px',
            padding: '0 30px'
         }}>
            <Typography
               variant='h2'
               sx={{
                  color: '#9b1fe9',
                  fontSize: '25px',
                  fontWeight: '600',
               }}>Faucets</Typography>
            <Stack direction='row'>


               <FormControl sx={{ m: 1, maxWidth: 120 }} size='small'>
                  <Select
                     labelId="demo-select-small"
                     id="demo-select-small"
                     value={age}
                     onChange={handleChange}
                  >
                     <MenuItem value="">
                        <em>None</em>
                     </MenuItem>
                     {selectOptions.map((option, i) => <MenuItem key={i} value={option.img}><Stack direction='row' spacing={2} alignItems='center'><Box component='img' src={option?.img} alt="" sx={{ height: '15px', width: '15px' }} />  <Box>{option?.txt}</Box></Stack></MenuItem>)}
                  </Select>
               </FormControl>

            </Stack>

         </Stack >
      </Box >
   );
};

export default Navbar;



const selectOptions = [
   {
      img: Arbitrum,
      txt: "Arbitrum Rinkeby"
   },
   {
      img: avalanche,
      txt: "Avalanche Fuji"
   },
   {
      img: bnb,
      txt: "BNB Chain Testnet"
   },
   {
      img: ethereum,
      txt: "Ethereum Rinkeby"
   },
   {
      img: fantom,
      txt: "Fantom Testnet"
   },
   {
      img: harmony,
      txt: "Harmony Testnet"
   },
   {
      img: poa,
      txt: "POA Network Sokol"
   },
   {
      img: polygon,
      txt: "Polygon Mumbai"
   }
]