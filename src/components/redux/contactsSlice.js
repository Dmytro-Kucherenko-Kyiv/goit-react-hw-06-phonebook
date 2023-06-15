import { createSlice } from "@reduxjs/toolkit";

const contactsInitialState = [
  {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
  {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
];

const contactsSlice = createSlice({
  name: "contacts",
  initialState: contactsInitialState,
  reducers: {
    addContact(state, action) {
      state.push(action.payload);
    },
    prepare({ id, name, number }) {
      return {
        payload: {
          id,
          name,
          number
        },
      };
    },
    deleteContact(state, action) {
      const index = state.findIndex(contact => contact.id === action.payload);
      state.splice(index, 1);
    },
  },
})

export const { addContact, deleteContact } = contactsSlice.actions; // actions

export const contactsReducer = contactsSlice.reducer; // reducers

export const getContacts = state => state.contacts;