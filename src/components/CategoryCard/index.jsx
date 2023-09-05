import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './CategoryCard.module.scss';

const CategoryCard = ({ name, path }) => {
  const colors = ['#e74645', '#fb7756', '#facd60', '#fdfa66', '#1ac0c6'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  return (
    <Link
      to={path}
      className={styles.card}>
      <div
        className={styles.fakeImg}
        style={{ backgroundColor: randomColor }}></div>
      <span>{name}</span>
    </Link>
  );
};

CategoryCard.propTypes = {
  name: PropTypes.string,
  path: PropTypes.string,
};

export default CategoryCard;
