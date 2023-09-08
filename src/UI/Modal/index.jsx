import { useDispatch } from 'react-redux';
import styles from './Modal.module.scss';
import { AiFillCloseCircle } from 'react-icons/ai';
import { hide } from '@redux/modalSlice';
import PropTypes from 'prop-types';

const Modal = ({ title, isActive = false, children }) => {
  const dispatch = useDispatch();
  const handleCloseModal = () => {
    dispatch(hide());
  };
  return (
    isActive && (
      <div
        className={styles.modal}
        onClick={handleCloseModal}>
        <div
          className={styles.inner}
          onClick={(e) => e.stopPropagation()}>
          <button
            className={styles.close}
            onClick={handleCloseModal}>
            <AiFillCloseCircle
              size={22}
              color='red'
            />
          </button>

          <span className={styles.title}>{title}</span>

          {children}
        </div>
      </div>
    )
  );
};

Modal.propTypes = {
  title: PropTypes.string,
  isActive: PropTypes.bool,
  children: PropTypes.node,
};

export default Modal;
