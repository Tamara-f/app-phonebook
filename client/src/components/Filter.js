import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { changeFilter } from '../redux/phone/phonebookActions';
import phoneSalectors from '../redux/phone/phoneSelectors';

const Filter = ({ contacts, value, onChangeFilter }) => {
  if (contacts.length > 0) {
    return (
      <div>
        <span>Find name</span>
        <input
          type="text"
          value={value}
          onChange={e => onChangeFilter(e.target.value)}
        />
      </div>
    );
  } else return null;
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  contacts: PropTypes.array.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};
const mapStateToProps = state => ({
  contacts: state.contacts.items,
  value: phoneSalectors.getFilter(state),
});

const mapDispatchToProps = {
  onChangeFilter: changeFilter,
};
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
