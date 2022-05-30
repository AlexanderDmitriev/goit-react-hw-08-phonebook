import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useAddNewUserMutation } from '../redux/user';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Formik, Form, ErrorMessage, Field } from 'formik';
import * as yup from 'yup';

const RegisterPage = ({ onSubmit }) => {
  const registrationMessage = `Please, fill out the registration form to use the application.`;

  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [createNewUser /* isSuccess */] = useAddNewUserMutation();

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(createNewUser({ name, email, password }));
    console.log(event);
    setName('');
    setEmail('');
    setPassword('');
  };

  const handleSubmit2 = (values , { resetForm }) => {
    console.log(values);
    onSubmit(values);
    resetForm();
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

      {/* Пробую через MUI */}
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
        <Button variant="contained" size="medium" type="submit">
          Submit
        </Button>
      </Box>

        {/* Пробую через Formik */}
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        validationSchema={schema}
        onSubmit={handleSubmit2}
      >
        {({ handleSubmit2, isSubmitting }) => (
          <div>
            <Form onSubmit={handleSubmit2}>
              <label htmlFor="name">
                Name
                <Field
                  type="text"
                  name="name"
                  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer"
                />
                <ErrorMessage name="name" render={<p>{'Incorrect name'}</p>} />
              </label>
              <label htmlFor="number">
                Number
                <Field
                  type="email"
                  name="email"
                  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                  required
                />
                <ErrorMessage
                  name="email"
                  render={msg => <p>{'Incorrect number'}</p>}
                />
              </label>
              <label htmlFor="password">
                Number
                <Field
                  type="text"
                  name="password"
                  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                  required
                />
                <ErrorMessage
                  name="password"
                  render={msg => <p>{'Incorrect number'}</p>}
                />
              </label>
              <button type="submit" disabled={isSubmitting}>
                Add contact
              </button>
            </Form>
          </div>
        )}
      </Formik>
    </>
  );
};

export default RegisterPage;
