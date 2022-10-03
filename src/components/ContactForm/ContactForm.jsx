import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

const idName = nanoid();
const idNumber = nanoid();
const ContactForm = ({ onSubmit, onChange }) => {
  return (
    <>
      <form onSubmit={onSubmit}>
        <label htmlFor={idName}>
          Name
          <br />
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            id={idName}
            onChange={onChange}
          />
        </label>
        <label htmlFor={idNumber}>
          Number
          <br />
          <input
            type="tel"
            name="number"
            id={idNumber}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={onChange}
          />
        </label>
        <button type="submit">Add const</button>
      </form>
    </>
  );
};
export default ContactForm;
ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};
