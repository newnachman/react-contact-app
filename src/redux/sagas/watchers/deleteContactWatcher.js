
import { takeLatest } from 'redux-saga/effects';
import { handleDeleteContact } from '../handlers/handleDeleteContact';
import { DELETE_CONTACT } from '../../reducers/contactsReducer';

export function* deleteContactWatcher() {
  yield takeLatest(DELETE_CONTACT, handleDeleteContact);
}