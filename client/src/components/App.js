import React, { Component } from 'react';
import { connect } from 'react-redux';

import Section from './Section';
import ContactList from './ContactList';
import ContactEditor from './ContactEditor';
import Filter from './Filter';
import phoneOperations from '../redux/phone/phoneOperations';

class App extends Component {
  componentDidMount() {
    this.props.onFetchContacts();
  }

  render() {
    return (
      <Section>
        <ContactEditor />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </Section>
    );
  }
}

const mapDispatchToProps = {
  onFetchContacts: phoneOperations.fetchContacts,
};
export default connect(null, mapDispatchToProps)(App);
