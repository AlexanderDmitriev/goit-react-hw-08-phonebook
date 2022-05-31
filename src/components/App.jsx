import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { lazy, Suspense } from 'react';
import StartPage from '../pages/StartPage';
import ContactsPage from '../pages/ContactsPage';
import LoginPage from '../pages/LoginPage';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { dark, light } from '../theme';
import { useDispatch } from 'react-redux';
import { useAddNewUserMutation } from '../redux/user';

const Navigation = lazy(() => import('./Navigation/Navigation'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));

export const App = () => {
  ///Theming
  const [isDarkTheme, setIsDarkTheme] = useState(
    JSON.parse(window.localStorage.getItem('darkTheme')) ?? false
  );

  const handleChangeTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  useEffect(() => {
    window.localStorage.setItem('darkTheme', JSON.stringify(isDarkTheme));
  }, [isDarkTheme]);

  ///Create user
  const dispatch = useDispatch();
  const [createNewUser /* isSuccess */] = useAddNewUserMutation();

  const registrationUser = ({ name, email, password }) => {
    dispatch(createNewUser({ name, email, password }));
  };

  return (
    <ThemeProvider theme={isDarkTheme ? createTheme(dark) : createTheme(light)}>
      <Suspense fallback={<div>Loading...</div>}>
        <Navigation isDark={isDarkTheme} changeTheme={handleChangeTheme}/>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage onSubmit={registrationUser}/>} />
        </Routes>
        <h2>NewContactModal</h2>
      </Suspense>
    </ThemeProvider>
  );
};
