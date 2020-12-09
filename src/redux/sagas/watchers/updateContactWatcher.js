import { takeLatest } from 'redux-saga/effects';
import { handleUpdateContact } from '../handlers/handleUpdateContact';
import { UPDATE_CONTACT } from '../../reducers/contactsReducer';

export function* updateContactWatcher() {
  yield takeLatest(UPDATE_CONTACT, handleUpdateContact);
}