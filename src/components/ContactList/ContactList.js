import { DeleteButton, Item, ItemStyle, List } from "./ContactList.styled";
import { useSelector } from "react-redux";
import { getContacts, getFilter } from "../redux/selectors";
import { deleteContact } from "components/redux/actions";
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
    {filteredContacts.map((user) => 
      <Item key={user.id}>
        <ItemStyle />

        {user.name} : {user.number}

        <DeleteButton type="button" onClick={() => dispatch(deleteContact(user.id))}>Delete</DeleteButton>
      </Item>)}
    </List>
)
}