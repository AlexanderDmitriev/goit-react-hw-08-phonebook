import { Route, Routes } from 'react-router-dom';
import Navigation from './Navigation';
import StartPage from '../pages/StartPage';
import ContactsPage from '../pages/ContactsPage';

export const App = () => {
  return (
    <>
      <Navigation/>
      <Routes>
        <Route path="/" element={<StartPage/>} />
        <Route path="/contacts" element={<ContactsPage/>} />
        <Route path="/login" element={<h2>Login/Logout</h2>} />
        <Route path="/register" element={<h2>Registration</h2>} />
      </Routes>
      <h2>NewContactModal</h2>
    </>
  );
};
