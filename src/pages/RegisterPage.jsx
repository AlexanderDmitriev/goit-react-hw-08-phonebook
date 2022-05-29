import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useAddNewUserMutation } from '../redux/user';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const RegisterPage = () => {
  const registrationMessage = `Please, fill out the registration form to use the application.`;

  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [createNewUser /* isSuccess */] = useAddNewUserMutation();

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(createNewUser({ name, email, password }));
    console.log(event.target);
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <h2>{registrationMessage}</h2>
      {/* <form onSubmit={handleSubmit}> */}
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          onSubmit={handleSubmit}
        >
          <TextField
            id="name"
            label="Enter your name"
            variant="standard"
            onChange={setName}
          />
          <TextField
            id="email"
            label="Enter your email"
            variant="standard"
            onChange={setEmail}
          />
          <TextField
            id="password"
            label="Enter your password"
            variant="standard"
            onChange={setPassword}
          />
        
        {/* <label>
          Name
          <input type="text" name="name" onChange={setName}/>
        </label>
        <label>
          Email
          <input type="email" name="email" onChange={setEmail}/>
        </label>
        <label>
          Password
          <input type="text" name="password" onChange={setPassword}/>
        </label> */}
        <Button variant="contained" size="medium" type='submit'>
          Submit
        </Button>
        </Box>
     {/*  </form> */}
    </>
  );
};

export default RegisterPage;
