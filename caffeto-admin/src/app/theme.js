import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#007aff',
    },
    secondary: {
      main: '#ff4081',
    },
  },
  typography: {
    fontFamily: [
      'var(--font-geist-sans)',
      'var(--font-bricolage-grotesque)',
      'Roboto',
      'sans-serif',
    ].join(','),
  },
});

export default theme;