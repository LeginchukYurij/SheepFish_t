import PropTypes from 'prop-types';
import styles from './TableRow.module.scss';

const TableRow = ({ children }) => {
  return <tr className={styles.row}>{children}</tr>;
};

TableRow.propTypes = {
  children: PropTypes.node,
};

export default TableRow;
