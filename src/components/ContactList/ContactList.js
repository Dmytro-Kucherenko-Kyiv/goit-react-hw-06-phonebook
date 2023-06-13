import { DeleteButton, Item, ItemStyle, List } from "./ContactList.styled";

import { arrContacts, delContact } from 'components/Redux/contactsSlice';
import { filterValue } from 'components/Redux/filterSlice';
import { useDispatch, useSelector } from 'react-redux';

export const ContactList = () => {
  const filter = useSelector(filterValue);
  const dispatch = useDispatch();
  const filteredContacts = useSelector(arrContacts).filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  if (!filteredContacts?.length) {
    return <div>Not found. Try something else</div>;
  }
  return (
    <List>
      {filteredContacts.map((contact) =>
        <Item key={contact.id}>
          <ItemStyle />

          {contact.name} : {contact.number}

          <DeleteButton type="button" onClick={() => {
            dispatch(delContact(contact.id))
          }}>Delete</DeleteButton>
        </Item>)}
    </List>
  )
}