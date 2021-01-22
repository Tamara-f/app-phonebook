import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import {
  addContactsSuccess,
  changeFilter,
  fetchContactsSuccess,
  removeContactsSuccess,
} from './phonebookActions';

const onAddContact = (state, action) => {
  const newContact = action.payload;
  return [...state, newContact];
};

const onRemoveContact = (state, action) =>
  state.filter(contact => contact._id !== action.payload);

const items = createReducer([], {
  [fetchContactsSuccess]: (state, action) => action.payload,
  [addContactsSuccess]: onAddContact,
  [removeContactsSuccess]: onRemoveContact,
});

const filter = createReducer('', {
  [changeFilter]: (state, action) => action.payload,
});

export default combineReducers({
  items,
  filter,
});
