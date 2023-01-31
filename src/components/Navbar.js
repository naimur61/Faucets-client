import { Box, Button, FormControl, MenuItem, Modal, Select, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React, { useState } from 'react';
import et_kovan from '../assets/select_icon/et-ethereum.webp'
import Arbitrum from '../assets/select_icon/arbitrum.svg'
import avalanche from '../assets/select_icon/avalanche.png'
import bnb from '../assets/select_icon/bnb.png'
import ethereum from '../assets/select_icon/ethereum.svg'
import fantom from '../assets/select_icon/fantom.png'
import harmony from '../assets/select_icon/harmony.jpeg'
import poa from '../assets/select_icon/poa.png'
import polygon from '../assets/select_icon/polygon.png'
import { IoWallet } from 'react-icons/io5';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import { Navigate, useNavigate } from 'react-router-dom';


const style = {
   position: 'absolute',
   top: '50%',
   left: '50%',
   transform: 'translate(-50%, -50%)',
   width: 400,
   bgcolor: 'background.paper',
   border: '2px solid #000',
   boxShadow: 24,
   p: 4,
};


const Navbar = () => {
   const navigate = useNavigate();
   const [options, setOptions] = useState(0);
   const [open, setOpen] = React.useState(false);
   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);

   const [anchorElUser, setAnchorElUser] = React.useState(null);

   const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
   };

   const handleCloseUserMenu = () => {
      setAnchorElUser(null);
   };

   const handleChange = (event) => {
      setOptions(event.target.value);
   };

   const handleNavigate = (e) => {
      navigate(e);
      handleCloseUserMenu();
   }

   return (
      <Box sx={{
         borderBottom: '1px solid #eee',
         padding: '18px 0',
      }}>
         <Stack direction='row' justifyContent='space-between' alignItems='center' sx={{
            margin: 'auto',
            maxWidth: '1340px',
            padding: '0 30px'
         }}>
            <Typography
               color='primary'
               sx={{
                  fontSize: '25px',
                  fontWeight: '600',
               }}>Faucets</Typography>
            <Stack direction='row' alignItems='center' spacing={2}>

               <FormControl sx={{ m: 1, minWidth: 120 }} size='small'>
                  <Select
                     labelId="demo-select-small"
                     id="demo-select-small"
                     value={options}
                     onChange={handleChange}
                  >
                     <MenuItem value="">
                     </MenuItem>
                     {selectOptions.map((option, i) => <MenuItem key={i} value={i}><Stack direction='row' spacing={2} alignItems='center'><Box component='img' src={option?.img} alt="" sx={{ height: '15px', width: '15px' }} />  <Box>{option?.txt}</Box></Stack></MenuItem>)}
                  </Select>
               </FormControl>

               <Button variant="outlined" size="medium" onClick={handleOpen}><IoWallet style={{ marginRight: "10px" }} /> Connect Wallet</Button>


               <Box sx={{ flexGrow: 0 }}>
                  <Tooltip title="Open settings">
                     <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                     </IconButton>
                  </Tooltip>
                  <Menu
                     sx={{ mt: '45px' }}
                     id="menu-appbar"
                     anchorEl={anchorElUser}
                     anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                     }}
                     keepMounted
                     transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                     }}
                     open={Boolean(anchorElUser)}
                     onClose={handleCloseUserMenu}
                  >

                     <MenuItem onClick={() => handleNavigate('/login')}>Login</MenuItem>
                     <MenuItem onClick={() => handleNavigate('/registration')}>SignUp</MenuItem>
                     <MenuItem onClick={() => handleNavigate('/faq')}>FAQ</MenuItem>

                  </Menu>
               </Box>

            </Stack>

         </Stack >
         {/* Modal  */}
         <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
         >
            <Box sx={style}>
               <Typography id="modal-modal-title" variant="h6" component="h2">
                  Text in a modal
               </Typography>
               <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
               </Typography>
            </Box>
         </Modal>
      </Box >
   );
};

export default Navbar;



const selectOptions = [
   {
      img: et_kovan,
      txt: "Ethereum Kovan"
   },
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