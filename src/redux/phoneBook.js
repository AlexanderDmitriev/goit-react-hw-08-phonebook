import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import toast from 'react-hot-toast';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = ``;
  },
};

 const getContacts = createAsyncThunk(
  'contacts/getContacts',
  async (_, thunkAPI) => {
    const currentToken = thunkAPI.getState().authification.token;
    if (currentToken === null) {
      return thunkAPI.rejectWithValue() ;
    }
    token.set(currentToken);
    try {
      const { data } = await axios.get('/contacts');
      return data;
    } catch (error) {
      /* toast.error(`Something wrong. We have no user data.`); */
    }
  }
);

const addNewContact = createAsyncThunk(
    'contacts/addNewContact',
    async newContact => {
      try {
        const { data } = await axios.post('/contacts', newContact);
        token.set(data.token);
        toast.success(`The adding procedure was successful`);
        return data;
      } catch (error) {
        toast.error(`The adding procedure was failture`);
      }
    }
  );

const contactsOperations = {
    getContacts,
    addNewContact,
  };
  export default contactsOperations;