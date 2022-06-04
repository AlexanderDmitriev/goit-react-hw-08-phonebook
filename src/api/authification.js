import axios from 'axios';
import toast from 'react-hot-toast';
import { createAsyncThunk } from '@reduxjs/toolkit';

const addNewUser = createAsyncThunk(
  'authification/addNewUser',
  async userData => {
    try {
      const { data } = await axios.post('/users/signup', userData);
      return data;
    } catch (error) {}
  }
);

const loginUser = createAsyncThunk(
  'authification/loginUser',
  async userData => {
    try {
      const { data } = await axios.post('/users/login', userData);
      toast.success(`Welcome to the My Contacts application`);
      return data;
    } catch (error) {}
  }
);

const authOperations = {
  addNewUser,
  loginUser,
};
export default authOperations;
