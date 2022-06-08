import { createSlice } from '@reduxjs/toolkit';
import contactsOperations from './phoneBook';

const initialState = {
  contacts: [],
};

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    extraReducers: {
      [contactsOperations.getContacts.fulfilled](state, action) {
        state.contacts = action.payload;
        state.isFetching=false;
      },
       [contactsOperations.addNewContact.fulfilled](state, action) {
        state.name = action.payload.name;
        state.number = action.payload.number;
      },
      [contactsOperations.patchContact.fulfilled](state, action) {
        state.contacts = action.payload;
      }, 
    },
  });


