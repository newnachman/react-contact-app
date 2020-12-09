import { call, put } from 'redux-saga/effects';
import { setOneContact } from '../../reducers/contactsReducer';
import { requestGetOneContact } from '../requests/requestGetOneContact';

export function* handleGetOneContact(action) {
  try {
    // Get the specific contact
    const response = yield call(requestGetOneContact, action.id);
    const { data } = response;
    // Update the state
    yield put(setOneContact(data));
  } catch (error) {
    console.log('error');
    console.log(error);
  }
}
