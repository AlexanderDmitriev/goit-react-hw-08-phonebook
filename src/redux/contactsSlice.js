import { createSlice } from '@reduxjs/toolkit';
import contactsOperations from './phoneBook';

const initialState = {
  contacts: [],
  isFetching:false,
};

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    extraReducers: {
      [contactsOperations.getContacts.pending](state, action) {
        state.contacts = action.payload;
        state.isFetching=true;
      },
      [contactsOperations.getContacts.fulfilled](state, action) {
        state.contacts = action.payload;
        state.isFetching=false;
      },
      [contactsOperations.getContacts.rejected](state, action) {
        state.contacts = [];
        state.isFetching=false;
      },
       [contactsOperations.addNewContact.fulfilled](state, action) {
        state.name = action.payload.name;
        state.number = action.payload.number;
      },
      [contactsOperations.patchContact.fulfilled](state, action) {
        console.log("action.payload - ", action.payload);
        state.contacts = action.payload;

      }, 
      /*[authOperations.getUserInformation.pending](state) {
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


