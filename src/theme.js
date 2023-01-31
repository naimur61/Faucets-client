import { createTheme } from '@mui/material/styles';


const theme = createTheme({
   typography: {
      button: {
         textTransform: 'none'
      }
   },
   palette: {
      primary: {
         main: '#9B1FE9',
      },
      secondary: {
         main: '#f44336',
      },
   },
});

export default theme;