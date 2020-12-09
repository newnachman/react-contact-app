import React from 'react';
import { useHistory } from 'react-router-dom';


const ContactItem = (props) => {

  const {contact, handleDelete} = props;
  const {id, name, phone, avatar} = contact;
  const history = useHistory();

  // Go to specific contact detailed page:
  const handleDetailed = (id) => {
    history.push(`/contacts/${id}`);
  }

  // When user click the phone button, make call:
  const makeCall = (event) => {
    // Prevent clicking the contact and navigating to detailed page
    event.stopPropagation();
    alert('calling to: ' + phone);
  }

  // User click the delete buuton:
  const removeContact = (event, id) => {
    // Prevent clicking the contact and navigating to detailed page
    event.stopPropagation();
    handleDelete(id);
  }

  return (
    <div className="contact"
      onClick={() => handleDetailed(id)}
      style={{ cursor: "pointer" }}
    >
      <div className="contact-avatar">
        <img src={avatar} />
      </div>
      <div className="contact-details">
        <div className="contact-name">{name}</div>
        <div className="contact-phone">{phone}</div>
      </div>
      <div className="contact-buttons">
        <button onClick={event => makeCall(event)}><i className="fa fa-phone" aria-hidden="true"></i></button>
      </div>
      <div className="contact-button-close">
        <i onClick={event => removeContact(event, id)} className="fa fa-times" aria-hidden="true">
        </i>
      </div>
    </div>
  )
}

export default ContactItem;
