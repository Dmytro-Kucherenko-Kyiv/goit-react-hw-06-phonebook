import { nanoid } from "nanoid";

export const addContact = (name, number) => {
  return {
    type: "contacts/addContact",
    payload: {
      id: nanoid(),
      name,
      number
    },
  };
};

export const deleteContact = Id => {
  return {
    type: "contacts/deleteContact",
    payload: Id,
  };
};

export const setFilter = value => {
  return {
    type: "filters/setFilter",
    payload: value,
  };
};
