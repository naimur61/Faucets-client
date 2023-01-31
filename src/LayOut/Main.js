import { Box } from '@mui/system';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';



const Main = () => {
   return (
      <div>
         <Navbar />
         <Box sx={{
            background: '#EEF2FE', fontFamily: "Varela Round,sans-serif"
         }}>
            <Outlet />
         </Box>
         <Footer />
      </div>
   );
};

export default Main;