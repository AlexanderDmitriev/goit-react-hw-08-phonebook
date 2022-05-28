import { createTheme } from '@mui/material/styles';

export let theme = createTheme({
  palette: {
    primary: {
      main: '#FAE03C',
      light:'#FAE03C',
      dark:'#7700ff',
    },
    secondary: {
      main: '#edf2ff',
    },
  },
});

/*  theme = createTheme(theme, {
  palette: {
    mode: 'light',
    info: {
      main: theme.palette.secondary.main,
    },
  },
} ); */


