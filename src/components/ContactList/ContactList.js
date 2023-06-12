import PropTypes from 'prop-types';
import { arrContacts, delContact } from 'components/Redux/contactsSlice';
import { filterValue } from 'components/Redux/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteButton, Item, ItemStyle, List } from "./ContactList.styled";

export const ContactList = ({ users, onDelete }) => (

const filter = useSelector(filterValue);
  const dispatch = useDispatch();
  const filteredContacts = useSelector(arrContacts).filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  if (!filteredContacts?.length) {
    return <div>Not found. Try something else</div>;
}
    return (
    <ul>
      {filteredContacts.map(contact => (
        <li key={contact.id} style={{ marginBottom: '0.5rem' }}>
          {contact.name}:{' '}
          <span>
            <b>{contact.number}</b>
          </span>
          <button
            style={{ marginLeft: '0.7rem', fontSize: '0.7rem' }}
            type="button"
            onClick={() => {
              dispatch(delContact(contact.id));
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};


  <List>
    {users.map((user) => 
      <Item key={user.id}>
        <ItemStyle />

        {user.name} : {user.number}

        <DeleteButton type="button" onClick={() => onDelete(user.id)}>Delete</DeleteButton>
      </Item>)}
  </List>
)

ContactList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ),
  onDelete: PropTypes.func.isRequired,
};