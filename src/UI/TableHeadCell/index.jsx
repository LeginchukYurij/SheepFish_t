import PropTypes from 'prop-types';
import styles from './TableHeadCell.module.scss';

const TableHeadCell = ({ children }) => {
  return (
    <th className={styles.cell}>
      <div>{children}</div>
    </th>
  );
};

TableHeadCell.propTypes = {
  children: PropTypes.node,
};

export default TableHeadCell;
