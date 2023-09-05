import PropTypes from 'prop-types';
import styles from './ActionsRow.module.scss';

const ActionsRow = ({ children }) => {
  return <div className={styles.row}>{children}</div>;
};

ActionsRow.propTypes = {
  children: PropTypes.node,
};

export default ActionsRow;
