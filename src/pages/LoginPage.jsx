import { useState } from 'react';
import * as yup from 'yup';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useLoginUserMutation } from '../redux/user';

const LoginPage = () => {
    const loginMessage=`Please, enter the login information to use the application.`;
    
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [logInUser /* isSuccess */] = useLoginUserMutation();

  const handleSubmit = event => {
    event.preventDefault();
    logInUser({ name, password });
    setName('');
    setPassword('');
  };

    //Схема валидации
    const schema = yup.object().shape({
      name: yup.string().required(),
      password: yup.string().required(),
    });
    
    return (
      <>
        <h2>{loginMessage}</h2>
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
  
  export default LoginPage;