import { AiOutlineMenuFold } from 'react-icons/ai';
import PropTypes from 'prop-types';
import styles from './ToggleBtn.module.scss';

const ToggleBtn = ({ onClick, title }) => {
  return (
    <button
      onClick={onClick}
      className={styles.btn}
      title={title}>
      <AiOutlineMenuFold />
    </button>
  );
};

ToggleBtn.propTypes = {
  onClick: PropTypes.func,
  title: PropTypes.string,
};

export default ToggleBtn;
