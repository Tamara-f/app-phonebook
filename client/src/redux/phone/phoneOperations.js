import axios from 'axios';

import {
  addContactsError,
  addContactsSuccess,
  addContactsRequest,
  fetchContactsRequest,
  fetchContactsError,
  fetchContactsSuccess,
  removeContactsRequest,
  removeContactsSuccess,
  removeContactsError,
} from './phonebookActions';

axios.defaults.baseURL = 'http://localhost:4000';

const addContact = ({ name, phone }) => dispatch => {
  dispatch(addContactsRequest());
  axios
    .post('/phonebook', {
      name: name,
      phone: phone,
    })
    .then(({ data }) => dispatch(addContactsSuccess(data)))
    .catch(error => dispatch(addContactsError(error)));
};

const fetchContacts = () => dispatch => {
  dispatch(fetchContactsRequest());
  axios
    .get('/phonebook')
    .then(({ data }) => dispatch(fetchContactsSuccess(data)))
    .catch(error => dispatch(fetchContactsError(error)));
};

const removeContact = id => dispatch => {
  console.log(id);
  dispatch(removeContactsRequest());
  axios
    .delete(`/phonebook/${id}`)
    .then(() => dispatch(removeContactsSuccess(id)))
    .catch(error => dispatch(removeContactsError(error)));
};

export default { addContact, fetchContacts, removeContact };
