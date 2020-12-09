import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import randomApi from '../api/randomApi';
import { addContact } from '../redux/reducers/contactsReducer';


const FooterButtons = () => {

  const history = useHistory();
  const dispatch = useDispatch();

  // User click on add new button:
  const goToAddPage = () => {
    history.push('/contacts/new');
  }

  // User click on add random:
  const createRandomContact = async () => {
    try {
      // Get a random contact from Api
      const response = await randomApi.get('/');
      addRandomContact(response.data.results[0]);
    } catch (err) {
      console.log(err);
    }
  };

  // Add the new contact:
  const addRandomContact = async (data) => {
    // Take only the relevant data & rename it properly
    const relevantData =
    {
      name: data.name.first,
      phone: data.phone,
      title: data.name.title,
      avatar: data.picture.large
    };
    dispatch(addContact(relevantData));
  };

  return (
    <div className="contact-new">
      <button onClick={goToAddPage}>
        <i className="fa fa-user-plus" aria-hidden="true"></i>
      </button>
      <button onClick={createRandomContact}>
        <i className="fa fa-random" aria-hidden="true" style={{ marginLeft: '15px' }}></i>
      </button>
    </div>
  )
}

export default FooterButtons;
