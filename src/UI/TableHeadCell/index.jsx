import PropTypes from 'prop-types';
import styles from './TableHeadCell.module.scss';

const TableHeadCell = ({ children }) => {
  return <th className={styles.cell}>{children}</th>;
};

TableHeadCell.propTypes = {
  children: PropTypes.node,
};

export default TableHeadCell;
