import { useState } from 'react';
import { useAddNewUserMutation } from '../redux/user';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import * as yup from 'yup';

const RegisterPage = () => {
  const registrationMessage = `Please, fill out the registration form to use the application.`;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [createNewUser /* isSuccess */] = useAddNewUserMutation();

  const handleSubmit = event => {
    event.preventDefault();
    createNewUser({ name, email, password });
    setName('');
    setEmail('');
    setPassword('');
  };

  //Схема валидации
  const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
  });

  return (
    <>
      <h2>{registrationMessage}</h2>

      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        validate={schema}
        onSubmit={handleSubmit}
      >
        <TextField
          id="name"
          label="Enter your name"
          variant="standard"
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          id="email"
          label="Enter your email"
          variant="standard"
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          id="password"
          label="Enter your password"
          variant="standard"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button variant="contained" size="medium" type="submit">
          Submit
        </Button>
      </Box>

        
    </>
  );
};

export default RegisterPage;
