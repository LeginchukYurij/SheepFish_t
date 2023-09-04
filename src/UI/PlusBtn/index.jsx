import { BsFillPlusCircleFill } from 'react-icons/bs';
import PropTypes from 'prop-types';
import styles from './PlusBtn.module.scss';

const PlusBtn = ({ onClick, title }) => {
  return (
    <button
      onClick={onClick}
      className={styles.btn}
      title={title}>
      <BsFillPlusCircleFill />
    </button>
  );
};

PlusBtn.propTypes = {
  onClick: PropTypes.func,
  title: PropTypes.string,
};

export default PlusBtn;
