import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getOneContact, addContact, updateContact } from '../redux/reducers/contactsReducer';
import { CircularProgress } from '@material-ui/core';

import ImagePicker from '../components/ImagePicker';
import ContactInput from '../components/ContactInput';
import Message from '../components/Message';


const EditContact = (props) => {

  const location = props.location.pathname;
  const IS_PAGEMODE_ADD = (location === '/contacts/new');
  const { id } = useParams();
  const history = useHistory();

  const data = useSelector(store => store.contactsReducer.contactItem);
  const loading = useSelector(store => store.contactsReducer.loading);

  const dispatch = useDispatch();

  const [localContact, setLocalContact] = useState({ name: '', phone: '', title: '', avatar: "../images/User-icon.png" });

  const [message, setMessage] = useState();
  const [disable, setDisable] = useState(false);

  useEffect(() => {
    if (!IS_PAGEMODE_ADD) {
      // (If its page mode 'add', leave the fields empty)
      dispatch(getOneContact(id));
    }
  }, []);

  // When data is ready, insert it to contact:
  useEffect(() => {
    if (!IS_PAGEMODE_ADD) {
      setLocalContact(data);
    }
    if (data === "") {
      // If data received is still empty, the id is wrong
      handleWrongId();
    } else {
      // Delete previous messages
      deleteMessage();
    }
  }, [data]);

  // Save the data from users input:
  const saveData = (data) => {
    if (IS_PAGEMODE_ADD) {
      dispatch(addContact(data));
    } else {
      dispatch(updateContact(id, data));
    }
    handleSave();
  }

  // After saving handle message & redirecting:
  const handleSave = () => {
    let text = IS_PAGEMODE_ADD ?
      'New contact saved successfully.' :
      'Contact updated successfully.';
    setMessage(
      {
        text: text,
        type: 'green-msg'
      }
    );
    setTimeout(() => {
      backToList();
    }, 3000);
  }

  // Set message for wrong id in url:
  const handleWrongId = () => {
    setMessage(
      {
        text: "Didn't find the contact. Please check the ID in the URL",
        type: "red-msg"
      }
    );
    setDisable(true);
  }

  // Delete the message:
  const deleteMessage = () => {
    setMessage("");
    setDisable(false);
  }

  // Navigate to contact list:
  const backToList = () => {
    history.push('/contacts');
  }

  return loading ?
    (
      <div className="center-container">
        <CircularProgress />
      </div>
    )
    :
    (
      <div className="contact-container">
        <div className="edit-contact-container">
          <ImagePicker
            localContact={localContact}
            setLocalContact={setLocalContact}
            IS_PAGEMODE_ADD={IS_PAGEMODE_ADD}
            disable={disable}
          />
          <ContactInput
            localContact={localContact}
            setLocalContact={setLocalContact}
            saveData={saveData}
            backToList={backToList}
            disable={disable}
            setMessage={setMessage}
          />
          {message && <Message message={message} />}
        </div>
      </div>

    )
}

export default EditContact;
