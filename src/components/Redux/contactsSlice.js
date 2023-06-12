import { createSlice } from '@reduxjs/toolkit';
const contacts = [];

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { contacts },
  reducers: {
    addContact(state, action) {
      state.contacts.push(action.payload);
    },
    delContact(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});
export const contactsReducer = contactsSlice.reducer;
export const { addContact, delContact } = contactsSlice.actions;
export const arrContacts = state => state.contacts.contacts;