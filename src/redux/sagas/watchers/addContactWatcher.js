import { takeLatest } from 'redux-saga/effects';
import { handleAddContact } from '../handlers/handleAddContact';
import { ADD_CONTACT } from '../../reducers/contactsReducer';

export function* addContactWatcher() {
  yield takeLatest(ADD_CONTACT, handleAddContact);
}