import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../redux/reducers/contactsReducer';
import ContactItem from './ContactItem';


const ContactList = (props) => {

  const { contactsDisplayed, setContactsDisplayed } = props;
  const dispatch = useDispatch();

  // Delete a contact:
  const handleDelete = (id) => {
    dispatch(deleteContact(id));
    // Update the UI with the new list (much faster than waiting to update from state handler)
     setContactsDisplayed(contactsDisplayed.filter(contact => {
       return contact.id !== id
     }));
  }

  return (
    <div className="contacts-container">
      {contactsDisplayed !== undefined && contactsDisplayed.map((contact) => {
        return (
          <div key={contact.id}>
            <ContactItem contact={contact} handleDelete={handleDelete} />
          </div>
        )
      }
      )}
    </div>
  )
}

export default ContactList;
