import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './CategoryCard.module.scss';

const CategoryCard = ({ name, path }) => {
  return (
    <Link
      to={path}
      className={styles.card}>
      <div
        className={styles.fakeImg}
        style={{ backgroundColor: '#1ac0c6' }}></div>
      <span>{name}</span>
    </Link>
  );
};

CategoryCard.propTypes = {
  name: PropTypes.string,
  path: PropTypes.string,
};

export default CategoryCard;
