import { createSlice } from '@reduxjs/toolkit';
import contactsOperations from './phoneBook';

const initialState = {
    name: null,
    number: null,
};

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    extraReducers: {
      [contactsOperations.getContacts.fulfilled](state, action) {
        state.name = action.payload.name;
        state.number = action.payload.number;
      },
       [contactsOperations.addNewContact.fulfilled](state, action) {
        state.name = action.payload.name;
        state.number = action.payload.number;
      },
      /*[authOperations.logoutUser.fulfilled](state, _) {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn=false;
      }, 
      [authOperations.getUserInformation.pending](state) {
        state.isFetchingUser = true;
      },
      [authOperations.getUserInformation.fulfilled](state, action) {
        state.user = action.payload;
        state.isLoggedIn=true;
        state.isFetchingUser = false;
      },
      [authOperations.getUserInformation.rejected](state) {
        state.isFetchingUser = false;
      }, */
    },
  });


