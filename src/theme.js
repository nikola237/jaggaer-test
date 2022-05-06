import { createTheme } from '@mui/material/styles';

export const theme = createTheme({

  test: {
    red: '#e14e42',
  },

  palette: {

    white: '#ffffff',
    lightGray: '#efefef',

    // primary: {
    //   light: '#e3f2fd',
    //   main: '#fff',
    //   dark: '#000',
    // },
    primary: {
      light: '#e3f2fd',
      main: '#e14e42',
      dark: '#000',
    },
    secondary: {
      main: '#DD5348',
    },
    tertiary: {
      main: '#42a5f5',
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: 'red'
        }
      }
    }
  }
});
