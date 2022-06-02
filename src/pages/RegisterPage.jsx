import { useState } from 'react';
import { useAddNewUserMutation } from '../redux/user';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import * as yup from 'yup';
import toast from 'react-hot-toast';

const RegisterPage = () => {
  const registrationMessage = `Please, fill out the registration form to use the application.`;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [createNewUser, isSuccess] = useAddNewUserMutation();

  const handleSubmit = event => {
    event.preventDefault();
    createNewUser({ name, email, password });
    if (isSuccess) {
      toast.success(`The registration procedure was successful`);
    }
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
      <Typography
        variant="h6"
        component="h2"
        color="inherit"
        sx={{ flexGrow: 1 }}
      >
        {registrationMessage}
      </Typography>
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
          onChange={e => setName(e.target.value)}
        />
        <TextField
          id="email"
          label="Enter your email"
          variant="standard"
          onChange={e => setEmail(e.target.value)}
        />
        <TextField
          id="password"
          label="Enter your password"
          variant="standard"
          onChange={e => setPassword(e.target.value)}
        />
        <Button variant="contained" size="medium" type="submit">
          Submit
        </Button>
      </Box>
    </>
  );
};

export default RegisterPage;