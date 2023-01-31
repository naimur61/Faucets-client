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
import MetaMasks from '../assets/select_icon/metaMask.png'
import Wallet from '../assets/select_icon/walletConnect.svg'
import { IoWallet } from 'react-icons/io5';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import { useNavigate } from 'react-router-dom';




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
                  cursor: 'pointer'
               }} onClick={() => navigate('/')}>Faucets</Typography>
            <Stack direction='row' alignItems='center' spacing={{ xs: 0, lg: 2 }}>

               <FormControl sx={{ m: 1, maxWidth: { xs: '60px', lg: '230px' } }} size='small'>
                  <Select
                     labelId="demo-select-small"
                     id="demo-select-small"
                     value={options}
                     onChange={handleChange}
                  >
                     <MenuItem value="">
                     </MenuItem>
                     {selectOptions.map((option, i) => <MenuItem key={i} value={i}><Stack direction='row' spacing={{ xs: 5, lg: 2 }} alignItems='center'><Box component='img' src={option?.img} alt="" sx={{ height: '15px', width: '15px' }} />  <Box>{option?.txt}</Box></Stack></MenuItem>)}
                  </Select>
               </FormControl>

               <Button variant="outlined" size="medium" onClick={handleOpen} sx={{ display: { xs: 'none', lg: 'block' } }}><IoWallet style={{ marginRight: "10px" }} />Connect Wallet</Button>

               <IconButton color="primary" size="medium" onClick={handleOpen} sx={{ display: { lg: 'none', ":hover": 'none' } }}><IoWallet style={{ marginRight: "10px" }} />
               </IconButton>


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
            sx={{
               background: ' #fff',
               background: ' var(--white-bg-color)',
               border: ' 1px solid #eee',
               // left: ' 0',
               margin: ' 0 auto',
               padding: ' 15px',
               position: ' fixed',
               top: ' 50%',
               transformOrigin: 'center',
               zIndex: ' 9',
            }}
         >

            <Box
               sx={{
                  background: '#fff',
                  borderRadius: ' 3px',
                  left: ' 50%',
                  lineHeight: ' 1.4',
                  padding: { xs: '2rem 4.5rem', lg: '2rem 2rem' },
                  position: ' absolute',
                  transform: ' translate(-50%,-50%)',
               }}>
               <Stack id="modal-modal-title" direction='row' justifyContent='space-between' sx={{ mx: { xs: '-2rem', lg: 0 } }}>
                  <Typography variant="h5" fontWeight='600' component="h2">
                     Connect your wallet
                  </Typography>

                  <Typography variant="h5" fontWeight='600' component="h2" sx={{ cursor: 'pointer' }} onClick={handleClose}>
                     X
                  </Typography>
               </Stack>

               <Box id="modal-modal-description" sx={{ mt: 2 }}>
                  <Stack direction={{ xs: 'column', lg: 'row' }} alignItems='center' spacing={2}>
                     {wallets.map((w, i) =>
                        <Box sx={{
                           background: '#f5f7fd',
                           cursor: ' pointer',
                           margin: ' 10px',
                           padding: ' 20px',
                           textAlign: ' center',
                           width: '185px',

                        }}
                           key={i}>
                           <Box><Box component='img' src={w.img} alt=''
                              sx={{ height: '100px', width: '100px', }} />
                              <Typography color='primary' fontWeight='600'>{w.txt}</Typography></Box>

                        </Box>)}

                  </Stack>
               </Box>
            </Box>
         </Modal>
      </Box >
   );
};

export default Navbar;


const wallets = [
   {
      img: MetaMasks,
      txt: "MetaMask"
   },
   {
      img: Wallet,
      txt: "WalletConnect"
   }
]

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