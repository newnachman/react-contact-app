import { takeLatest } from 'redux-saga/effects';
import { handleGetContacts } from '../handlers/handleGetContacts';
import { GET_ALL_CONTACTS } from '../../reducers/contactsReducer';

export function* getAllContactsWatcher() {
  yield takeLatest(GET_ALL_CONTACTS, handleGetContacts);
}