import { createAction } from '@reduxjs/toolkit';

export const addContactsRequest = createAction('contacts/addRequest');
export const addContactsSuccess = createAction('contacts/addSuccess');
export const addContactsError = createAction('contacts/addError');

export const fetchContactsRequest = createAction('contacts/fetchRequest');
export const fetchContactsSuccess = createAction('contacts/fetchSuccess');
export const fetchContactsError = createAction('contacts/fetchError');

export const removeContactsRequest = createAction('contacts/removeRequest');
export const removeContactsSuccess = createAction('contacts/removeSuccess');
export const removeContactsError = createAction('contacts/removeError');

export const changeFilter = createAction('phonebook/filter');
