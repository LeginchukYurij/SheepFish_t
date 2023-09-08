import { BsSortAlphaDown, BsSortAlphaUpAlt } from 'react-icons/bs';
import cn from 'classnames';
import PropTypes from 'prop-types';
import styles from './SortNum.module.scss';

const SortAZ = ({ onClick, field, isActive = false, reverse = false }) => {
  return (
    <>
      <button
        className={cn(styles.btn, { [styles.active]: isActive && !reverse })}
        onClick={() => onClick(field, false)}>
        <BsSortAlphaDown size={18} />
      </button>

      <button
        className={cn(styles.btn, { [styles.active]: isActive && reverse })}
        onClick={() => onClick(field, true)}>
        <BsSortAlphaUpAlt size={18} />
      </button>
    </>
  );
};

SortAZ.propTypes = {
  onClick: PropTypes.func.isRequired,
  field: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  reverse: PropTypes.bool,
};

export default SortAZ;
