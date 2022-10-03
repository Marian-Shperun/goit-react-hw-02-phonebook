import PropTypes from 'prop-types';
import { formatPhoneNumber } from 'react-phone-number-input';

const ContactList = ({ selectdArry, deleteIt }) => {
  return (
    <>
      <ul>
        {selectdArry.map(({ id, name, number }) => {
          return (
            <li key={id}>
              <a href={'tel:' + { number }}>
                {name}: <span>{formatPhoneNumber(number)}</span>
              </a>
              <button
                key={id}
                onClick={() => {
                  deleteIt(id);
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default ContactList;

ContactList.propTypes = {
  selectdArry: PropTypes.array.isRequired,
  deleteIt: PropTypes.func.isRequired,
};
