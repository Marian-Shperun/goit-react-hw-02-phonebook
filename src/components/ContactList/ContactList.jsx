import PropTypes from 'prop-types';
const ContactList = ({ selectdArry, deleteIt }) => {
  return (
    <>
      <ul>
        {selectdArry.map(({ id, name, number }) => {
          return (
            <li key={id}>
              <a href={'tel:' + { number }}>
                {name}: {number}
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
