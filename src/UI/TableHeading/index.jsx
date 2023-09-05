import PropTypes from 'prop-types';
import styles from './TableHeading.module.scss';

const TableHeading = ({ children }) => {
  return <thead className={styles.head}>{children}</thead>;
};

TableHeading.propTypes = {
  children: PropTypes.node,
};

export default TableHeading;
