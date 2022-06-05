import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { lazy, Suspense } from 'react';
import StartPage from '../pages/StartPage';
import ContactsPage from '../pages/ContactsPage';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { dark, light } from '../theme';
import { useSelector } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import { PublicRoute } from './PublicRoute';

const Navigation = lazy(() => import('./Navigation/Navigation'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));

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
        <Navigation isDark={isDarkTheme} changeTheme={handleChangeTheme} />
        <Routes>
          <Route
            path="/"
            element={
              <PublicRoute>
                <StartPage />
              </PublicRoute>
            }
          />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route
            path="/login"
            element={
              <PublicRoute restricted>
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute restricted>
                <RegisterPage />
              </PublicRoute>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </ThemeProvider>
  );
};
