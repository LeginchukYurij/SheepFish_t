import PropTypes from 'prop-types';
import { BiSearch } from 'react-icons/bi';
import styles from './SearchField.module.scss';

const SearchField = ({ placeholder }) => {
  return (
    <div className={styles.container}>
      <BiSearch size={26} />
      <input
        type='text'
        placeholder={placeholder}
      />
    </div>
  );
};

SearchField.propTypes = {
  placeholder: PropTypes.string,
};

export default SearchField;
