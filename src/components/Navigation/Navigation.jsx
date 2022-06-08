import React from 'react';
import { useSelector } from 'react-redux';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Navigation = ({
  isDark = false,
  changeTheme,
  loggedIn,
  handleLogout,
}) => {
  const userName = useSelector(state => state.authification.user.name);

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Link
              component={RouterLink}
              to={loggedIn ? '/contacts' : '/'}
              color="secondary"
              variant="h3"
              underline="none"
              sx={{ flexGrow: 1 }}
            >
              My contacts
            </Link>

            {loggedIn ? (
              <>
                <Typography
                  variant="subtitle1"
                  component="p"
                  align="right"
                  sx={{ flexGrow: 1 }}
                >
                  Hello, {userName}
                </Typography>
                <Button color="inherit" onClick={handleLogout}>
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button component={RouterLink} to="/register" color="inherit">
                  Registration
                </Button>
                <Button component={RouterLink} to="/login" color="inherit">
                  Login
                </Button>
              </>
            )}

            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ m: 2 }}
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
