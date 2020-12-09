import { call, put } from 'redux-saga/effects';
import { setAllContacts } from '../../reducers/contactsReducer';
import { requestGetContacts } from '../requests/requestGetContacts';

export function* handleGetContacts(action) {
  console.log('handler')
  try {
    // Get all contacts
    const response = yield call(requestGetContacts);
    const { data } = response;
    // Update the state
    yield put(setAllContacts(data));
  } catch (error) {
    console.log(error);
  }
}
