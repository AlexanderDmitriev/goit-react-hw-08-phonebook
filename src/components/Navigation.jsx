import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const Navigation = ({ isDark = false, changeTheme }) => {
  /*   
  const handleChangeTheme = () => {
    setIsDark(!isDark);
  }; */

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h3" component="h1" sx={{ flexGrow: 1 }}>
              My contacts
            </Typography>
            <Button color="inherit">Registration</Button>
            <Button color="inherit">Login</Button>
            <Typography
              variant="subtitle1"
              component="p"
              align="right"
              sx={{ flexGrow: 1 }}
            >
              Hello, name
            </Typography>
            <Button color="inherit">Logout</Button>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={() => {
                changeTheme();
              }}
            >
              {isDark ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navigation;
