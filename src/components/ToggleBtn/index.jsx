import { AiOutlineMenuFold } from 'react-icons/ai';
import PropTypes from 'prop-types';
import styles from './ToggleBtn.module.scss';
import { useDispatch } from 'react-redux';
import { toggle } from '@redux/sidebarSlice';

const ToggleBtn = ({ title }) => {
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => dispatch(toggle())}
      className={styles.btn}
      title={title}>
      <AiOutlineMenuFold />
    </button>
  );
};

ToggleBtn.propTypes = {
  title: PropTypes.string,
};

export default ToggleBtn;
