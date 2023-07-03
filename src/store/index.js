import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import fileReducer from '../reducer/fileReducer';

const store = createStore(fileReducer, applyMiddleware(thunk));

export default store;
