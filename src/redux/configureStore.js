import { applyMiddleware, combineReducers, createStore } from 'redux';
import contactsReducer from './reducers/contactsReducer';
import createSagaMiddleware from 'redux-saga';
import { rootWatcherSaga } from './sagas/rootSaga';

const reducer = combineReducers({
  contactsReducer: contactsReducer
});

const sagaMiddleware = createSagaMiddleware();

const initialState = {}

const middleware = [sagaMiddleware]

const store = createStore(reducer, initialState, applyMiddleware(...middleware));

sagaMiddleware.run(rootWatcherSaga);

export default store;