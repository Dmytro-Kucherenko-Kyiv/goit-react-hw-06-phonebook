import { DeleteButton, Item, ItemStyle, List } from "./ContactList.styled";
import { useSelector } from "react-redux";
import { deleteContact, getContacts } from "../redux/contactsSlice";
import { getFilter } from "../redux/filterSlice";
import { useDispatch } from "react-redux";



export const ContactList = () => {

  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const filteredContacts = filter === '' ? contacts: contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

return(
  <List>
    {filteredContacts.map((contact) => 
      <Item key={contact.id}>
        <ItemStyle />

        {contact.name} : {contact.number}

        <DeleteButton type="button" onClick={() => dispatch(deleteContact(contact.id))}>Delete</DeleteButton>
      </Item>)}
    </List>
)
}