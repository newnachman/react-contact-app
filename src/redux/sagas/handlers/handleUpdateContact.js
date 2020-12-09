// 

import { call } from 'redux-saga/effects';
import { requestUpdateContact } from '../requests/requestUpdateContact';

export function* handleUpdateContact(action) {
  try {
    // Update the specific contact (action contains id + data)
    yield call(requestUpdateContact, action);
  } catch (error) {
    console.log(error);
  }
}
