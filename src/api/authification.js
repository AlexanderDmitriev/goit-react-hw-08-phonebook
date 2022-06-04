import axios from 'axios';
import toast from 'react-hot-toast';
import { createAsyncThunk } from '@reduxjs/toolkit';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = ``;
  },
};

const addNewUser = createAsyncThunk(
  'authification/addNewUser',
  async userData => {
    try {
      const { data } = await axios.post('/users/signup', userData);
      token.set(data.token);
      toast.success(`The registration procedure was successful`);
      return data;
    } catch (error) {
      toast.error(`The registration procedure was failture`);
    }
  }
);

const loginUser = createAsyncThunk(
  'authification/loginUser',
  async userData => {
    try {
      const { data } = await axios.post('/users/login', userData);
      token.set(data.token);
      toast.success(`Welcome to the My Contacts application`);
      return data;
    } catch (error) {
      toast.error(`The log in procedure was failture`);
    }
  }
);

const logoutUser = createAsyncThunk('authification/logoutUser', async () => {
  try {
    await axios.post('/users/logout');
    token.unset();
    toast.success(`Log out was successfully`);
  } catch (error) {
    toast.error(`Sorry, we cann't to log out you. Try agan.`);
  }
});

const authOperations = {
  addNewUser,
  loginUser,
  logoutUser,
};
export default authOperations;
