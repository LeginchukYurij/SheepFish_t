import PropTypes from 'prop-types';
import { BiSearch } from 'react-icons/bi';
import styles from './SearchField.module.scss';

const SearchField = ({ placeholder, onChange }) => {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div className={styles.container}>
      <BiSearch size={26} />
      <input
        type='text'
        onChange={handleChange}
        placeholder={placeholder}
      />
    </div>
  );
};

SearchField.propTypes = {
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

export default SearchField;
