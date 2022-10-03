/* eslint-disable array-callback-return */
import React, { Component } from 'react';
import ContactForm from './ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList';


import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    //  перевірка на дублікат при введеному імені
    setTimeout(() => {
      this.checkNameContacts(value, this.state.contacts) &&
        alert(`${value} already in contact`);
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    //  перевірка на дублікат при відправіці форми
    if (!this.checkNameContacts(newContact.name, this.state.contacts)) {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, newContact],
      }));
      e.target.reset();
    } else {
      alert(`${newContact.name} is already in contact`);
    }
  };

  filterContacts = () => {
    const { contacts, filter } = this.state;
    const normilizeFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normilizeFilter)
    );
  };

  checkNameContacts = (enteredName, contacts) => {
    return contacts.find(
      contact => contact.name.toLowerCase() === enteredName.toLowerCase()
    );
  };

  deleteContacts = id => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== id),
    });
  };

  render() {
    const { contacts, filter } = this.state;
    return (
      <div className="container">
        <h1>Phonebook</h1>
        <ContactForm
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
        />

        <h2>Contacts</h2>
        {contacts.length === 0 ? (
          <p>No contacts added</p>
        ) : (
          <>
            <Filter
              title="Find contacts by name"
              onChange={this.handleChange}
              contacts={this.filterContacts}
            />
            <ContactList
              selectdArry={filter !== '' ? this.filterContacts() : contacts}
              deleteIt={this.deleteContacts}
            />
          </>
        )}
      </div>
    );
  }
}
