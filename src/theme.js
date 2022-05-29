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

export const light = {
  palette: {
    mode: "light",
    primary: {
      main: '#FAE03C',
    },
  },
};

export const dark = {
  palette: {
    mode: "dark",
    primary: {
      main: '#7700ff',
    },
  },
};

/*  theme = createTheme(theme, {
  palette: {
    mode: 'light',
    info: {
      main: theme.palette.secondary.main,
    },
  },
} ); */


