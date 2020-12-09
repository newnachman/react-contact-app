
import { call, put } from 'redux-saga/effects';
import { requestAddContact } from '../requests/requestAddContact';
import { requestGetContacts } from '../requests/requestGetContacts';
import { setAllContacts } from '../../reducers/contactsReducer';

export function* handleAddContact(action) {
  console.log('handler add');
  console.log(action);
  try {
    // Add the new contact
    yield call(requestAddContact, action.contact);
    // Get the updated contact list
    const response = yield call(requestGetContacts);
    const { data } = response;
    // Update the state
    yield put(setAllContacts(data));
  } catch (error) {
    console.log(error);
  }
}

