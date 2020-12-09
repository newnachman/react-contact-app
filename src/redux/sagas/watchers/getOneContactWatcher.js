import { takeLatest } from 'redux-saga/effects';
import { handleGetOneContact } from '../handlers/handleGetOneContact';
import { GET_ONE_CONTACT } from '../../reducers/contactsReducer';

export function* getOneContactWatcher() {
  yield takeLatest(GET_ONE_CONTACT, handleGetOneContact);
}