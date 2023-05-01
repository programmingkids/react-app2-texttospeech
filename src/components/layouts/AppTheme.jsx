import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { red, purple, blue, grey } from '@mui/material/colors';

const theme = createTheme({
  palette : {
    mode: 'light',
    primary: {
      main: '#bf39f9',
    },
    secondary: {
      main: blue[600],
    },
    background: {
      default : '#ececec',
    },
  },
  typography : {
    subtitle: {
      color : red[700],
      fontSize: 20,
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: red[700]
        }
      }
    },
    MuiSelect : {
      styleOverrides: {
        outlined : {
          backgroundColor: grey[50]
        }
      }
    },
    MuiTextField : {
      styleOverrides: {
        root : {
          backgroundColor: grey[50]
        }
      }
    }
  },
});

export const AppTheme = (props) => (
  <>
    {props.children}
  </>
);
