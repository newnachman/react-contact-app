import { all, fork } from 'redux-saga/effects';
import { getAllContactsWatcher } from './watchers/getAllContactsWatcher';
import { addContactWatcher } from './watchers/addContactWatcher';
import { deleteContactWatcher } from './watchers/deleteContactWatcher';
import { getOneContactWatcher } from './watchers/getOneContactWatcher';
import { updateContactWatcher } from './watchers/updateContactWatcher';

export function* rootWatcherSaga() {

  yield all([
    fork(getAllContactsWatcher),
    fork(deleteContactWatcher),
    fork(addContactWatcher),
    fork(getOneContactWatcher),
    fork(updateContactWatcher),
  ]);
}