import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { lazy, Suspense } from 'react';
import StartPage from '../pages/StartPage';
import ContactsPage from '../pages/ContactsPage';
import LoginPage from '../pages/LoginPage';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { dark, light } from '../theme';
import { useSelector } from 'react-redux';

const Navigation = lazy(() => import('./Navigation/Navigation'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));

export const App = () => {
  const loggedIn = useSelector(state => state.isLoggedIn);
  ///Theming
  const [isDarkTheme, setIsDarkTheme] = useState(
    JSON.parse(window.localStorage.getItem('darkTheme')) ?? false
  );

  const handleChangeTheme = () => {
    console.log(loggedIn);
    setIsDarkTheme(!isDarkTheme);
  };

  useEffect(() => {
    window.localStorage.setItem('darkTheme', JSON.stringify(isDarkTheme));
  }, [isDarkTheme]);

  
  

  return (
    <ThemeProvider theme={isDarkTheme ? createTheme(dark) : createTheme(light)}>
      <Suspense fallback={<div>Loading...</div>}>
        <Navigation isDark={isDarkTheme} changeTheme={handleChangeTheme}/>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
        <h2>NewContactModal</h2>
      </Suspense>
    </ThemeProvider>
  );
};
