import cn from 'classnames';
import PropTypes from 'prop-types';
import styles from './Htag.module.scss';

const Htag = ({ level = 1, children }) => {
  switch (level) {
    case 1:
      return <h1 className={cn(styles.h, styles.h1)}>{children}</h1>;
    case 2:
      return <h2 className={cn(styles.h, styles.h2)}>{children}</h2>;
    case 3:
      return <h3 className={cn(styles.h, styles.h3)}>{children}</h3>;
    case 4:
      return <h4 className={cn(styles.h, styles.h4)}>{children}</h4>;
    case 5:
      return <h5 className={cn(styles.h, styles.h5)}>{children}</h5>;
    case 6:
      return <h6 className={cn(styles.h, styles.h6)}>{children}</h6>;

    default:
      return <span>{children}</span>;
  }
};

Htag.propTypes = {
  level: PropTypes.number,
  children: PropTypes.node,
};

export default Htag;
