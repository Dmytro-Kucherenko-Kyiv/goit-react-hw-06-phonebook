import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContact, getAllContacts } from 'redux/contactsSlice';
import { nanoid } from 'nanoid';
import { Form, Input, Label, SubmitButton } from "./ContactForm.styled";

/* export const ContactForm = ({ onSubmit }) => {

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

    const resetForm = () => {
    setName('');
    setNumber('');
  }

    return (
      <Form onSubmit={(e) => { onSubmit(e); resetForm() }}>

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
} */
  
export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

/*   const resetForm = e => {
    setName('');
    setNumber('');
  } */

  const allContacts = useSelector(getAllContacts);
  const dispatch = useDispatch();

  const onSubmit = e => {
    e.preventDefault();
    const names = allContacts.contacts.map(item => item.name);
    if (names.some(item => item.toLowerCase() === name.toLowerCase())) {
      const message = `${e.target.name.value} is already in contact`;
      alert(message);
    }
    const id = nanoid();
    dispatch(addContact({ name, number, id }));
    setName('');
    setNumber('');

/*   const onSubmit = e => {
    e.preventDefault();

    const result = allContacts.contacts.find(({ name }) =>
      name.toLocaleLowerCase() === e.target.name.value.toLocaleLowerCase());
    
    if (result) {
      const message = `${e.target.name.value} is already in contact`;
      alert(message);
    }
    else {
      setContacts([...contacts, {
        id: nanoid(), name: e.target.name.value, number: e.target.number.value
      }]
      );
    };
  };
 */
    
  return (
    <Form onSubmit={{ onSubmit, resetForm }}>

        <Label htmlFor="name"> Name

          <Input
            value={name}
            onChange={e => setName(e.target.value)}
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
            onChange={e => setNumber(e.target.value)}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />

      </Label>

        <SubmitButton type="submit">Add contact</SubmitButton>
        
      </Form>
  );
};