import { useState } from "react";
import { Form, Input, Label, SubmitButton } from "./ContactForm.styled";
import { useDispatch, useSelector } from "react-redux";
import { addContact, getContacts } from "../redux/contactsSlice";
import { nanoid } from "@reduxjs/toolkit";


export const ContactForm = () => {

  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

const handleSubmit = e => {
  e.preventDefault();

  const result = contacts.find(({ name }) =>
    name.toLocaleLowerCase() === e.target.name.value.toLocaleLowerCase());
  
  if (result) {
    const message = `${e.target.name.value} is already in contact`;
    alert(message);
  }
  else {
    dispatch(addContact({ id: nanoid(), name: e.target.name.value, number: e.target.number.value }));
  }

  setName('');
  setNumber('');
}
  
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

    return (
      <Form onSubmit={(e) => { handleSubmit(e) }}>

      <Label htmlFor="name"> Name

        <Input
          value={name}
          onChange={e => setName(e.currentTarget.value)}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />

      </Label>

      <Label htmlFor="number"> Number

        <Input
          value={number}
          onChange={e => setNumber(e.currentTarget.value)}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />

      </Label>

      <SubmitButton type="submit">Add contact</SubmitButton>

    </Form>
  )
  }