import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selctors';
import { deleteContact } from 'redux/contactsSlice';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';

function ContactList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const delContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ul className={css.list}>
      {filteredContacts.map(({ id, name, phone }) => {
        return (
          <li className={css.item} key={id}>
            <span>{name}:</span>
            <span className={css.number}>{phone}</span>
            <button
              className={css.button}
              type="button"
              onClick={() => delContact(id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}
export default ContactList;
