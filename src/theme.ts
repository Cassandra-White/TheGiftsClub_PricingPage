import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3f5efb',
    },
    secondary: {
      main: '#5e0cab',
    },
    background: {
        default: '#FFFFFF',
    },
    text: {
      primary: '#111827',
    },
  },
  typography: {
    fontFamily: 'Montserrat',
    h1: {
      fontSize: '2rem',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    body1: {
      fontSize: '1rem',
      textAlign: 'center',
    },
    h2: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 'bold',
      textAlign: 'center',
    },

    h6: {
        fontSize: '1rem',
        fontWeight: "normal",
        textAlign: 'center',
        textDecoration: "line-through"
      },

    
    body2: {
      fontSize: '0.875rem',
      textAlign: 'left',
    },
    button: {
      textTransform: 'none',
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          border: '1px solid #E5E7EB',
          borderRadius: '8px',
          textAlign: 'center',
        },
      },
    },
  },
});

export default theme;
