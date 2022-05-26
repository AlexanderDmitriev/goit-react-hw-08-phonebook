import { Route, Routes } from 'react-router-dom';
import Navigation from './Navigation';
import StartPage from '../pages/StartPage';
import ContactsPage from '../pages/ContactsPage';
import RegisterPage from '../pages/RegisterPage';
import LoginPage from '../pages/LoginPage';

export const App = () => {
  return (
    <>
      <Navigation/>
      <Routes>
        <Route path="/" element={<StartPage/>} />
        <Route path="/contacts" element={<ContactsPage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/register" element={<RegisterPage/>} />
      </Routes>
      <h2>NewContactModal</h2>
    </>
  );
};
