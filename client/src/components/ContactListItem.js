import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import phoneOperations from '../redux/phone/phoneOperations';
import phoneSelectors from '../redux/phone/phoneSelectors';

const ContactListItem = ({ name, phone, onRemove }) => (
  <li key={phone}>
    <span>
      {name}: {phone}
    </span>
    <button type="button" className="deleteBtn" onClick={onRemove}>
      Delete
    </button>
  </li>
);

const mapStateToProps = (state, ownProps) => ({
  ...phoneSelectors.getContactById(state, ownProps.id),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onRemove: () => dispatch(phoneOperations.removeContact(ownProps.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactListItem);
