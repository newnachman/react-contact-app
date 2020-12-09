
import { call, put } from 'redux-saga/effects';
import { setAllContacts } from '../../reducers/contactsReducer';
import { requestDeleteContact } from '../requests/requestDeleteContact';
import { requestGetContacts } from '../requests/requestGetContacts';

export function* handleDeleteContact(action) {
  try {
    // Delete the contact
    yield call(requestDeleteContact, action.id);
    // Get the updated contact list
    const response = yield call(requestGetContacts);
    const { data } = response;
    // Update the state
    yield put(setAllContacts(data));
  } catch (error) {
    console.log(error);
  }
}

