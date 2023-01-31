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
         main: '#f5f7fd',
      },
      success: {
         main: '#0000FF',
      },
   },
});

export default theme;