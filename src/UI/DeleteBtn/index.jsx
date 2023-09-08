import { RiDeleteBin6Fill } from 'react-icons/ri';
import PropTypes from 'prop-types';
import styles from './DeleteBtn.module.scss';

const DeleteBtn = ({ onClick }) => {
  return (
    <button
      className={styles.btn}
      onClick={onClick}>
      <RiDeleteBin6Fill
        size={16}
        color='red'
      />
    </button>
  );
};

DeleteBtn.propTypes = {
  onClick: PropTypes.func,
};

export default DeleteBtn;
