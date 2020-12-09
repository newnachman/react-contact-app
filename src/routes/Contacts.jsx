
import React, { useState, useEffect } from 'react';
import { CircularProgress } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { getAllContacts } from '../redux/reducers/contactsReducer';
import ContactList from '../components/ContactList';
import ContactSearch from '../components/ContactSearch';
import FooterButtons from '../components/FooterButtons';


const Contacts = () => {

  const [fetchedContacts, setFetchedContacts] = useState([]);
  const [contactsDisplayed, setContactsDisplayed] = useState([]);

  const dispatch = useDispatch();

  const data = useSelector(store => store.contactsReducer.contactsList);
  const loading = useSelector(store => store.contactsReducer.loading);

  useEffect(() => {
    // Initial the get data to state manager
    dispatch(getAllContacts());
  }, [])

  useEffect(() => {
    // When data is ready, insert it to contacts
    setFetchedContacts(data);
  }, [data])

  useEffect(() => {
    setContactsDisplayed(fetchedContacts);
  }, [fetchedContacts])

  // Filter the contact list due to the search input received:
  const filterContacts = (searchInput) => {
    setContactsDisplayed(
      searchInput !== "" ?
        fetchedContacts.filter((contact) => {
          return (
            contact.name.toLowerCase().includes(searchInput.toLowerCase())
            ||
            contact.phone.includes(searchInput)
          );
        })
        :
        fetchedContacts
    )
  }

  // If finish loading, display components:
  return loading ?
    (
      <div className="center-container">
        <CircularProgress />
      </div>
    )
    :
    (
      <div className="contact-container">
        <ContactSearch filterContacts={filterContacts} />
        <ContactList contactsDisplayed={contactsDisplayed} setContactsDisplayed={setContactsDisplayed} />
        <FooterButtons />
      </div>
    )
}

export default Contacts;
