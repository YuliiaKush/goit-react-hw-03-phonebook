import PropTypes from 'prop-types';
import { Component } from 'react';
import { nanoid } from 'nanoid';
import {
  ContactFormContainer,
  FormLabel,
  FormInput,
  FormButton,
} from './ContactForm.styled';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

    handleNumberChange = event => {
    const {name, value} = event.target
    this.setState({ [name]: value });
    };
    
  handleSubmit = event => {
    event.preventDefault();

    const { name, number } = this.state;
    const { onAddContact, contacts } = this.props;
    if (name.trim() === '' || number.trim() === '') return;

    const isExistingContact = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isExistingContact) {
      alert(`${name} is already in contacts.`);
      return;
    }

    const newContact = { id: nanoid(), name, number };
    onAddContact(newContact);
    this.setState({
      name: '',
      number: '',
    });
  };
  render() {
    const { name, number } = this.state;
    return (
      <ContactFormContainer onSubmit={this.handleSubmit}>
        <FormLabel htmlFor="nameInput">Name</FormLabel>
        <FormInput
          id="nameInput"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я\-'\s]*$"
          //   pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={this.handleNumberChange}
        />
        <FormLabel htmlFor="numberInput">Number</FormLabel>
        <FormInput
          id="numberInput"
          type="tel"
          name="number"
          pattern="[0-9]*"
          //  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={this.handleNumberChange}
        />
        <FormButton type="submit">Add contact</FormButton>
      </ContactFormContainer>
    );
  }
}

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
  contacts: PropTypes.array.isRequired,
};