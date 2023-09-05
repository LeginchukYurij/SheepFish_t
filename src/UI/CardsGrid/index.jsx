import PropTypes from 'prop-types';
import styles from './CardsGrid.module.scss';

const CardsGrid = ({ children }) => {
  return <div className={styles.grid}>{children}</div>;
};

CardsGrid.propTypes = {
  children: PropTypes.node,
};

export default CardsGrid;
