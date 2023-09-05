import PropTypes from 'prop-types';
import styles from './TableCell.module.scss';

const TableCell = ({ children }) => {
  return (
    <td className={styles.cell}>
      <div>{children}</div>
    </td>
  );
};

TableCell.propTypes = {
  children: PropTypes.node,
};

export default TableCell;
